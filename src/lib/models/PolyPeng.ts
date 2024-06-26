/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
	BaseContract,
	BigNumberish,
	BytesLike,
	FunctionFragment,
	Result,
	Interface,
	EventFragment,
	AddressLike,
	ContractRunner,
	ContractMethod,
	Listener
} from "ethers";
import type {
	TypedContractEvent,
	TypedDeferredTopicFilter,
	TypedEventLog,
	TypedLogDescription,
	TypedListener,
	TypedContractMethod
} from "./contract-common";

export interface PolyPengInterface extends Interface {
	getFunction(
		nameOrSignature:
			| "add100PresaleUsers"
			| "addPresaleUser"
			| "approve"
			| "balanceOf"
			| "baseExtension"
			| "baseURI"
			| "cost"
			| "getApproved"
			| "isApprovedForAll"
			| "maxMintAmount"
			| "maxSupply"
			| "mint"
			| "name"
			| "owner"
			| "ownerOf"
			| "pause"
			| "paused"
			| "presaleCost"
			| "presaleWallets"
			| "removePresaleUser"
			| "removeWhitelistUser"
			| "renounceOwnership"
			| "safeTransferFrom(address,address,uint256)"
			| "safeTransferFrom(address,address,uint256,bytes)"
			| "setApprovalForAll"
			| "setBaseExtension"
			| "setBaseURI"
			| "setCost"
			| "setPresaleCost"
			| "setmaxMintAmount"
			| "supportsInterface"
			| "symbol"
			| "tokenByIndex"
			| "tokenOfOwnerByIndex"
			| "tokenURI"
			| "totalSupply"
			| "transferFrom"
			| "transferOwnership"
			| "walletOfOwner"
			| "whitelistUser"
			| "whitelisted"
			| "withdraw"
	): FunctionFragment;

	getEvent(
		nameOrSignatureOrTopic: "Approval" | "ApprovalForAll" | "OwnershipTransferred" | "Transfer"
	): EventFragment;

	encodeFunctionData(functionFragment: "add100PresaleUsers", values: [AddressLike[]]): string;
	encodeFunctionData(functionFragment: "addPresaleUser", values: [AddressLike]): string;
	encodeFunctionData(functionFragment: "approve", values: [AddressLike, BigNumberish]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [AddressLike]): string;
	encodeFunctionData(functionFragment: "baseExtension", values?: undefined): string;
	encodeFunctionData(functionFragment: "baseURI", values?: undefined): string;
	encodeFunctionData(functionFragment: "cost", values?: undefined): string;
	encodeFunctionData(functionFragment: "getApproved", values: [BigNumberish]): string;
	encodeFunctionData(
		functionFragment: "isApprovedForAll",
		values: [AddressLike, AddressLike]
	): string;
	encodeFunctionData(functionFragment: "maxMintAmount", values?: undefined): string;
	encodeFunctionData(functionFragment: "maxSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "mint", values: [AddressLike, BigNumberish]): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "owner", values?: undefined): string;
	encodeFunctionData(functionFragment: "ownerOf", values: [BigNumberish]): string;
	encodeFunctionData(functionFragment: "pause", values: [boolean]): string;
	encodeFunctionData(functionFragment: "paused", values?: undefined): string;
	encodeFunctionData(functionFragment: "presaleCost", values?: undefined): string;
	encodeFunctionData(functionFragment: "presaleWallets", values: [AddressLike]): string;
	encodeFunctionData(functionFragment: "removePresaleUser", values: [AddressLike]): string;
	encodeFunctionData(functionFragment: "removeWhitelistUser", values: [AddressLike]): string;
	encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
	encodeFunctionData(
		functionFragment: "safeTransferFrom(address,address,uint256)",
		values: [AddressLike, AddressLike, BigNumberish]
	): string;
	encodeFunctionData(
		functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
		values: [AddressLike, AddressLike, BigNumberish, BytesLike]
	): string;
	encodeFunctionData(functionFragment: "setApprovalForAll", values: [AddressLike, boolean]): string;
	encodeFunctionData(functionFragment: "setBaseExtension", values: [string]): string;
	encodeFunctionData(functionFragment: "setBaseURI", values: [string]): string;
	encodeFunctionData(functionFragment: "setCost", values: [BigNumberish]): string;
	encodeFunctionData(functionFragment: "setPresaleCost", values: [BigNumberish]): string;
	encodeFunctionData(functionFragment: "setmaxMintAmount", values: [BigNumberish]): string;
	encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "tokenByIndex", values: [BigNumberish]): string;
	encodeFunctionData(
		functionFragment: "tokenOfOwnerByIndex",
		values: [AddressLike, BigNumberish]
	): string;
	encodeFunctionData(functionFragment: "tokenURI", values: [BigNumberish]): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(
		functionFragment: "transferFrom",
		values: [AddressLike, AddressLike, BigNumberish]
	): string;
	encodeFunctionData(functionFragment: "transferOwnership", values: [AddressLike]): string;
	encodeFunctionData(functionFragment: "walletOfOwner", values: [AddressLike]): string;
	encodeFunctionData(functionFragment: "whitelistUser", values: [AddressLike]): string;
	encodeFunctionData(functionFragment: "whitelisted", values: [AddressLike]): string;
	encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

