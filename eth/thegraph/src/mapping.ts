import { ethereum, BigInt } from "@graphprotocol/graph-ts";
import {
  Approval as ApprovalEvent,
  CategoryCreated as CategoryCreatedEvent,
  CategoryUpdated as CategoryUpdatedEvent,
  OwnedCategoryUpdated as OwnedCategoryUpdatedEvent,
  ItemCoverUpdated as ItemCoverUpdatedEvent,
  ItemCreated as ItemCreatedEvent,
  ItemFilesUpdated as ItemFilesUpdatedEvent,
  SetLastItemVersion as SetLastItemVersionEvent,
  ItemUpdated as ItemUpdatedEvent,
  LinkUpdated as LinkUpdatedEvent,
  SetARWallet as SetARWalletEvent,
  SetNick as SetNickEvent,
  SetAuthorInfo as SetAuthorInfoEvent,
  SetItemOwner as SetItemOwnerEvent,
  SetOwner as SetOwnerEvent,
  SetSalesOwnerShare as SetSalesOwnerShareEvent,
  SetUpvotesOwnerShare as SetUpvotesOwnerShareEvent,
  SetUploadOwnerShare as SetUploadOwnerShareEvent,
  Transfer as TransferEvent,
  ChildParentVote as ChildParentVoteEvent,
  Pay as PayEvent,
  Donate as DonateEvent,
} from "../generated/Contract/Contract"
import {
  Approval,
  CategoryCreated,
  CategoryUpdated,
  OwnedCategoryUpdated,
  ItemCoverUpdated,
  ItemCreated,
  ItemFilesUpdated,
  SetLastItemVersion,
  ItemUpdated,
  LinkUpdated,
  SetARWallet,
  SetNick,
  SetAuthorInfo,
  SetItemOwner,
  SetOwner,
  SetSalesOwnerShare,
  SetUpvotesOwnerShare,
  SetUploadOwnerShare,
  Transfer,
  ChildParentVote,
  Pay,
  Donate,
} from "../generated/schema"

function generateId(event: ethereum.Event): String {
  let block = event.block.number.toHex().substring(2)
  block = '0x' + block.padStart(64, '0');
  let logIndex = event.logIndex.toHex().substring(2)
  logIndex = '0x' + logIndex.padStart(64, '0');
  return block + "-" + logIndex + "-" + event.transaction.hash.toHex();
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    generateId(event)
  )
  entity._spender = event.params._spender
  entity._value = event.params._value
  entity.save()
}

export function handleCategoryCreated(event: CategoryCreatedEvent): void {
  let entity = new CategoryCreated(
    generateId(event)
  )
  entity.categoryId = event.params.categoryId
  entity.owner = event.params.owner
  entity.save()
}

export function handleCategoryUpdated(event: CategoryUpdatedEvent): void {
  let entity = new CategoryUpdated(
    generateId(event)
  )
  entity.categoryId = event.params.categoryId
  entity.title = event.params.title
  entity.locale = event.params.locale
  entity.save()
}

export function handleOwnedCategoryUpdated(event: OwnedCategoryUpdatedEvent): void {
  let entity = new OwnedCategoryUpdated(
    generateId(event)
  )
  entity.categoryId = event.params.categoryId
  entity.title = event.params.title
  entity.shortDescription = event.params.shortDescription
  entity.description = event.params.description
  entity.locale = event.params.locale
  entity.owner = event.params.owner
  entity.save()
}

export function handleCoverItemUpdated(event: ItemCoverUpdatedEvent): void {
  let entity = new ItemCoverUpdated(
    generateId(event)
  )
  entity.itemId = event.params.itemId
  entity.version = event.params.version
  entity.cover = event.params.cover
  entity.width = event.params.width
  entity.height = event.params.height
  entity.save()
}

export function handleItemCreated(event: ItemCreatedEvent): void {
  let entity = new ItemCreated(
    generateId(event)
  )
  entity.itemId = event.params.itemId
  entity.save()
}

export function handleItemFilesUpdated(event: ItemFilesUpdatedEvent): void {
  let entity = new ItemFilesUpdated(
    generateId(event)
  )
  entity.itemId = event.params.itemId
  entity.format = event.params.format
  entity.version = event.params.version
  entity.hash = event.params.hash
  entity.save()
}

