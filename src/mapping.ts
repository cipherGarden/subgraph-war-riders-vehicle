import { BigInt } from "@graphprotocol/graph-ts"
import {
  WarRiders,
  OwnershipRenounced,
  OwnershipTransferred,
  Transfer,
  Approval,
  ApprovalForAll, 
  MintCall
} from "../generated/WarRiders/WarRiders"
import { 
  Mint,
  Vehicle
} from "../generated/schema"

export function handleMint(call: MintCall): void {
  let id = call.inputs.cType.toString().concat('/').concat(call.inputs._tokenId.toString())
  let mint = new Mint(id)
  

  mint.to = call.inputs.newOwner
  mint.tokenID = call.inputs._tokenId

  mint.save()

  let vehicle = new Vehicle(call.transaction.hash.toHex().concat('/').concat(call.inputs._tokenId.toString()))
  vehicle.tokenID = call.inputs._tokenId
  vehicle.tankSize = call.inputs.tankSize
  vehicle.type = call.inputs.cType

  vehicle.save()
}

// export function handleOwnershipRenounced(event: OwnershipRenounced): void {
//   // Entities can be loaded from the store using a string ID; this ID
//   // needs to be unique across all entities of the same type
//   let entity = ExampleEntity.load(event.transaction.from.toHex())

//   // Entities only exist after they have been saved to the store;
//   // `null` checks allow to create entities on demand
//   if (!entity) {
//     entity = new ExampleEntity(event.transaction.from.toHex())

//     // Entity fields can be set using simple assignments
//     entity.count = BigInt.fromI32(0)
//   }

//   // BigInt and BigDecimal math are supported
//   entity.count = entity.count + BigInt.fromI32(1)

//   // Entity fields can be set based on event parameters
//   entity.previousOwner = event.params.previousOwner

//   // Entities can be written to the store with `.save()`
//   entity.save()

//   // Note: If a handler doesn't require existing field values, it is faster
//   // _not_ to load the entity from the store. Instead, create it fresh with
//   // `new Entity(...)`, set the fields that should be updated and save the
//   // entity back to the store. Fields that were not set or unset remain
//   // unchanged, allowing for partial updates to be applied.

//   // It is also possible to access smart contracts from mappings. For
//   // example, the contract that has emitted the event can be connected to
//   // with:
//   //
//   // let contract = Contract.bind(event.address)
//   //
//   // The following functions can then be called on this contract to access
//   // state variables and other data:
//   //
//   // - contract.supportsInterface(...)
//   // - contract.isPremium(...)
//   // - contract.maxTankSizes(...)
//   // - contract.name(...)
//   // - contract.getApproved(...)
//   // - contract.getPremiumCarsForVariant(...)
//   // - contract.MIDGRADE_TYPE3(...)
//   // - contract.HATCHBACK(...)
//   // - contract.totalSupply(...)
//   // - contract.InterfaceId_ERC165(...)
//   // - contract.MIDGRADE_TYPE_COUNT(...)
//   // - contract.REGULAR_TYPE3(...)
//   // - contract.UNKNOWN_TYPE(...)
//   // - contract.tokenOfOwnerByIndex(...)
//   // - contract.TANK_TYPE(...)
//   // - contract.carType(...)
//   // - contract.getPremiumCarSupply(...)
//   // - contract.getMidgradeCarSupply(...)
//   // - contract.LAMBO_TYPE(...)
//   // - contract.isCarSpecial(...)
//   // - contract.REGULAR_TYPE_COUNT(...)
//   // - contract.exists(...)
//   // - contract.tokenByIndex(...)
//   // - contract.getCarType(...)
//   // - contract.ownerOf(...)
//   // - contract.carTypeSupply(...)
//   // - contract.balanceOf(...)
//   // - contract.isMidGrade(...)
//   // - contract.getMidgradeCarsForVariant(...)
//   // - contract.getRegularCarsForVariant(...)
//   // - contract.REGULAR_TYPE2(...)
//   // - contract.SUV_TYPE(...)
//   // - contract.owner(...)
//   // - contract.isTypeSpecial(...)
//   // - contract.symbol(...)
//   // - contract.maxBznTankSizeOfRegularCarWithIndex(...)
//   // - contract.MIDGRADE_TYPE2(...)
//   // - contract.midGradeTotalSupplyForCar(...)
//   // - contract.premiumTotalSupplyForCar(...)
//   // - contract.regularTotalSupplyForCar(...)
//   // - contract.TANKER_TYPE(...)
//   // - contract.isRegular(...)
//   // - contract.getTotalSupplyForType(...)
//   // - contract.carTypeTotalSupply(...)
//   // - contract.tokenURI(...)
//   // - contract.isSpecial(...)
//   // - contract.HOVERCRAFT_TYPE(...)
//   // - contract.PREMIUM_TYPE_COUNT(...)
//   // - contract.tankSizes(...)
//   // - contract.DUNE_BUGGY(...)
//   // - contract.getRegularCarSupply(...)
//   // - contract.METADATA_URL(...)
//   // - contract.maxBznTankSizeOfPremiumCarWithIndex(...)
//   // - contract.maxBznTankSizeOfMidGradeCarWithIndex(...)
//   // - contract.isApprovedForAll(...)
// }

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTransfer(event: Transfer): void {}

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}
