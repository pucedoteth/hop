import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common.js";
export interface L1_xDaiAMBInterface extends utils.Interface {
    functions: {
        "transactionHash()": FunctionFragment;
        "sourceChainId()": FunctionFragment;
        "_sendMessage(address,bytes,uint256,uint256)": FunctionFragment;
        "relayedMessages(bytes32)": FunctionFragment;
        "setGasTokenTargetMintValue(uint256)": FunctionFragment;
        "initialize(uint256,uint256,address,uint256,uint256,uint256,address)": FunctionFragment;
        "isInitialized()": FunctionFragment;
        "requiredBlockConfirmations()": FunctionFragment;
        "executeSignatures(bytes,bytes)": FunctionFragment;
        "getMinimumGasUsage(bytes)": FunctionFragment;
        "failedMessageReceiver(bytes32)": FunctionFragment;
        "getBridgeMode()": FunctionFragment;
        "setChainIds(uint256,uint256)": FunctionFragment;
        "failedMessageSender(bytes32)": FunctionFragment;
        "messageId()": FunctionFragment;
        "gasTokenReceiver()": FunctionFragment;
        "setMaxGasPerTx(uint256)": FunctionFragment;
        "requiredSignatures()": FunctionFragment;
        "owner()": FunctionFragment;
        "validatorContract()": FunctionFragment;
        "deployedAtBlock()": FunctionFragment;
        "getBridgeInterfacesVersion()": FunctionFragment;
        "messageSourceChainId()": FunctionFragment;
        "setGasTokenReceiver(address)": FunctionFragment;
        "setRequiredBlockConfirmations(uint256)": FunctionFragment;
        "destinationChainId()": FunctionFragment;
        "setGasPrice(uint256)": FunctionFragment;
        "gasToken()": FunctionFragment;
        "messageCallStatus(bytes32)": FunctionFragment;
        "messageSender()": FunctionFragment;
        "decimalShift()": FunctionFragment;
        "requireToPassMessage(address,bytes,uint256)": FunctionFragment;
        "gasTokenTargetMintValue()": FunctionFragment;
        "failedMessageDataHash(bytes32)": FunctionFragment;
        "maxGasPerTx()": FunctionFragment;
        "setGasTokenParameters(uint256,address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "gasPrice()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "transactionHash" | "sourceChainId" | "_sendMessage" | "relayedMessages" | "setGasTokenTargetMintValue" | "initialize" | "isInitialized" | "requiredBlockConfirmations" | "executeSignatures" | "getMinimumGasUsage" | "failedMessageReceiver" | "getBridgeMode" | "setChainIds" | "failedMessageSender" | "messageId" | "gasTokenReceiver" | "setMaxGasPerTx" | "requiredSignatures" | "owner" | "validatorContract" | "deployedAtBlock" | "getBridgeInterfacesVersion" | "messageSourceChainId" | "setGasTokenReceiver" | "setRequiredBlockConfirmations" | "destinationChainId" | "setGasPrice" | "gasToken" | "messageCallStatus" | "messageSender" | "decimalShift" | "requireToPassMessage" | "gasTokenTargetMintValue" | "failedMessageDataHash" | "maxGasPerTx" | "setGasTokenParameters" | "transferOwnership" | "gasPrice"): FunctionFragment;
    encodeFunctionData(functionFragment: "transactionHash", values?: undefined): string;
    encodeFunctionData(functionFragment: "sourceChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "_sendMessage", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "relayedMessages", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setGasTokenTargetMintValue", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "isInitialized", values?: undefined): string;
    encodeFunctionData(functionFragment: "requiredBlockConfirmations", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeSignatures", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getMinimumGasUsage", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "failedMessageReceiver", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getBridgeMode", values?: undefined): string;
    encodeFunctionData(functionFragment: "setChainIds", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "failedMessageSender", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "messageId", values?: undefined): string;
    encodeFunctionData(functionFragment: "gasTokenReceiver", values?: undefined): string;
    encodeFunctionData(functionFragment: "setMaxGasPerTx", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "requiredSignatures", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "validatorContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployedAtBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBridgeInterfacesVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "messageSourceChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "setGasTokenReceiver", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setRequiredBlockConfirmations", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "destinationChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "setGasPrice", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "gasToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "messageCallStatus", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "messageSender", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimalShift", values?: undefined): string;
    encodeFunctionData(functionFragment: "requireToPassMessage", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "gasTokenTargetMintValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "failedMessageDataHash", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "maxGasPerTx", values?: undefined): string;
    encodeFunctionData(functionFragment: "setGasTokenParameters", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "gasPrice", values?: undefined): string;
    decodeFunctionResult(functionFragment: "transactionHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sourceChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_sendMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayedMessages", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGasTokenTargetMintValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isInitialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requiredBlockConfirmations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeSignatures", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinimumGasUsage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failedMessageReceiver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBridgeMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setChainIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failedMessageSender", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "messageId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gasTokenReceiver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxGasPerTx", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requiredSignatures", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validatorContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployedAtBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBridgeInterfacesVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "messageSourceChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGasTokenReceiver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRequiredBlockConfirmations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "destinationChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGasPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gasToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "messageCallStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "messageSender", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimalShift", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireToPassMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gasTokenTargetMintValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failedMessageDataHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxGasPerTx", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGasTokenParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gasPrice", data: BytesLike): Result;
    events: {
        "UserRequestForAffirmation(bytes32,bytes)": EventFragment;
        "RelayedMessage(address,address,bytes32,bool)": EventFragment;
        "GasPriceChanged(uint256)": EventFragment;
        "RequiredBlockConfirmationChanged(uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "UserRequestForAffirmation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RelayedMessage"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GasPriceChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RequiredBlockConfirmationChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface UserRequestForAffirmationEventObject {
    messageId: string;
    encodedData: string;
}
export type UserRequestForAffirmationEvent = TypedEvent<[
    string,
    string
], UserRequestForAffirmationEventObject>;
export type UserRequestForAffirmationEventFilter = TypedEventFilter<UserRequestForAffirmationEvent>;
export interface RelayedMessageEventObject {
    sender: string;
    executor: string;
    messageId: string;
    status: boolean;
}
export type RelayedMessageEvent = TypedEvent<[
    string,
    string,
    string,
    boolean
], RelayedMessageEventObject>;
export type RelayedMessageEventFilter = TypedEventFilter<RelayedMessageEvent>;
export interface GasPriceChangedEventObject {
    gasPrice: BigNumber;
}
export type GasPriceChangedEvent = TypedEvent<[
    BigNumber
], GasPriceChangedEventObject>;
export type GasPriceChangedEventFilter = TypedEventFilter<GasPriceChangedEvent>;
export interface RequiredBlockConfirmationChangedEventObject {
    requiredBlockConfirmations: BigNumber;
}
export type RequiredBlockConfirmationChangedEvent = TypedEvent<[
    BigNumber
], RequiredBlockConfirmationChangedEventObject>;
export type RequiredBlockConfirmationChangedEventFilter = TypedEventFilter<RequiredBlockConfirmationChangedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface L1_xDaiAMB extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: L1_xDaiAMBInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        transactionHash(overrides?: CallOverrides): Promise<[string]>;
        sourceChainId(overrides?: CallOverrides): Promise<[BigNumber]>;
        _sendMessage(_contract: PromiseOrValue<string>, _data: PromiseOrValue<BytesLike>, _gas: PromiseOrValue<BigNumberish>, _dataType: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        relayedMessages(_txHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        setGasTokenTargetMintValue(_targetMintValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialize(_sourceChainId: PromiseOrValue<BigNumberish>, _destinationChainId: PromiseOrValue<BigNumberish>, _validatorContract: PromiseOrValue<string>, _maxGasPerTx: PromiseOrValue<BigNumberish>, _gasPrice: PromiseOrValue<BigNumberish>, _requiredBlockConfirmations: PromiseOrValue<BigNumberish>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isInitialized(overrides?: CallOverrides): Promise<[boolean]>;
        requiredBlockConfirmations(overrides?: CallOverrides): Promise<[BigNumber]>;
        executeSignatures(_data: PromiseOrValue<BytesLike>, _signatures: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getMinimumGasUsage(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber] & {
            gas: BigNumber;
        }>;
        failedMessageReceiver(_messageId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getBridgeMode(overrides?: CallOverrides): Promise<[string] & {
            _data: string;
        }>;
        setChainIds(_sourceChainId: PromiseOrValue<BigNumberish>, _destinationChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        failedMessageSender(_messageId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        messageId(overrides?: CallOverrides): Promise<[string] & {
            id: string;
        }>;
        gasTokenReceiver(overrides?: CallOverrides): Promise<[string]>;
        setMaxGasPerTx(_maxGasPerTx: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        requiredSignatures(overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        validatorContract(overrides?: CallOverrides): Promise<[string]>;
        deployedAtBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        getBridgeInterfacesVersion(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            major: BigNumber;
            minor: BigNumber;
            patch: BigNumber;
        }>;
        messageSourceChainId(overrides?: CallOverrides): Promise<[BigNumber] & {
            id: BigNumber;
        }>;
        setGasTokenReceiver(_receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRequiredBlockConfirmations(_blockConfirmations: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        destinationChainId(overrides?: CallOverrides): Promise<[BigNumber]>;
        setGasPrice(_gasPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        gasToken(overrides?: CallOverrides): Promise<[string]>;
        messageCallStatus(_messageId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        messageSender(overrides?: CallOverrides): Promise<[string] & {
            sender: string;
        }>;
        decimalShift(overrides?: CallOverrides): Promise<[BigNumber]>;
        requireToPassMessage(_contract: PromiseOrValue<string>, _data: PromiseOrValue<BytesLike>, _gas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        gasTokenTargetMintValue(overrides?: CallOverrides): Promise<[BigNumber]>;
        failedMessageDataHash(_messageId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        maxGasPerTx(overrides?: CallOverrides): Promise<[BigNumber]>;
        setGasTokenParameters(_targetMintValue: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        gasPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    transactionHash(overrides?: CallOverrides): Promise<string>;
    sourceChainId(overrides?: CallOverrides): Promise<BigNumber>;
    _sendMessage(_contract: PromiseOrValue<string>, _data: PromiseOrValue<BytesLike>, _gas: PromiseOrValue<BigNumberish>, _dataType: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    relayedMessages(_txHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    setGasTokenTargetMintValue(_targetMintValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialize(_sourceChainId: PromiseOrValue<BigNumberish>, _destinationChainId: PromiseOrValue<BigNumberish>, _validatorContract: PromiseOrValue<string>, _maxGasPerTx: PromiseOrValue<BigNumberish>, _gasPrice: PromiseOrValue<BigNumberish>, _requiredBlockConfirmations: PromiseOrValue<BigNumberish>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isInitialized(overrides?: CallOverrides): Promise<boolean>;
    requiredBlockConfirmations(overrides?: CallOverrides): Promise<BigNumber>;
    executeSignatures(_data: PromiseOrValue<BytesLike>, _signatures: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getMinimumGasUsage(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    failedMessageReceiver(_messageId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getBridgeMode(overrides?: CallOverrides): Promise<string>;
    setChainIds(_sourceChainId: PromiseOrValue<BigNumberish>, _destinationChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    failedMessageSender(_messageId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    messageId(overrides?: CallOverrides): Promise<string>;
    gasTokenReceiver(overrides?: CallOverrides): Promise<string>;
    setMaxGasPerTx(_maxGasPerTx: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    requiredSignatures(overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    validatorContract(overrides?: CallOverrides): Promise<string>;
    deployedAtBlock(overrides?: CallOverrides): Promise<BigNumber>;
    getBridgeInterfacesVersion(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        major: BigNumber;
        minor: BigNumber;
        patch: BigNumber;
    }>;
    messageSourceChainId(overrides?: CallOverrides): Promise<BigNumber>;
    setGasTokenReceiver(_receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRequiredBlockConfirmations(_blockConfirmations: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    destinationChainId(overrides?: CallOverrides): Promise<BigNumber>;
    setGasPrice(_gasPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    gasToken(overrides?: CallOverrides): Promise<string>;
    messageCallStatus(_messageId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    messageSender(overrides?: CallOverrides): Promise<string>;
    decimalShift(overrides?: CallOverrides): Promise<BigNumber>;
    requireToPassMessage(_contract: PromiseOrValue<string>, _data: PromiseOrValue<BytesLike>, _gas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    gasTokenTargetMintValue(overrides?: CallOverrides): Promise<BigNumber>;
    failedMessageDataHash(_messageId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    maxGasPerTx(overrides?: CallOverrides): Promise<BigNumber>;
    setGasTokenParameters(_targetMintValue: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    gasPrice(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        transactionHash(overrides?: CallOverrides): Promise<string>;
        sourceChainId(overrides?: CallOverrides): Promise<BigNumber>;
        _sendMessage(_contract: PromiseOrValue<string>, _data: PromiseOrValue<BytesLike>, _gas: PromiseOrValue<BigNumberish>, _dataType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        relayedMessages(_txHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        setGasTokenTargetMintValue(_targetMintValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        initialize(_sourceChainId: PromiseOrValue<BigNumberish>, _destinationChainId: PromiseOrValue<BigNumberish>, _validatorContract: PromiseOrValue<string>, _maxGasPerTx: PromiseOrValue<BigNumberish>, _gasPrice: PromiseOrValue<BigNumberish>, _requiredBlockConfirmations: PromiseOrValue<BigNumberish>, _owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isInitialized(overrides?: CallOverrides): Promise<boolean>;
        requiredBlockConfirmations(overrides?: CallOverrides): Promise<BigNumber>;
        executeSignatures(_data: PromiseOrValue<BytesLike>, _signatures: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getMinimumGasUsage(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        failedMessageReceiver(_messageId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getBridgeMode(overrides?: CallOverrides): Promise<string>;
        setChainIds(_sourceChainId: PromiseOrValue<BigNumberish>, _destinationChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        failedMessageSender(_messageId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        messageId(overrides?: CallOverrides): Promise<string>;
        gasTokenReceiver(overrides?: CallOverrides): Promise<string>;
        setMaxGasPerTx(_maxGasPerTx: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        requiredSignatures(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        validatorContract(overrides?: CallOverrides): Promise<string>;
        deployedAtBlock(overrides?: CallOverrides): Promise<BigNumber>;
        getBridgeInterfacesVersion(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            major: BigNumber;
            minor: BigNumber;
            patch: BigNumber;
        }>;
        messageSourceChainId(overrides?: CallOverrides): Promise<BigNumber>;
        setGasTokenReceiver(_receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setRequiredBlockConfirmations(_blockConfirmations: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        destinationChainId(overrides?: CallOverrides): Promise<BigNumber>;
        setGasPrice(_gasPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        gasToken(overrides?: CallOverrides): Promise<string>;
        messageCallStatus(_messageId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        messageSender(overrides?: CallOverrides): Promise<string>;
        decimalShift(overrides?: CallOverrides): Promise<BigNumber>;
        requireToPassMessage(_contract: PromiseOrValue<string>, _data: PromiseOrValue<BytesLike>, _gas: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        gasTokenTargetMintValue(overrides?: CallOverrides): Promise<BigNumber>;
        failedMessageDataHash(_messageId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        maxGasPerTx(overrides?: CallOverrides): Promise<BigNumber>;
        setGasTokenParameters(_targetMintValue: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        gasPrice(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "UserRequestForAffirmation(bytes32,bytes)"(messageId?: PromiseOrValue<BytesLike> | null, encodedData?: null): UserRequestForAffirmationEventFilter;
        UserRequestForAffirmation(messageId?: PromiseOrValue<BytesLike> | null, encodedData?: null): UserRequestForAffirmationEventFilter;
        "RelayedMessage(address,address,bytes32,bool)"(sender?: PromiseOrValue<string> | null, executor?: PromiseOrValue<string> | null, messageId?: PromiseOrValue<BytesLike> | null, status?: null): RelayedMessageEventFilter;
        RelayedMessage(sender?: PromiseOrValue<string> | null, executor?: PromiseOrValue<string> | null, messageId?: PromiseOrValue<BytesLike> | null, status?: null): RelayedMessageEventFilter;
        "GasPriceChanged(uint256)"(gasPrice?: null): GasPriceChangedEventFilter;
        GasPriceChanged(gasPrice?: null): GasPriceChangedEventFilter;
        "RequiredBlockConfirmationChanged(uint256)"(requiredBlockConfirmations?: null): RequiredBlockConfirmationChangedEventFilter;
        RequiredBlockConfirmationChanged(requiredBlockConfirmations?: null): RequiredBlockConfirmationChangedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: null, newOwner?: null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: null, newOwner?: null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        transactionHash(overrides?: CallOverrides): Promise<BigNumber>;
        sourceChainId(overrides?: CallOverrides): Promise<BigNumber>;
        _sendMessage(_contract: PromiseOrValue<string>, _data: PromiseOrValue<BytesLike>, _gas: PromiseOrValue<BigNumberish>, _dataType: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        relayedMessages(_txHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        setGasTokenTargetMintValue(_targetMintValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialize(_sourceChainId: PromiseOrValue<BigNumberish>, _destinationChainId: PromiseOrValue<BigNumberish>, _validatorContract: PromiseOrValue<string>, _maxGasPerTx: PromiseOrValue<BigNumberish>, _gasPrice: PromiseOrValue<BigNumberish>, _requiredBlockConfirmations: PromiseOrValue<BigNumberish>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isInitialized(overrides?: CallOverrides): Promise<BigNumber>;
        requiredBlockConfirmations(overrides?: CallOverrides): Promise<BigNumber>;
        executeSignatures(_data: PromiseOrValue<BytesLike>, _signatures: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getMinimumGasUsage(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        failedMessageReceiver(_messageId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getBridgeMode(overrides?: CallOverrides): Promise<BigNumber>;
        setChainIds(_sourceChainId: PromiseOrValue<BigNumberish>, _destinationChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        failedMessageSender(_messageId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        messageId(overrides?: CallOverrides): Promise<BigNumber>;
        gasTokenReceiver(overrides?: CallOverrides): Promise<BigNumber>;
        setMaxGasPerTx(_maxGasPerTx: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        requiredSignatures(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        validatorContract(overrides?: CallOverrides): Promise<BigNumber>;
        deployedAtBlock(overrides?: CallOverrides): Promise<BigNumber>;
        getBridgeInterfacesVersion(overrides?: CallOverrides): Promise<BigNumber>;
        messageSourceChainId(overrides?: CallOverrides): Promise<BigNumber>;
        setGasTokenReceiver(_receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRequiredBlockConfirmations(_blockConfirmations: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        destinationChainId(overrides?: CallOverrides): Promise<BigNumber>;
        setGasPrice(_gasPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        gasToken(overrides?: CallOverrides): Promise<BigNumber>;
        messageCallStatus(_messageId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        messageSender(overrides?: CallOverrides): Promise<BigNumber>;
        decimalShift(overrides?: CallOverrides): Promise<BigNumber>;
        requireToPassMessage(_contract: PromiseOrValue<string>, _data: PromiseOrValue<BytesLike>, _gas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        gasTokenTargetMintValue(overrides?: CallOverrides): Promise<BigNumber>;
        failedMessageDataHash(_messageId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        maxGasPerTx(overrides?: CallOverrides): Promise<BigNumber>;
        setGasTokenParameters(_targetMintValue: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        gasPrice(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        transactionHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sourceChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _sendMessage(_contract: PromiseOrValue<string>, _data: PromiseOrValue<BytesLike>, _gas: PromiseOrValue<BigNumberish>, _dataType: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        relayedMessages(_txHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setGasTokenTargetMintValue(_targetMintValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_sourceChainId: PromiseOrValue<BigNumberish>, _destinationChainId: PromiseOrValue<BigNumberish>, _validatorContract: PromiseOrValue<string>, _maxGasPerTx: PromiseOrValue<BigNumberish>, _gasPrice: PromiseOrValue<BigNumberish>, _requiredBlockConfirmations: PromiseOrValue<BigNumberish>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requiredBlockConfirmations(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeSignatures(_data: PromiseOrValue<BytesLike>, _signatures: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getMinimumGasUsage(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        failedMessageReceiver(_messageId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBridgeMode(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setChainIds(_sourceChainId: PromiseOrValue<BigNumberish>, _destinationChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        failedMessageSender(_messageId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        messageId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gasTokenReceiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setMaxGasPerTx(_maxGasPerTx: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        requiredSignatures(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validatorContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployedAtBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBridgeInterfacesVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        messageSourceChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setGasTokenReceiver(_receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRequiredBlockConfirmations(_blockConfirmations: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        destinationChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setGasPrice(_gasPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        gasToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        messageCallStatus(_messageId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        messageSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimalShift(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireToPassMessage(_contract: PromiseOrValue<string>, _data: PromiseOrValue<BytesLike>, _gas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        gasTokenTargetMintValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        failedMessageDataHash(_messageId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxGasPerTx(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setGasTokenParameters(_targetMintValue: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        gasPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=L1_xDaiAMB.d.ts.map