export function handleSetLastItemVersion(event: SetLastItemVersionEvent): void {
  let entity = new SetLastItemVersion(
    generateId(event)
  )
  entity.itemId = event.params.itemId
  entity.version = event.params.version
  entity.save()
}

export function handleItemUpdated(event: ItemUpdatedEvent): void {
  let entity = new ItemUpdated(
    generateId(event)
  )
  entity.itemId = event.params.itemId
  entity.title = event.params.info.title
  entity.shortDescription = event.params.info.shortDescription
  entity.description = event.params.info.description
  entity.priceETH = event.params.info.priceETH
  entity.priceAR = event.params.info.priceAR
  entity.locale = event.params.info.locale
  entity.license = event.params.info.license
  entity.save()
}

export function handleLinkUpdated(event: LinkUpdatedEvent): void {
  let entity = new LinkUpdated(
    generateId(event)
  )
  entity.linkId = event.params.linkId
  entity.link = event.params.link
  entity.title = event.params.title
  entity.shortDescription = event.params.shortDescription
  entity.description = event.params.description
  entity.locale = event.params.locale
  entity.linkKind = event.params.linkKind
  entity.save()
}

export function handleSetARWallet(event: SetARWalletEvent): void {
  let entity = new SetARWallet(
    generateId(event)
  )
  entity.owner = event.params.owner
  entity.arWallet = event.params.arWallet
  entity.save()
}

export function handleSetNick(event: SetNickEvent): void {
  let entity = new SetNick(
    generateId(event)
  )
  entity.owner = event.params.owner
  entity.nick = event.params.nick
  entity.save()
}

export function handleSetAuthorInfo(event: SetAuthorInfoEvent): void {
  let entity = new SetAuthorInfo(
    generateId(event)
  )
  entity.owner = event.params.owner
  entity.link = event.params.link
  entity.shortDescription = event.params.shortDescription
  entity.description = event.params.description
  entity.locale = event.params.locale
  entity.save()
}

export function handleSetItemOwner(event: SetItemOwnerEvent): void {
  let entity = new SetItemOwner(
    generateId(event)
  )
  entity.itemId = event.params.itemId
  entity.owner = event.params.owner
  entity.save()
}

export function handleSetOwner(event: SetOwnerEvent): void {
  let entity = new SetOwner(
    generateId(event)
  )
  entity.owner = event.params.owner
  entity.save()
}

export function handleSetSalesOwnerShare(event: SetSalesOwnerShareEvent): void {
  let entity = new SetSalesOwnerShare(
    generateId(event)
  )
  entity.share = event.params.share
  entity.save()
}

export function handleSetUpvotesOwnerShare(event: SetUpvotesOwnerShareEvent): void {
  let entity = new SetUpvotesOwnerShare(
    generateId(event)
  )
  entity.share = event.params.share
  entity.save()
}

export function handleSetUploadOwnerShare(event: SetUploadOwnerShareEvent): void {
  let entity = new SetUploadOwnerShare(
    generateId(event)
  )
  entity.share = event.params.share
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    generateId(event)
  )
  entity._from = event.params._from
  entity._to = event.params._to
  entity._value = event.params._value
  entity.save()
}

export function handleChildParentVote(event: ChildParentVoteEvent): void {
  let entity = new ChildParentVote(
    generateId(event)
  )
  entity.child = event.params.child
  entity.parent = event.params.parent
  entity.value = event.params.value
  entity.featureLevel = event.params.featureLevel
  entity.primary = event.params.primary
  entity.save()
}

export function handlePay(event: PayEvent): void {
  let entity = new Pay(
    generateId(event)
  )
  entity.payer = event.params.payer
  entity.payee = event.params.payee
  entity.itemId = event.params.itemId
  entity.value = event.params.value
  entity.save()
}

export function handleDonate(event: DonateEvent): void {
  let entity = new Donate(
    generateId(event)
  )
  entity.payer = event.params.payer
  entity.payee = event.params.payee
  entity.itemId = event.params.itemId
  entity.value = event.params.value
  entity.save()
}
