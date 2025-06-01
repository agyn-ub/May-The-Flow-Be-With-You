import "EggWisdom"
import "NonFungibleToken"
import "MetadataViews"
import "FlowToken"
import "FungibleToken"

/// Retrieves the saved Receipt and redeems it to reveal the cards
///
transaction() {

    prepare(signer: auth(BorrowValue, IssueStorageCapabilityController, PublishCapability, SaveValue, UnpublishCapability) &Account) {
        // get ref to ReceiptStorage
        let storageRef = signer.storage.borrow<&EggWisdom.EggStorage>(from: EggWisdom.EggStoragePath)
            ?? panic("Cannot borrow a reference to the recipient's EggWisdom EggStorage")

        let collectionData = EggWisdom.resolveContractView(resourceType: nil, viewType: Type<MetadataViews.NFTCollectionData>()) as! MetadataViews.NFTCollectionData?
            ?? panic("ViewResolver does not resolve NFTCollectionData view")

        // Check if the account already has a collection
        if signer.storage.borrow<&EggWisdom.Collection>(from: collectionData.storagePath) == nil {
            // Create a new empty collection
            let collection <- EggWisdom.createEmptyCollection(nftType: Type<@EggWisdom.NFT>())
            // save it to the account
            signer.storage.save(<-collection, to: collectionData.storagePath)
            // the old "unlink"
            let oldLink = signer.capabilities.unpublish(collectionData.publicPath)
            // create a public capability for the collection
            let collectionCap = signer.capabilities.storage.issue<&EggWisdom.Collection>(collectionData.storagePath)
            signer.capabilities.publish(collectionCap, at: collectionData.publicPath)
        }
        // Check if the account already has a receipt storage
        if signer.storage.type(at: EggWisdom.EggStoragePath) == nil {
            let storage <- EggWisdom.createEmptyEggStorage()
            signer.storage.save(<- storage, to: EggWisdom.EggStoragePath)
            // create a public capability for the storage
            let storageCap = signer.capabilities.storage.issue<&EggWisdom.EggStorage>(EggWisdom.EggStoragePath)
            signer.capabilities.publish(storageCap, at: EggWisdom.EggStoragePublicPath)
        }
        // Get a reference to the signer's stored vault
        let vaultRef = signer.storage.borrow<auth(FungibleToken.Withdraw) &FlowToken.Vault>(from: /storage/flowTokenVault)
            ?? panic("The signer does not store a FlowToken Vault object at the path "
                    .concat("/storage/flowTokenVault. ")
                    .concat("The signer must initialize their account with this vault first!"))

        // Mint Wisdom
        let egg = EggWisdom.mintWisdomEgg(recipient: signer.address, payment: <- vaultRef.withdraw(amount: 5.0))
        
    }
}