	decodeFunctionResult(functionFragment: "add100PresaleUsers", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "addPresaleUser", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "baseExtension", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "baseURI", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "cost", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxMintAmount", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "presaleCost", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "presaleWallets", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "removePresaleUser", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "removeWhitelistUser", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
	decodeFunctionResult(
		functionFragment: "safeTransferFrom(address,address,uint256)",
		data: BytesLike
	): Result;
	decodeFunctionResult(
		functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
		data: BytesLike
	): Result;
	decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "setBaseExtension", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "setBaseURI", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "setCost", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "setPresaleCost", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "setmaxMintAmount", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "tokenByIndex", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "tokenOfOwnerByIndex", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "walletOfOwner", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "whitelistUser", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "whitelisted", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace ApprovalEvent {
	export type InputTuple = [owner: AddressLike, approved: AddressLike, tokenId: BigNumberish];
	export type OutputTuple = [owner: string, approved: string, tokenId: bigint];
	export interface OutputObject {
		owner: string;
		approved: string;
		tokenId: bigint;
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	export type Filter = TypedDeferredTopicFilter<Event>;
	export type Log = TypedEventLog<Event>;
	export type LogDescription = TypedLogDescription<Event>;
}

export namespace ApprovalForAllEvent {
	export type InputTuple = [owner: AddressLike, operator: AddressLike, approved: boolean];
	export type OutputTuple = [owner: string, operator: string, approved: boolean];
	export interface OutputObject {
		owner: string;
		operator: string;
		approved: boolean;
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	export type Filter = TypedDeferredTopicFilter<Event>;
	export type Log = TypedEventLog<Event>;
	export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
	export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
	export type OutputTuple = [previousOwner: string, newOwner: string];
	export interface OutputObject {
		previousOwner: string;
		newOwner: string;
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	export type Filter = TypedDeferredTopicFilter<Event>;
	export type Log = TypedEventLog<Event>;
	export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
	export type InputTuple = [from: AddressLike, to: AddressLike, tokenId: BigNumberish];
	export type OutputTuple = [from: string, to: string, tokenId: bigint];
	export interface OutputObject {
		from: string;
		to: string;
		tokenId: bigint;
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	export type Filter = TypedDeferredTopicFilter<Event>;
	export type Log = TypedEventLog<Event>;
	export type LogDescription = TypedLogDescription<Event>;
}

export interface PolyPeng extends BaseContract {
	connect(runner?: ContractRunner | null): PolyPeng;
	waitForDeployment(): Promise<this>;

	interface: PolyPengInterface;

	queryFilter<TCEvent extends TypedContractEvent>(
		event: TCEvent,
		fromBlockOrBlockhash?: string | number | undefined,
		toBlock?: string | number | undefined
	): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(
		filter: TypedDeferredTopicFilter<TCEvent>,
		fromBlockOrBlockhash?: string | number | undefined,
		toBlock?: string | number | undefined
	): Promise<Array<TypedEventLog<TCEvent>>>;

	on<TCEvent extends TypedContractEvent>(
		event: TCEvent,
		listener: TypedListener<TCEvent>
	): Promise<this>;
	on<TCEvent extends TypedContractEvent>(
		filter: TypedDeferredTopicFilter<TCEvent>,
		listener: TypedListener<TCEvent>
	): Promise<this>;

	once<TCEvent extends TypedContractEvent>(
		event: TCEvent,
		listener: TypedListener<TCEvent>
	): Promise<this>;
	once<TCEvent extends TypedContractEvent>(
		filter: TypedDeferredTopicFilter<TCEvent>,
		listener: TypedListener<TCEvent>
	): Promise<this>;

	listeners<TCEvent extends TypedContractEvent>(
		event: TCEvent
	): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;

	add100PresaleUsers: TypedContractMethod<[_users: AddressLike[]], [void], "nonpayable">;

	addPresaleUser: TypedContractMethod<[_user: AddressLike], [void], "nonpayable">;

	approve: TypedContractMethod<[to: AddressLike, tokenId: BigNumberish], [void], "nonpayable">;

	balanceOf: TypedContractMethod<[owner: AddressLike], [bigint], "view">;

	baseExtension: TypedContractMethod<[], [string], "view">;

	baseURI: TypedContractMethod<[], [string], "view">;

	cost: TypedContractMethod<[], [bigint], "view">;

	getApproved: TypedContractMethod<[tokenId: BigNumberish], [string], "view">;

	isApprovedForAll: TypedContractMethod<
		[owner: AddressLike, operator: AddressLike],
		[boolean],
		"view"
	>;

	maxMintAmount: TypedContractMethod<[], [bigint], "view">;

	maxSupply: TypedContractMethod<[], [bigint], "view">;

	mint: TypedContractMethod<[_to: AddressLike, _mintAmount: BigNumberish], [void], "payable">;

	name: TypedContractMethod<[], [string], "view">;

	owner: TypedContractMethod<[], [string], "view">;

	ownerOf: TypedContractMethod<[tokenId: BigNumberish], [string], "view">;

	pause: TypedContractMethod<[_state: boolean], [void], "nonpayable">;

	paused: TypedContractMethod<[], [boolean], "view">;

	presaleCost: TypedContractMethod<[], [bigint], "view">;

	presaleWallets: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

	removePresaleUser: TypedContractMethod<[_user: AddressLike], [void], "nonpayable">;

	removeWhitelistUser: TypedContractMethod<[_user: AddressLike], [void], "nonpayable">;

	renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

	"safeTransferFrom(address,address,uint256)": TypedContractMethod<
		[from: AddressLike, to: AddressLike, tokenId: BigNumberish],
		[void],
		"nonpayable"
	>;

	"safeTransferFrom(address,address,uint256,bytes)": TypedContractMethod<
		[from: AddressLike, to: AddressLike, tokenId: BigNumberish, data: BytesLike],
		[void],
		"nonpayable"
	>;

	setApprovalForAll: TypedContractMethod<
		[operator: AddressLike, approved: boolean],
		[void],
		"nonpayable"
	>;

	setBaseExtension: TypedContractMethod<[_newBaseExtension: string], [void], "nonpayable">;

	setBaseURI: TypedContractMethod<[_newBaseURI: string], [void], "nonpayable">;

	setCost: TypedContractMethod<[_newCost: BigNumberish], [void], "nonpayable">;

	setPresaleCost: TypedContractMethod<[_newCost: BigNumberish], [void], "nonpayable">;

	setmaxMintAmount: TypedContractMethod<[_newmaxMintAmount: BigNumberish], [void], "nonpayable">;

	supportsInterface: TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;

	symbol: TypedContractMethod<[], [string], "view">;

	tokenByIndex: TypedContractMethod<[index: BigNumberish], [bigint], "view">;

	tokenOfOwnerByIndex: TypedContractMethod<
		[owner: AddressLike, index: BigNumberish],
		[bigint],
		"view"
	>;

	tokenURI: TypedContractMethod<[tokenId: BigNumberish], [string], "view">;

	totalSupply: TypedContractMethod<[], [bigint], "view">;

	transferFrom: TypedContractMethod<
		[from: AddressLike, to: AddressLike, tokenId: BigNumberish],
		[void],
		"nonpayable"
	>;

	transferOwnership: TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

	walletOfOwner: TypedContractMethod<[_owner: AddressLike], [bigint[]], "view">;

	whitelistUser: TypedContractMethod<[_user: AddressLike], [void], "nonpayable">;

	whitelisted: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

	withdraw: TypedContractMethod<[], [void], "payable">;

	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;

	getFunction(
		nameOrSignature: "add100PresaleUsers"
	): TypedContractMethod<[_users: AddressLike[]], [void], "nonpayable">;
	getFunction(
		nameOrSignature: "addPresaleUser"
	): TypedContractMethod<[_user: AddressLike], [void], "nonpayable">;
	getFunction(
		nameOrSignature: "approve"
	): TypedContractMethod<[to: AddressLike, tokenId: BigNumberish], [void], "nonpayable">;
	getFunction(
		nameOrSignature: "balanceOf"
	): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
	getFunction(nameOrSignature: "baseExtension"): TypedContractMethod<[], [string], "view">;
	getFunction(nameOrSignature: "baseURI"): TypedContractMethod<[], [string], "view">;
	getFunction(nameOrSignature: "cost"): TypedContractMethod<[], [bigint], "view">;
	getFunction(
		nameOrSignature: "getApproved"
	): TypedContractMethod<[tokenId: BigNumberish], [string], "view">;
	getFunction(
		nameOrSignature: "isApprovedForAll"
	): TypedContractMethod<[owner: AddressLike, operator: AddressLike], [boolean], "view">;
	getFunction(nameOrSignature: "maxMintAmount"): TypedContractMethod<[], [bigint], "view">;
	getFunction(nameOrSignature: "maxSupply"): TypedContractMethod<[], [bigint], "view">;
	getFunction(
		nameOrSignature: "mint"
	): TypedContractMethod<[_to: AddressLike, _mintAmount: BigNumberish], [void], "payable">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[], [string], "view">;
	getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
	getFunction(
		nameOrSignature: "ownerOf"
	): TypedContractMethod<[tokenId: BigNumberish], [string], "view">;
	getFunction(
		nameOrSignature: "pause"
	): TypedContractMethod<[_state: boolean], [void], "nonpayable">;
	getFunction(nameOrSignature: "paused"): TypedContractMethod<[], [boolean], "view">;
	getFunction(nameOrSignature: "presaleCost"): TypedContractMethod<[], [bigint], "view">;
	getFunction(
		nameOrSignature: "presaleWallets"
	): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
	getFunction(
		nameOrSignature: "removePresaleUser"
	): TypedContractMethod<[_user: AddressLike], [void], "nonpayable">;
	getFunction(
		nameOrSignature: "removeWhitelistUser"
	): TypedContractMethod<[_user: AddressLike], [void], "nonpayable">;
	getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[], [void], "nonpayable">;
	getFunction(
		nameOrSignature: "safeTransferFrom(address,address,uint256)"
	): TypedContractMethod<
		[from: AddressLike, to: AddressLike, tokenId: BigNumberish],
		[void],
		"nonpayable"
	>;
	getFunction(
		nameOrSignature: "safeTransferFrom(address,address,uint256,bytes)"
	): TypedContractMethod<
		[from: AddressLike, to: AddressLike, tokenId: BigNumberish, data: BytesLike],
		[void],
		"nonpayable"
	>;
	getFunction(
		nameOrSignature: "setApprovalForAll"
	): TypedContractMethod<[operator: AddressLike, approved: boolean], [void], "nonpayable">;
	getFunction(
		nameOrSignature: "setBaseExtension"
	): TypedContractMethod<[_newBaseExtension: string], [void], "nonpayable">;
	getFunction(
		nameOrSignature: "setBaseURI"
	): TypedContractMethod<[_newBaseURI: string], [void], "nonpayable">;
	getFunction(
		nameOrSignature: "setCost"
	): TypedContractMethod<[_newCost: BigNumberish], [void], "nonpayable">;
	getFunction(
		nameOrSignature: "setPresaleCost"
	): TypedContractMethod<[_newCost: BigNumberish], [void], "nonpayable">;
	getFunction(
		nameOrSignature: "setmaxMintAmount"
	): TypedContractMethod<[_newmaxMintAmount: BigNumberish], [void], "nonpayable">;
	getFunction(
		nameOrSignature: "supportsInterface"
	): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[], [string], "view">;
	getFunction(
		nameOrSignature: "tokenByIndex"
	): TypedContractMethod<[index: BigNumberish], [bigint], "view">;
	getFunction(
		nameOrSignature: "tokenOfOwnerByIndex"
	): TypedContractMethod<[owner: AddressLike, index: BigNumberish], [bigint], "view">;
	getFunction(
		nameOrSignature: "tokenURI"
	): TypedContractMethod<[tokenId: BigNumberish], [string], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[], [bigint], "view">;
	getFunction(
		nameOrSignature: "transferFrom"
	): TypedContractMethod<
		[from: AddressLike, to: AddressLike, tokenId: BigNumberish],
		[void],
		"nonpayable"
	>;
	getFunction(
		nameOrSignature: "transferOwnership"
	): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
	getFunction(
		nameOrSignature: "walletOfOwner"
	): TypedContractMethod<[_owner: AddressLike], [bigint[]], "view">;
	getFunction(
		nameOrSignature: "whitelistUser"
	): TypedContractMethod<[_user: AddressLike], [void], "nonpayable">;
	getFunction(
		nameOrSignature: "whitelisted"
	): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
	getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[], [void], "payable">;

	getEvent(
		key: "Approval"
	): TypedContractEvent<
		ApprovalEvent.InputTuple,
		ApprovalEvent.OutputTuple,
		ApprovalEvent.OutputObject
	>;
	getEvent(
		key: "ApprovalForAll"
	): TypedContractEvent<
		ApprovalForAllEvent.InputTuple,
		ApprovalForAllEvent.OutputTuple,
		ApprovalForAllEvent.OutputObject
	>;
	getEvent(
		key: "OwnershipTransferred"
	): TypedContractEvent<
		OwnershipTransferredEvent.InputTuple,
		OwnershipTransferredEvent.OutputTuple,
		OwnershipTransferredEvent.OutputObject
	>;
	getEvent(
		key: "Transfer"
	): TypedContractEvent<
		TransferEvent.InputTuple,
		TransferEvent.OutputTuple,
		TransferEvent.OutputObject
	>;

	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<
			ApprovalEvent.InputTuple,
			ApprovalEvent.OutputTuple,
			ApprovalEvent.OutputObject
		>;
		Approval: TypedContractEvent<
			ApprovalEvent.InputTuple,
			ApprovalEvent.OutputTuple,
			ApprovalEvent.OutputObject
		>;

		"ApprovalForAll(address,address,bool)": TypedContractEvent<
			ApprovalForAllEvent.InputTuple,
			ApprovalForAllEvent.OutputTuple,
			ApprovalForAllEvent.OutputObject
		>;
		ApprovalForAll: TypedContractEvent<
			ApprovalForAllEvent.InputTuple,
			ApprovalForAllEvent.OutputTuple,
			ApprovalForAllEvent.OutputObject
		>;

		"OwnershipTransferred(address,address)": TypedContractEvent<
			OwnershipTransferredEvent.InputTuple,
			OwnershipTransferredEvent.OutputTuple,
			OwnershipTransferredEvent.OutputObject
		>;
		OwnershipTransferred: TypedContractEvent<
			OwnershipTransferredEvent.InputTuple,
			OwnershipTransferredEvent.OutputTuple,
			OwnershipTransferredEvent.OutputObject
		>;

		"Transfer(address,address,uint256)": TypedContractEvent<
			TransferEvent.InputTuple,
			TransferEvent.OutputTuple,
			TransferEvent.OutputObject
		>;
		Transfer: TypedContractEvent<
			TransferEvent.InputTuple,
			TransferEvent.OutputTuple,
			TransferEvent.OutputObject
		>;
	};
}
