import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
	[P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

export type Account = {
	__typename?: 'Account';
	address: Scalars['String'];
	avatarUrl?: Maybe<Scalars['String']>;
	email?: Maybe<Scalars['String']>;
	githubUrl?: Maybe<Scalars['String']>;
	id: Scalars['String'];
	jwt?: Maybe<Scalars['String']>;
	mineral: Scalars['Float'];
	name?: Maybe<Scalars['String']>;
};

export type BuildAccount = {
	__typename?: 'BuildAccount';
	avatarUrl?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
};

export type BuildActivity = {
	__typename?: 'BuildActivity';
	account?: Maybe<BuildAccount>;
	description?: Maybe<Scalars['String']>;
	detail?: Maybe<BuildDetail>;
	id: Scalars['String'];
	reward?: Maybe<Scalars['Float']>;
	timestamp: Scalars['String'];
	type?: Maybe<Scalars['String']>;
};

export type BuildDetail = {
	__typename?: 'BuildDetail';
	added?: Maybe<Array<Maybe<Scalars['String']>>>;
	history?: Maybe<Array<Maybe<Scalars['String']>>>;
	modified?: Maybe<Array<Maybe<Scalars['String']>>>;
	removed?: Maybe<Array<Maybe<Scalars['String']>>>;
	timestamp?: Maybe<Scalars['String']>;
	url?: Maybe<Scalars['String']>;
};

export type CardDuel = {
	__typename?: 'CardDuel';
	history?: Maybe<Array<Maybe<Array<Maybe<CardDuelCommand>>>>>;
	id?: Maybe<Scalars['String']>;
	setup?: Maybe<CardDuelSetup>;
};

export type CardDuelAttributes = {
	__typename?: 'CardDuelAttributes';
	attack?: Maybe<Scalars['Int']>;
	cooldown?: Maybe<Scalars['Int']>;
	defense?: Maybe<Scalars['Int']>;
	health?: Maybe<Scalars['Int']>;
	perTurnHero?: Maybe<Scalars['Int']>;
	perTurnTroop?: Maybe<Scalars['Int']>;
	turn?: Maybe<Scalars['Int']>;
};

export type CardDuelCommand = {
	__typename?: 'CardDuelCommand';
	from?: Maybe<CardDuelIdentifier>;
	owner?: Maybe<Scalars['String']>;
	payload?: Maybe<CardDuelAttributes>;
	side?: Maybe<Scalars['Int']>;
	target?: Maybe<CardDuelIdentifier>;
	type?: Maybe<Scalars['Int']>;
};

export type CardDuelHistory = {
	__typename?: 'CardDuelHistory';
	duel: CardDuel;
	id?: Maybe<Scalars['String']>;
	opponent?: Maybe<Profile>;
	timestamp: Scalars['String'];
	victory?: Maybe<Scalars['Boolean']>;
};

export type CardDuelIdentifier = {
	__typename?: 'CardDuelIdentifier';
	id?: Maybe<Scalars['String']>;
	owner?: Maybe<Scalars['String']>;
	place?: Maybe<Scalars['Int']>;
	position?: Maybe<Scalars['String']>;
};

export type CardDuelSetting = {
	__typename?: 'CardDuelSetting';
	groundSize?: Maybe<Scalars['Int']>;
	handSize?: Maybe<Scalars['Int']>;
	maxAttachment?: Maybe<Scalars['Int']>;
	perTurnHero?: Maybe<Scalars['Int']>;
	perTurnTroop?: Maybe<Scalars['Int']>;
};

export type CardDuelSetup = {
	__typename?: 'CardDuelSetup';
	deck?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
	firstMover: Scalars['String'];
	player?: Maybe<Array<Maybe<Scalars['String']>>>;
	setting: CardDuelSetting;
	version: Scalars['String'];
};

export type ConfirmTokenOrderInput = {
	orderId: Scalars['String'];
	signature: Scalars['String'];
};

export type CreateTokenOrderInput = {
	investAmount?: InputMaybe<Scalars['Float']>;
	investCurrency?: InputMaybe<SupportedCurrencies>;
};

export type GameInvitation = {
	__typename?: 'GameInvitation';
	game: Scalars['String'];
	id: Scalars['String'];
	opponent: Profile;
	owner: Profile;
	timestamp: Scalars['String'];
};

export type GameSubscription = {
	__typename?: 'GameSubscription';
	email: Scalars['String'];
	game?: Maybe<MetacraftGames>;
	timestamp: Scalars['String'];
};

export type InviteGameInput = {
	game: MetacraftGames;
	opponent: Scalars['String'];
};

export type LoginInput = {
	publicKey: Scalars['String'];
	signature: Scalars['String'];
};

export enum MetacraftGames {
	Card = 'CARD',
}

export type Mutation = {
	__typename?: 'Mutation';
	acceptGame?: Maybe<Scalars['Boolean']>;
	claimTokenFromOrder?: Maybe<TokenOrder>;
	confirmTokenOrder?: Maybe<TokenOrder>;
	connectGitHub?: Maybe<Account>;
	createTokenOrder?: Maybe<TokenOrder>;
	increaseCounter?: Maybe<Scalars['Float']>;
	inviteGame?: Maybe<GameInvitation>;
	registerTokenOrderNonce?: Maybe<Scalars['String']>;
	subscribeGame?: Maybe<GameSubscription>;
};

export type MutationAcceptGameArgs = {
	invitationId: Scalars['String'];
};

export type MutationClaimTokenFromOrderArgs = {
	orderId: Scalars['String'];
	signature: Scalars['String'];
};

export type MutationConfirmTokenOrderArgs = {
	input?: InputMaybe<ConfirmTokenOrderInput>;
};

export type MutationConnectGitHubArgs = {
	code: Scalars['String'];
};

export type MutationCreateTokenOrderArgs = {
	input?: InputMaybe<CreateTokenOrderInput>;
};

export type MutationIncreaseCounterArgs = {
	amount?: InputMaybe<Scalars['Float']>;
};

export type MutationInviteGameArgs = {
	input: InviteGameInput;
};

export type MutationRegisterTokenOrderNonceArgs = {
	orderId: Scalars['String'];
};

export type MutationSubscribeGameArgs = {
	input?: InputMaybe<SubscribeGameInput>;
};

export enum OrderStatuses {
	Cancelled = 'CANCELLED',
	Initiated = 'INITIATED',
	Paid = 'PAID',
}

export type Profile = {
	__typename?: 'Profile';
	address: Scalars['String'];
	avatarUrl?: Maybe<Scalars['String']>;
	email?: Maybe<Scalars['String']>;
	githubId?: Maybe<Scalars['String']>;
	githubUrl?: Maybe<Scalars['String']>;
	id: Scalars['String'];
	isOnline?: Maybe<Scalars['Boolean']>;
	jwt?: Maybe<Scalars['String']>;
	linkedId?: Maybe<Scalars['String']>;
	mineral: Scalars['Float'];
	name?: Maybe<Scalars['String']>;
};

export type Query = {
	__typename?: 'Query';
	account?: Maybe<Account>;
	buddies?: Maybe<Array<Maybe<Profile>>>;
	buildActivities?: Maybe<Array<Maybe<BuildActivity>>>;
	cardDuel?: Maybe<CardDuel>;
	cardDuelHistory?: Maybe<Array<Maybe<CardDuelHistory>>>;
	cardDuelPlaying?: Maybe<CardDuelHistory>;
	counter?: Maybe<Scalars['Float']>;
	gameInvitations?: Maybe<Array<Maybe<GameInvitation>>>;
	greeting?: Maybe<Scalars['String']>;
	personalBuildActivities?: Maybe<Array<Maybe<BuildActivity>>>;
	profile?: Maybe<Profile>;
	tokenOrders?: Maybe<Array<Maybe<TokenOrder>>>;
};

export type QueryAccountArgs = {
	address?: InputMaybe<Scalars['String']>;
};

export type QueryCardDuelArgs = {
	id: Scalars['String'];
};

export type QueryCardDuelHistoryArgs = {
	limit?: InputMaybe<Scalars['Int']>;
};

export type QueryPersonalBuildActivitiesArgs = {
	address?: InputMaybe<Scalars['String']>;
};

export type QueryProfileArgs = {
	address?: InputMaybe<Scalars['String']>;
};

export type SubscribeGameInput = {
	email: Scalars['String'];
	game?: InputMaybe<MetacraftGames>;
};

export type Subscription = {
	__typename?: 'Subscription';
	counterIncreased?: Maybe<Scalars['Float']>;
	gameInvitation?: Maybe<GameInvitation>;
};

export type SubscriptionGameInvitationArgs = {
	opponent: Scalars['String'];
};

export enum SupportedCurrencies {
	Busd = 'BUSD',
	Sol = 'SOL',
	Usdc = 'USDC',
	Usdt = 'USDT',
}

export type TokenOrder = {
	__typename?: 'TokenOrder';
	id?: Maybe<Scalars['String']>;
	investAmount: Scalars['Float'];
	investCurrency: SupportedCurrencies;
	investUsdRatio: Scalars['Float'];
	mineralAmount: Scalars['Float'];
	mineralUnitPrice: Scalars['Float'];
	nonce?: Maybe<Scalars['String']>;
	nonceTime?: Maybe<Scalars['String']>;
	owner?: Maybe<Profile>;
	pendingUnlocks?: Maybe<Array<Maybe<TokenUnlock>>>;
	round?: Maybe<Scalars['String']>;
	status: OrderStatuses;
	timestamp: Scalars['String'];
	unlockAmount?: Maybe<Scalars['Float']>;
	unlockCount?: Maybe<Scalars['Int']>;
};

export type TokenUnlock = {
	__typename?: 'TokenUnlock';
	amount: Scalars['Float'];
	id?: Maybe<Scalars['String']>;
	percentage: Scalars['Float'];
	round?: Maybe<Scalars['String']>;
	total: Scalars['Float'];
	unlockOrder?: Maybe<Scalars['Int']>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {},
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {},
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	Account: ResolverTypeWrapper<Account>;
	Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
	BuildAccount: ResolverTypeWrapper<BuildAccount>;
	BuildActivity: ResolverTypeWrapper<BuildActivity>;
	BuildDetail: ResolverTypeWrapper<BuildDetail>;
	CardDuel: ResolverTypeWrapper<CardDuel>;
	CardDuelAttributes: ResolverTypeWrapper<CardDuelAttributes>;
	CardDuelCommand: ResolverTypeWrapper<CardDuelCommand>;
	CardDuelHistory: ResolverTypeWrapper<CardDuelHistory>;
	CardDuelIdentifier: ResolverTypeWrapper<CardDuelIdentifier>;
	CardDuelSetting: ResolverTypeWrapper<CardDuelSetting>;
	CardDuelSetup: ResolverTypeWrapper<CardDuelSetup>;
	ConfirmTokenOrderInput: ConfirmTokenOrderInput;
	CreateTokenOrderInput: CreateTokenOrderInput;
	Float: ResolverTypeWrapper<Scalars['Float']>;
	GameInvitation: ResolverTypeWrapper<GameInvitation>;
	GameSubscription: ResolverTypeWrapper<GameSubscription>;
	Int: ResolverTypeWrapper<Scalars['Int']>;
	InviteGameInput: InviteGameInput;
	LoginInput: LoginInput;
	MetacraftGames: MetacraftGames;
	Mutation: ResolverTypeWrapper<{}>;
	OrderStatuses: OrderStatuses;
	Profile: ResolverTypeWrapper<Profile>;
	Query: ResolverTypeWrapper<{}>;
	String: ResolverTypeWrapper<Scalars['String']>;
	SubscribeGameInput: SubscribeGameInput;
	Subscription: ResolverTypeWrapper<{}>;
	SupportedCurrencies: SupportedCurrencies;
	TokenOrder: ResolverTypeWrapper<TokenOrder>;
	TokenUnlock: ResolverTypeWrapper<TokenUnlock>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	Account: Account;
	Boolean: Scalars['Boolean'];
	BuildAccount: BuildAccount;
	BuildActivity: BuildActivity;
	BuildDetail: BuildDetail;
	CardDuel: CardDuel;
	CardDuelAttributes: CardDuelAttributes;
	CardDuelCommand: CardDuelCommand;
	CardDuelHistory: CardDuelHistory;
	CardDuelIdentifier: CardDuelIdentifier;
	CardDuelSetting: CardDuelSetting;
	CardDuelSetup: CardDuelSetup;
	ConfirmTokenOrderInput: ConfirmTokenOrderInput;
	CreateTokenOrderInput: CreateTokenOrderInput;
	Float: Scalars['Float'];
	GameInvitation: GameInvitation;
	GameSubscription: GameSubscription;
	Int: Scalars['Int'];
	InviteGameInput: InviteGameInput;
	LoginInput: LoginInput;
	Mutation: {};
	Profile: Profile;
	Query: {};
	String: Scalars['String'];
	SubscribeGameInput: SubscribeGameInput;
	Subscription: {};
	TokenOrder: TokenOrder;
	TokenUnlock: TokenUnlock;
};

export type AccountResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account'],
> = {
	address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	avatarUrl?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	githubUrl?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	jwt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	mineral?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
	name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BuildAccountResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['BuildAccount'] = ResolversParentTypes['BuildAccount'],
> = {
	avatarUrl?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BuildActivityResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['BuildActivity'] = ResolversParentTypes['BuildActivity'],
> = {
	account?: Resolver<
		Maybe<ResolversTypes['BuildAccount']>,
		ParentType,
		ContextType
	>;
	description?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	detail?: Resolver<
		Maybe<ResolversTypes['BuildDetail']>,
		ParentType,
		ContextType
	>;
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	reward?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
	timestamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BuildDetailResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['BuildDetail'] = ResolversParentTypes['BuildDetail'],
> = {
	added?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['String']>>>,
		ParentType,
		ContextType
	>;
	history?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['String']>>>,
		ParentType,
		ContextType
	>;
	modified?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['String']>>>,
		ParentType,
		ContextType
	>;
	removed?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['String']>>>,
		ParentType,
		ContextType
	>;
	timestamp?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CardDuelResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['CardDuel'] = ResolversParentTypes['CardDuel'],
> = {
	history?: Resolver<
		Maybe<Array<Maybe<Array<Maybe<ResolversTypes['CardDuelCommand']>>>>>,
		ParentType,
		ContextType
	>;
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	setup?: Resolver<
		Maybe<ResolversTypes['CardDuelSetup']>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CardDuelAttributesResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['CardDuelAttributes'] = ResolversParentTypes['CardDuelAttributes'],
> = {
	attack?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	cooldown?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	defense?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	health?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	perTurnHero?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	perTurnTroop?: Resolver<
		Maybe<ResolversTypes['Int']>,
		ParentType,
		ContextType
	>;
	turn?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CardDuelCommandResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['CardDuelCommand'] = ResolversParentTypes['CardDuelCommand'],
> = {
	from?: Resolver<
		Maybe<ResolversTypes['CardDuelIdentifier']>,
		ParentType,
		ContextType
	>;
	owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	payload?: Resolver<
		Maybe<ResolversTypes['CardDuelAttributes']>,
		ParentType,
		ContextType
	>;
	side?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	target?: Resolver<
		Maybe<ResolversTypes['CardDuelIdentifier']>,
		ParentType,
		ContextType
	>;
	type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CardDuelHistoryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['CardDuelHistory'] = ResolversParentTypes['CardDuelHistory'],
> = {
	duel?: Resolver<ResolversTypes['CardDuel'], ParentType, ContextType>;
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	opponent?: Resolver<
		Maybe<ResolversTypes['Profile']>,
		ParentType,
		ContextType
	>;
	timestamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	victory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CardDuelIdentifierResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['CardDuelIdentifier'] = ResolversParentTypes['CardDuelIdentifier'],
> = {
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	place?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CardDuelSettingResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['CardDuelSetting'] = ResolversParentTypes['CardDuelSetting'],
> = {
	groundSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	handSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	maxAttachment?: Resolver<
		Maybe<ResolversTypes['Int']>,
		ParentType,
		ContextType
	>;
	perTurnHero?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	perTurnTroop?: Resolver<
		Maybe<ResolversTypes['Int']>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CardDuelSetupResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['CardDuelSetup'] = ResolversParentTypes['CardDuelSetup'],
> = {
	deck?: Resolver<
		Maybe<Array<Maybe<Array<Maybe<ResolversTypes['String']>>>>>,
		ParentType,
		ContextType
	>;
	firstMover?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	player?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['String']>>>,
		ParentType,
		ContextType
	>;
	setting?: Resolver<
		ResolversTypes['CardDuelSetting'],
		ParentType,
		ContextType
	>;
	version?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GameInvitationResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['GameInvitation'] = ResolversParentTypes['GameInvitation'],
> = {
	game?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	opponent?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
	owner?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
	timestamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GameSubscriptionResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['GameSubscription'] = ResolversParentTypes['GameSubscription'],
> = {
	email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	game?: Resolver<
		Maybe<ResolversTypes['MetacraftGames']>,
		ParentType,
		ContextType
	>;
	timestamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
	acceptGame?: Resolver<
		Maybe<ResolversTypes['Boolean']>,
		ParentType,
		ContextType,
		RequireFields<MutationAcceptGameArgs, 'invitationId'>
	>;
	claimTokenFromOrder?: Resolver<
		Maybe<ResolversTypes['TokenOrder']>,
		ParentType,
		ContextType,
		RequireFields<MutationClaimTokenFromOrderArgs, 'orderId' | 'signature'>
	>;
	confirmTokenOrder?: Resolver<
		Maybe<ResolversTypes['TokenOrder']>,
		ParentType,
		ContextType,
		Partial<MutationConfirmTokenOrderArgs>
	>;
	connectGitHub?: Resolver<
		Maybe<ResolversTypes['Account']>,
		ParentType,
		ContextType,
		RequireFields<MutationConnectGitHubArgs, 'code'>
	>;
	createTokenOrder?: Resolver<
		Maybe<ResolversTypes['TokenOrder']>,
		ParentType,
		ContextType,
		Partial<MutationCreateTokenOrderArgs>
	>;
	increaseCounter?: Resolver<
		Maybe<ResolversTypes['Float']>,
		ParentType,
		ContextType,
		Partial<MutationIncreaseCounterArgs>
	>;
	inviteGame?: Resolver<
		Maybe<ResolversTypes['GameInvitation']>,
		ParentType,
		ContextType,
		RequireFields<MutationInviteGameArgs, 'input'>
	>;
	registerTokenOrderNonce?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType,
		RequireFields<MutationRegisterTokenOrderNonceArgs, 'orderId'>
	>;
	subscribeGame?: Resolver<
		Maybe<ResolversTypes['GameSubscription']>,
		ParentType,
		ContextType,
		Partial<MutationSubscribeGameArgs>
	>;
};

export type ProfileResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile'],
> = {
	address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	avatarUrl?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	githubId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	githubUrl?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	isOnline?: Resolver<
		Maybe<ResolversTypes['Boolean']>,
		ParentType,
		ContextType
	>;
	jwt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	linkedId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	mineral?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
	name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
	account?: Resolver<
		Maybe<ResolversTypes['Account']>,
		ParentType,
		ContextType,
		Partial<QueryAccountArgs>
	>;
	buddies?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Profile']>>>,
		ParentType,
		ContextType
	>;
	buildActivities?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['BuildActivity']>>>,
		ParentType,
		ContextType
	>;
	cardDuel?: Resolver<
		Maybe<ResolversTypes['CardDuel']>,
		ParentType,
		ContextType,
		RequireFields<QueryCardDuelArgs, 'id'>
	>;
	cardDuelHistory?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['CardDuelHistory']>>>,
		ParentType,
		ContextType,
		Partial<QueryCardDuelHistoryArgs>
	>;
	cardDuelPlaying?: Resolver<
		Maybe<ResolversTypes['CardDuelHistory']>,
		ParentType,
		ContextType
	>;
	counter?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
	gameInvitations?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['GameInvitation']>>>,
		ParentType,
		ContextType
	>;
	greeting?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	personalBuildActivities?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['BuildActivity']>>>,
		ParentType,
		ContextType,
		Partial<QueryPersonalBuildActivitiesArgs>
	>;
	profile?: Resolver<
		Maybe<ResolversTypes['Profile']>,
		ParentType,
		ContextType,
		Partial<QueryProfileArgs>
	>;
	tokenOrders?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['TokenOrder']>>>,
		ParentType,
		ContextType
	>;
};

export type SubscriptionResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription'],
> = {
	counterIncreased?: SubscriptionResolver<
		Maybe<ResolversTypes['Float']>,
		'counterIncreased',
		ParentType,
		ContextType
	>;
	gameInvitation?: SubscriptionResolver<
		Maybe<ResolversTypes['GameInvitation']>,
		'gameInvitation',
		ParentType,
		ContextType,
		RequireFields<SubscriptionGameInvitationArgs, 'opponent'>
	>;
};

export type TokenOrderResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['TokenOrder'] = ResolversParentTypes['TokenOrder'],
> = {
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	investAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
	investCurrency?: Resolver<
		ResolversTypes['SupportedCurrencies'],
		ParentType,
		ContextType
	>;
	investUsdRatio?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
	mineralAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
	mineralUnitPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
	nonce?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	nonceTime?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	owner?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>;
	pendingUnlocks?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['TokenUnlock']>>>,
		ParentType,
		ContextType
	>;
	round?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	status?: Resolver<ResolversTypes['OrderStatuses'], ParentType, ContextType>;
	timestamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	unlockAmount?: Resolver<
		Maybe<ResolversTypes['Float']>,
		ParentType,
		ContextType
	>;
	unlockCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenUnlockResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['TokenUnlock'] = ResolversParentTypes['TokenUnlock'],
> = {
	amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	percentage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
	round?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
	unlockOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
	Account?: AccountResolvers<ContextType>;
	BuildAccount?: BuildAccountResolvers<ContextType>;
	BuildActivity?: BuildActivityResolvers<ContextType>;
	BuildDetail?: BuildDetailResolvers<ContextType>;
	CardDuel?: CardDuelResolvers<ContextType>;
	CardDuelAttributes?: CardDuelAttributesResolvers<ContextType>;
	CardDuelCommand?: CardDuelCommandResolvers<ContextType>;
	CardDuelHistory?: CardDuelHistoryResolvers<ContextType>;
	CardDuelIdentifier?: CardDuelIdentifierResolvers<ContextType>;
	CardDuelSetting?: CardDuelSettingResolvers<ContextType>;
	CardDuelSetup?: CardDuelSetupResolvers<ContextType>;
	GameInvitation?: GameInvitationResolvers<ContextType>;
	GameSubscription?: GameSubscriptionResolvers<ContextType>;
	Mutation?: MutationResolvers<ContextType>;
	Profile?: ProfileResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	Subscription?: SubscriptionResolvers<ContextType>;
	TokenOrder?: TokenOrderResolvers<ContextType>;
	TokenUnlock?: TokenUnlockResolvers<ContextType>;
};
