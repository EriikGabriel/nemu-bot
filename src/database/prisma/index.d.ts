
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Birthday
 * 
 */
export type Birthday = $Result.DefaultSelection<Prisma.$BirthdayPayload>
/**
 * Model GuildConfig
 * 
 */
export type GuildConfig = $Result.DefaultSelection<Prisma.$GuildConfigPayload>
/**
 * Model TempVoiceSystem
 * 
 */
export type TempVoiceSystem = $Result.DefaultSelection<Prisma.$TempVoiceSystemPayload>
/**
 * Model TempVoiceJoinChannel
 * 
 */
export type TempVoiceJoinChannel = $Result.DefaultSelection<Prisma.$TempVoiceJoinChannelPayload>
/**
 * Model TempVoiceTemplate
 * 
 */
export type TempVoiceTemplate = $Result.DefaultSelection<Prisma.$TempVoiceTemplatePayload>
/**
 * Model TempVoiceChannel
 * 
 */
export type TempVoiceChannel = $Result.DefaultSelection<Prisma.$TempVoiceChannelPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TempVoiceType: {
  GAMES: 'GAMES',
  QUARTINHOS: 'QUARTINHOS'
};

export type TempVoiceType = (typeof TempVoiceType)[keyof typeof TempVoiceType]

}

export type TempVoiceType = $Enums.TempVoiceType

export const TempVoiceType: typeof $Enums.TempVoiceType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Birthdays
 * const birthdays = await prisma.birthday.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Birthdays
   * const birthdays = await prisma.birthday.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.birthday`: Exposes CRUD operations for the **Birthday** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Birthdays
    * const birthdays = await prisma.birthday.findMany()
    * ```
    */
  get birthday(): Prisma.BirthdayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guildConfig`: Exposes CRUD operations for the **GuildConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuildConfigs
    * const guildConfigs = await prisma.guildConfig.findMany()
    * ```
    */
  get guildConfig(): Prisma.GuildConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tempVoiceSystem`: Exposes CRUD operations for the **TempVoiceSystem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TempVoiceSystems
    * const tempVoiceSystems = await prisma.tempVoiceSystem.findMany()
    * ```
    */
  get tempVoiceSystem(): Prisma.TempVoiceSystemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tempVoiceJoinChannel`: Exposes CRUD operations for the **TempVoiceJoinChannel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TempVoiceJoinChannels
    * const tempVoiceJoinChannels = await prisma.tempVoiceJoinChannel.findMany()
    * ```
    */
  get tempVoiceJoinChannel(): Prisma.TempVoiceJoinChannelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tempVoiceTemplate`: Exposes CRUD operations for the **TempVoiceTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TempVoiceTemplates
    * const tempVoiceTemplates = await prisma.tempVoiceTemplate.findMany()
    * ```
    */
  get tempVoiceTemplate(): Prisma.TempVoiceTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tempVoiceChannel`: Exposes CRUD operations for the **TempVoiceChannel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TempVoiceChannels
    * const tempVoiceChannels = await prisma.tempVoiceChannel.findMany()
    * ```
    */
  get tempVoiceChannel(): Prisma.TempVoiceChannelDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Birthday: 'Birthday',
    GuildConfig: 'GuildConfig',
    TempVoiceSystem: 'TempVoiceSystem',
    TempVoiceJoinChannel: 'TempVoiceJoinChannel',
    TempVoiceTemplate: 'TempVoiceTemplate',
    TempVoiceChannel: 'TempVoiceChannel'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "birthday" | "guildConfig" | "tempVoiceSystem" | "tempVoiceJoinChannel" | "tempVoiceTemplate" | "tempVoiceChannel"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Birthday: {
        payload: Prisma.$BirthdayPayload<ExtArgs>
        fields: Prisma.BirthdayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BirthdayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BirthdayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayPayload>
          }
          findFirst: {
            args: Prisma.BirthdayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BirthdayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayPayload>
          }
          findMany: {
            args: Prisma.BirthdayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayPayload>[]
          }
          create: {
            args: Prisma.BirthdayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayPayload>
          }
          createMany: {
            args: Prisma.BirthdayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BirthdayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayPayload>[]
          }
          delete: {
            args: Prisma.BirthdayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayPayload>
          }
          update: {
            args: Prisma.BirthdayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayPayload>
          }
          deleteMany: {
            args: Prisma.BirthdayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BirthdayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BirthdayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayPayload>[]
          }
          upsert: {
            args: Prisma.BirthdayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayPayload>
          }
          aggregate: {
            args: Prisma.BirthdayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBirthday>
          }
          groupBy: {
            args: Prisma.BirthdayGroupByArgs<ExtArgs>
            result: $Utils.Optional<BirthdayGroupByOutputType>[]
          }
          count: {
            args: Prisma.BirthdayCountArgs<ExtArgs>
            result: $Utils.Optional<BirthdayCountAggregateOutputType> | number
          }
        }
      }
      GuildConfig: {
        payload: Prisma.$GuildConfigPayload<ExtArgs>
        fields: Prisma.GuildConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuildConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuildConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          findFirst: {
            args: Prisma.GuildConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuildConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          findMany: {
            args: Prisma.GuildConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>[]
          }
          create: {
            args: Prisma.GuildConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          createMany: {
            args: Prisma.GuildConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuildConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>[]
          }
          delete: {
            args: Prisma.GuildConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          update: {
            args: Prisma.GuildConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          deleteMany: {
            args: Prisma.GuildConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuildConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuildConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>[]
          }
          upsert: {
            args: Prisma.GuildConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          aggregate: {
            args: Prisma.GuildConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuildConfig>
          }
          groupBy: {
            args: Prisma.GuildConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuildConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuildConfigCountArgs<ExtArgs>
            result: $Utils.Optional<GuildConfigCountAggregateOutputType> | number
          }
        }
      }
      TempVoiceSystem: {
        payload: Prisma.$TempVoiceSystemPayload<ExtArgs>
        fields: Prisma.TempVoiceSystemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TempVoiceSystemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceSystemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TempVoiceSystemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceSystemPayload>
          }
          findFirst: {
            args: Prisma.TempVoiceSystemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceSystemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TempVoiceSystemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceSystemPayload>
          }
          findMany: {
            args: Prisma.TempVoiceSystemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceSystemPayload>[]
          }
          create: {
            args: Prisma.TempVoiceSystemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceSystemPayload>
          }
          createMany: {
            args: Prisma.TempVoiceSystemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TempVoiceSystemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceSystemPayload>[]
          }
          delete: {
            args: Prisma.TempVoiceSystemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceSystemPayload>
          }
          update: {
            args: Prisma.TempVoiceSystemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceSystemPayload>
          }
          deleteMany: {
            args: Prisma.TempVoiceSystemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TempVoiceSystemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TempVoiceSystemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceSystemPayload>[]
          }
          upsert: {
            args: Prisma.TempVoiceSystemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceSystemPayload>
          }
          aggregate: {
            args: Prisma.TempVoiceSystemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTempVoiceSystem>
          }
          groupBy: {
            args: Prisma.TempVoiceSystemGroupByArgs<ExtArgs>
            result: $Utils.Optional<TempVoiceSystemGroupByOutputType>[]
          }
          count: {
            args: Prisma.TempVoiceSystemCountArgs<ExtArgs>
            result: $Utils.Optional<TempVoiceSystemCountAggregateOutputType> | number
          }
        }
      }
      TempVoiceJoinChannel: {
        payload: Prisma.$TempVoiceJoinChannelPayload<ExtArgs>
        fields: Prisma.TempVoiceJoinChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TempVoiceJoinChannelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceJoinChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TempVoiceJoinChannelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceJoinChannelPayload>
          }
          findFirst: {
            args: Prisma.TempVoiceJoinChannelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceJoinChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TempVoiceJoinChannelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceJoinChannelPayload>
          }
          findMany: {
            args: Prisma.TempVoiceJoinChannelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceJoinChannelPayload>[]
          }
          create: {
            args: Prisma.TempVoiceJoinChannelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceJoinChannelPayload>
          }
          createMany: {
            args: Prisma.TempVoiceJoinChannelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TempVoiceJoinChannelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceJoinChannelPayload>[]
          }
          delete: {
            args: Prisma.TempVoiceJoinChannelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceJoinChannelPayload>
          }
          update: {
            args: Prisma.TempVoiceJoinChannelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceJoinChannelPayload>
          }
          deleteMany: {
            args: Prisma.TempVoiceJoinChannelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TempVoiceJoinChannelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TempVoiceJoinChannelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceJoinChannelPayload>[]
          }
          upsert: {
            args: Prisma.TempVoiceJoinChannelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceJoinChannelPayload>
          }
          aggregate: {
            args: Prisma.TempVoiceJoinChannelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTempVoiceJoinChannel>
          }
          groupBy: {
            args: Prisma.TempVoiceJoinChannelGroupByArgs<ExtArgs>
            result: $Utils.Optional<TempVoiceJoinChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.TempVoiceJoinChannelCountArgs<ExtArgs>
            result: $Utils.Optional<TempVoiceJoinChannelCountAggregateOutputType> | number
          }
        }
      }
      TempVoiceTemplate: {
        payload: Prisma.$TempVoiceTemplatePayload<ExtArgs>
        fields: Prisma.TempVoiceTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TempVoiceTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TempVoiceTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceTemplatePayload>
          }
          findFirst: {
            args: Prisma.TempVoiceTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TempVoiceTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceTemplatePayload>
          }
          findMany: {
            args: Prisma.TempVoiceTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceTemplatePayload>[]
          }
          create: {
            args: Prisma.TempVoiceTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceTemplatePayload>
          }
          createMany: {
            args: Prisma.TempVoiceTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TempVoiceTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceTemplatePayload>[]
          }
          delete: {
            args: Prisma.TempVoiceTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceTemplatePayload>
          }
          update: {
            args: Prisma.TempVoiceTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceTemplatePayload>
          }
          deleteMany: {
            args: Prisma.TempVoiceTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TempVoiceTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TempVoiceTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceTemplatePayload>[]
          }
          upsert: {
            args: Prisma.TempVoiceTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceTemplatePayload>
          }
          aggregate: {
            args: Prisma.TempVoiceTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTempVoiceTemplate>
          }
          groupBy: {
            args: Prisma.TempVoiceTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TempVoiceTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TempVoiceTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TempVoiceTemplateCountAggregateOutputType> | number
          }
        }
      }
      TempVoiceChannel: {
        payload: Prisma.$TempVoiceChannelPayload<ExtArgs>
        fields: Prisma.TempVoiceChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TempVoiceChannelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TempVoiceChannelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceChannelPayload>
          }
          findFirst: {
            args: Prisma.TempVoiceChannelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TempVoiceChannelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceChannelPayload>
          }
          findMany: {
            args: Prisma.TempVoiceChannelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceChannelPayload>[]
          }
          create: {
            args: Prisma.TempVoiceChannelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceChannelPayload>
          }
          createMany: {
            args: Prisma.TempVoiceChannelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TempVoiceChannelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceChannelPayload>[]
          }
          delete: {
            args: Prisma.TempVoiceChannelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceChannelPayload>
          }
          update: {
            args: Prisma.TempVoiceChannelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceChannelPayload>
          }
          deleteMany: {
            args: Prisma.TempVoiceChannelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TempVoiceChannelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TempVoiceChannelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceChannelPayload>[]
          }
          upsert: {
            args: Prisma.TempVoiceChannelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempVoiceChannelPayload>
          }
          aggregate: {
            args: Prisma.TempVoiceChannelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTempVoiceChannel>
          }
          groupBy: {
            args: Prisma.TempVoiceChannelGroupByArgs<ExtArgs>
            result: $Utils.Optional<TempVoiceChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.TempVoiceChannelCountArgs<ExtArgs>
            result: $Utils.Optional<TempVoiceChannelCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    birthday?: BirthdayOmit
    guildConfig?: GuildConfigOmit
    tempVoiceSystem?: TempVoiceSystemOmit
    tempVoiceJoinChannel?: TempVoiceJoinChannelOmit
    tempVoiceTemplate?: TempVoiceTemplateOmit
    tempVoiceChannel?: TempVoiceChannelOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GuildConfigCountOutputType
   */

  export type GuildConfigCountOutputType = {
    tempVoiceSystems: number
  }

  export type GuildConfigCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tempVoiceSystems?: boolean | GuildConfigCountOutputTypeCountTempVoiceSystemsArgs
  }

  // Custom InputTypes
  /**
   * GuildConfigCountOutputType without action
   */
  export type GuildConfigCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfigCountOutputType
     */
    select?: GuildConfigCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuildConfigCountOutputType without action
   */
  export type GuildConfigCountOutputTypeCountTempVoiceSystemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempVoiceSystemWhereInput
  }


  /**
   * Count Type TempVoiceSystemCountOutputType
   */

  export type TempVoiceSystemCountOutputType = {
    channels: number
    joins: number
    templates: number
  }

  export type TempVoiceSystemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channels?: boolean | TempVoiceSystemCountOutputTypeCountChannelsArgs
    joins?: boolean | TempVoiceSystemCountOutputTypeCountJoinsArgs
    templates?: boolean | TempVoiceSystemCountOutputTypeCountTemplatesArgs
  }

  // Custom InputTypes
  /**
   * TempVoiceSystemCountOutputType without action
   */
  export type TempVoiceSystemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceSystemCountOutputType
     */
    select?: TempVoiceSystemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TempVoiceSystemCountOutputType without action
   */
  export type TempVoiceSystemCountOutputTypeCountChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempVoiceChannelWhereInput
  }

  /**
   * TempVoiceSystemCountOutputType without action
   */
  export type TempVoiceSystemCountOutputTypeCountJoinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempVoiceJoinChannelWhereInput
  }

  /**
   * TempVoiceSystemCountOutputType without action
   */
  export type TempVoiceSystemCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempVoiceTemplateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Birthday
   */

  export type AggregateBirthday = {
    _count: BirthdayCountAggregateOutputType | null
    _avg: BirthdayAvgAggregateOutputType | null
    _sum: BirthdaySumAggregateOutputType | null
    _min: BirthdayMinAggregateOutputType | null
    _max: BirthdayMaxAggregateOutputType | null
  }

  export type BirthdayAvgAggregateOutputType = {
    day: number | null
    month: number | null
    year: number | null
  }

  export type BirthdaySumAggregateOutputType = {
    day: number | null
    month: number | null
    year: number | null
  }

  export type BirthdayMinAggregateOutputType = {
    userId: string | null
    day: number | null
    month: number | null
    year: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BirthdayMaxAggregateOutputType = {
    userId: string | null
    day: number | null
    month: number | null
    year: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BirthdayCountAggregateOutputType = {
    userId: number
    day: number
    month: number
    year: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BirthdayAvgAggregateInputType = {
    day?: true
    month?: true
    year?: true
  }

  export type BirthdaySumAggregateInputType = {
    day?: true
    month?: true
    year?: true
  }

  export type BirthdayMinAggregateInputType = {
    userId?: true
    day?: true
    month?: true
    year?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BirthdayMaxAggregateInputType = {
    userId?: true
    day?: true
    month?: true
    year?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BirthdayCountAggregateInputType = {
    userId?: true
    day?: true
    month?: true
    year?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BirthdayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Birthday to aggregate.
     */
    where?: BirthdayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Birthdays to fetch.
     */
    orderBy?: BirthdayOrderByWithRelationInput | BirthdayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BirthdayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Birthdays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Birthdays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Birthdays
    **/
    _count?: true | BirthdayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BirthdayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BirthdaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BirthdayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BirthdayMaxAggregateInputType
  }

  export type GetBirthdayAggregateType<T extends BirthdayAggregateArgs> = {
        [P in keyof T & keyof AggregateBirthday]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBirthday[P]>
      : GetScalarType<T[P], AggregateBirthday[P]>
  }




  export type BirthdayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BirthdayWhereInput
    orderBy?: BirthdayOrderByWithAggregationInput | BirthdayOrderByWithAggregationInput[]
    by: BirthdayScalarFieldEnum[] | BirthdayScalarFieldEnum
    having?: BirthdayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BirthdayCountAggregateInputType | true
    _avg?: BirthdayAvgAggregateInputType
    _sum?: BirthdaySumAggregateInputType
    _min?: BirthdayMinAggregateInputType
    _max?: BirthdayMaxAggregateInputType
  }

  export type BirthdayGroupByOutputType = {
    userId: string
    day: number
    month: number
    year: number | null
    createdAt: Date
    updatedAt: Date
    _count: BirthdayCountAggregateOutputType | null
    _avg: BirthdayAvgAggregateOutputType | null
    _sum: BirthdaySumAggregateOutputType | null
    _min: BirthdayMinAggregateOutputType | null
    _max: BirthdayMaxAggregateOutputType | null
  }

  type GetBirthdayGroupByPayload<T extends BirthdayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BirthdayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BirthdayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BirthdayGroupByOutputType[P]>
            : GetScalarType<T[P], BirthdayGroupByOutputType[P]>
        }
      >
    >


  export type BirthdaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    day?: boolean
    month?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["birthday"]>

  export type BirthdaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    day?: boolean
    month?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["birthday"]>

  export type BirthdaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    day?: boolean
    month?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["birthday"]>

  export type BirthdaySelectScalar = {
    userId?: boolean
    day?: boolean
    month?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BirthdayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "day" | "month" | "year" | "createdAt" | "updatedAt", ExtArgs["result"]["birthday"]>

  export type $BirthdayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Birthday"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      day: number
      month: number
      year: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["birthday"]>
    composites: {}
  }

  type BirthdayGetPayload<S extends boolean | null | undefined | BirthdayDefaultArgs> = $Result.GetResult<Prisma.$BirthdayPayload, S>

  type BirthdayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BirthdayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BirthdayCountAggregateInputType | true
    }

  export interface BirthdayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Birthday'], meta: { name: 'Birthday' } }
    /**
     * Find zero or one Birthday that matches the filter.
     * @param {BirthdayFindUniqueArgs} args - Arguments to find a Birthday
     * @example
     * // Get one Birthday
     * const birthday = await prisma.birthday.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BirthdayFindUniqueArgs>(args: SelectSubset<T, BirthdayFindUniqueArgs<ExtArgs>>): Prisma__BirthdayClient<$Result.GetResult<Prisma.$BirthdayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Birthday that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BirthdayFindUniqueOrThrowArgs} args - Arguments to find a Birthday
     * @example
     * // Get one Birthday
     * const birthday = await prisma.birthday.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BirthdayFindUniqueOrThrowArgs>(args: SelectSubset<T, BirthdayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BirthdayClient<$Result.GetResult<Prisma.$BirthdayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Birthday that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayFindFirstArgs} args - Arguments to find a Birthday
     * @example
     * // Get one Birthday
     * const birthday = await prisma.birthday.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BirthdayFindFirstArgs>(args?: SelectSubset<T, BirthdayFindFirstArgs<ExtArgs>>): Prisma__BirthdayClient<$Result.GetResult<Prisma.$BirthdayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Birthday that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayFindFirstOrThrowArgs} args - Arguments to find a Birthday
     * @example
     * // Get one Birthday
     * const birthday = await prisma.birthday.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BirthdayFindFirstOrThrowArgs>(args?: SelectSubset<T, BirthdayFindFirstOrThrowArgs<ExtArgs>>): Prisma__BirthdayClient<$Result.GetResult<Prisma.$BirthdayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Birthdays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Birthdays
     * const birthdays = await prisma.birthday.findMany()
     * 
     * // Get first 10 Birthdays
     * const birthdays = await prisma.birthday.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const birthdayWithUserIdOnly = await prisma.birthday.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends BirthdayFindManyArgs>(args?: SelectSubset<T, BirthdayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BirthdayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Birthday.
     * @param {BirthdayCreateArgs} args - Arguments to create a Birthday.
     * @example
     * // Create one Birthday
     * const Birthday = await prisma.birthday.create({
     *   data: {
     *     // ... data to create a Birthday
     *   }
     * })
     * 
     */
    create<T extends BirthdayCreateArgs>(args: SelectSubset<T, BirthdayCreateArgs<ExtArgs>>): Prisma__BirthdayClient<$Result.GetResult<Prisma.$BirthdayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Birthdays.
     * @param {BirthdayCreateManyArgs} args - Arguments to create many Birthdays.
     * @example
     * // Create many Birthdays
     * const birthday = await prisma.birthday.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BirthdayCreateManyArgs>(args?: SelectSubset<T, BirthdayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Birthdays and returns the data saved in the database.
     * @param {BirthdayCreateManyAndReturnArgs} args - Arguments to create many Birthdays.
     * @example
     * // Create many Birthdays
     * const birthday = await prisma.birthday.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Birthdays and only return the `userId`
     * const birthdayWithUserIdOnly = await prisma.birthday.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BirthdayCreateManyAndReturnArgs>(args?: SelectSubset<T, BirthdayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BirthdayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Birthday.
     * @param {BirthdayDeleteArgs} args - Arguments to delete one Birthday.
     * @example
     * // Delete one Birthday
     * const Birthday = await prisma.birthday.delete({
     *   where: {
     *     // ... filter to delete one Birthday
     *   }
     * })
     * 
     */
    delete<T extends BirthdayDeleteArgs>(args: SelectSubset<T, BirthdayDeleteArgs<ExtArgs>>): Prisma__BirthdayClient<$Result.GetResult<Prisma.$BirthdayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Birthday.
     * @param {BirthdayUpdateArgs} args - Arguments to update one Birthday.
     * @example
     * // Update one Birthday
     * const birthday = await prisma.birthday.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BirthdayUpdateArgs>(args: SelectSubset<T, BirthdayUpdateArgs<ExtArgs>>): Prisma__BirthdayClient<$Result.GetResult<Prisma.$BirthdayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Birthdays.
     * @param {BirthdayDeleteManyArgs} args - Arguments to filter Birthdays to delete.
     * @example
     * // Delete a few Birthdays
     * const { count } = await prisma.birthday.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BirthdayDeleteManyArgs>(args?: SelectSubset<T, BirthdayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Birthdays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Birthdays
     * const birthday = await prisma.birthday.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BirthdayUpdateManyArgs>(args: SelectSubset<T, BirthdayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Birthdays and returns the data updated in the database.
     * @param {BirthdayUpdateManyAndReturnArgs} args - Arguments to update many Birthdays.
     * @example
     * // Update many Birthdays
     * const birthday = await prisma.birthday.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Birthdays and only return the `userId`
     * const birthdayWithUserIdOnly = await prisma.birthday.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BirthdayUpdateManyAndReturnArgs>(args: SelectSubset<T, BirthdayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BirthdayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Birthday.
     * @param {BirthdayUpsertArgs} args - Arguments to update or create a Birthday.
     * @example
     * // Update or create a Birthday
     * const birthday = await prisma.birthday.upsert({
     *   create: {
     *     // ... data to create a Birthday
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Birthday we want to update
     *   }
     * })
     */
    upsert<T extends BirthdayUpsertArgs>(args: SelectSubset<T, BirthdayUpsertArgs<ExtArgs>>): Prisma__BirthdayClient<$Result.GetResult<Prisma.$BirthdayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Birthdays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayCountArgs} args - Arguments to filter Birthdays to count.
     * @example
     * // Count the number of Birthdays
     * const count = await prisma.birthday.count({
     *   where: {
     *     // ... the filter for the Birthdays we want to count
     *   }
     * })
    **/
    count<T extends BirthdayCountArgs>(
      args?: Subset<T, BirthdayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BirthdayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Birthday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BirthdayAggregateArgs>(args: Subset<T, BirthdayAggregateArgs>): Prisma.PrismaPromise<GetBirthdayAggregateType<T>>

    /**
     * Group by Birthday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BirthdayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BirthdayGroupByArgs['orderBy'] }
        : { orderBy?: BirthdayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BirthdayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBirthdayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Birthday model
   */
  readonly fields: BirthdayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Birthday.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BirthdayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Birthday model
   */
  interface BirthdayFieldRefs {
    readonly userId: FieldRef<"Birthday", 'String'>
    readonly day: FieldRef<"Birthday", 'Int'>
    readonly month: FieldRef<"Birthday", 'Int'>
    readonly year: FieldRef<"Birthday", 'Int'>
    readonly createdAt: FieldRef<"Birthday", 'DateTime'>
    readonly updatedAt: FieldRef<"Birthday", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Birthday findUnique
   */
  export type BirthdayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Birthday
     */
    select?: BirthdaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Birthday
     */
    omit?: BirthdayOmit<ExtArgs> | null
    /**
     * Filter, which Birthday to fetch.
     */
    where: BirthdayWhereUniqueInput
  }

  /**
   * Birthday findUniqueOrThrow
   */
  export type BirthdayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Birthday
     */
    select?: BirthdaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Birthday
     */
    omit?: BirthdayOmit<ExtArgs> | null
    /**
     * Filter, which Birthday to fetch.
     */
    where: BirthdayWhereUniqueInput
  }

  /**
   * Birthday findFirst
   */
  export type BirthdayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Birthday
     */
    select?: BirthdaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Birthday
     */
    omit?: BirthdayOmit<ExtArgs> | null
    /**
     * Filter, which Birthday to fetch.
     */
    where?: BirthdayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Birthdays to fetch.
     */
    orderBy?: BirthdayOrderByWithRelationInput | BirthdayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Birthdays.
     */
    cursor?: BirthdayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Birthdays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Birthdays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Birthdays.
     */
    distinct?: BirthdayScalarFieldEnum | BirthdayScalarFieldEnum[]
  }

  /**
   * Birthday findFirstOrThrow
   */
  export type BirthdayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Birthday
     */
    select?: BirthdaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Birthday
     */
    omit?: BirthdayOmit<ExtArgs> | null
    /**
     * Filter, which Birthday to fetch.
     */
    where?: BirthdayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Birthdays to fetch.
     */
    orderBy?: BirthdayOrderByWithRelationInput | BirthdayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Birthdays.
     */
    cursor?: BirthdayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Birthdays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Birthdays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Birthdays.
     */
    distinct?: BirthdayScalarFieldEnum | BirthdayScalarFieldEnum[]
  }

  /**
   * Birthday findMany
   */
  export type BirthdayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Birthday
     */
    select?: BirthdaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Birthday
     */
    omit?: BirthdayOmit<ExtArgs> | null
    /**
     * Filter, which Birthdays to fetch.
     */
    where?: BirthdayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Birthdays to fetch.
     */
    orderBy?: BirthdayOrderByWithRelationInput | BirthdayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Birthdays.
     */
    cursor?: BirthdayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Birthdays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Birthdays.
     */
    skip?: number
    distinct?: BirthdayScalarFieldEnum | BirthdayScalarFieldEnum[]
  }

  /**
   * Birthday create
   */
  export type BirthdayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Birthday
     */
    select?: BirthdaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Birthday
     */
    omit?: BirthdayOmit<ExtArgs> | null
    /**
     * The data needed to create a Birthday.
     */
    data: XOR<BirthdayCreateInput, BirthdayUncheckedCreateInput>
  }

  /**
   * Birthday createMany
   */
  export type BirthdayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Birthdays.
     */
    data: BirthdayCreateManyInput | BirthdayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Birthday createManyAndReturn
   */
  export type BirthdayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Birthday
     */
    select?: BirthdaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Birthday
     */
    omit?: BirthdayOmit<ExtArgs> | null
    /**
     * The data used to create many Birthdays.
     */
    data: BirthdayCreateManyInput | BirthdayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Birthday update
   */
  export type BirthdayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Birthday
     */
    select?: BirthdaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Birthday
     */
    omit?: BirthdayOmit<ExtArgs> | null
    /**
     * The data needed to update a Birthday.
     */
    data: XOR<BirthdayUpdateInput, BirthdayUncheckedUpdateInput>
    /**
     * Choose, which Birthday to update.
     */
    where: BirthdayWhereUniqueInput
  }

  /**
   * Birthday updateMany
   */
  export type BirthdayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Birthdays.
     */
    data: XOR<BirthdayUpdateManyMutationInput, BirthdayUncheckedUpdateManyInput>
    /**
     * Filter which Birthdays to update
     */
    where?: BirthdayWhereInput
    /**
     * Limit how many Birthdays to update.
     */
    limit?: number
  }

  /**
   * Birthday updateManyAndReturn
   */
  export type BirthdayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Birthday
     */
    select?: BirthdaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Birthday
     */
    omit?: BirthdayOmit<ExtArgs> | null
    /**
     * The data used to update Birthdays.
     */
    data: XOR<BirthdayUpdateManyMutationInput, BirthdayUncheckedUpdateManyInput>
    /**
     * Filter which Birthdays to update
     */
    where?: BirthdayWhereInput
    /**
     * Limit how many Birthdays to update.
     */
    limit?: number
  }

  /**
   * Birthday upsert
   */
  export type BirthdayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Birthday
     */
    select?: BirthdaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Birthday
     */
    omit?: BirthdayOmit<ExtArgs> | null
    /**
     * The filter to search for the Birthday to update in case it exists.
     */
    where: BirthdayWhereUniqueInput
    /**
     * In case the Birthday found by the `where` argument doesn't exist, create a new Birthday with this data.
     */
    create: XOR<BirthdayCreateInput, BirthdayUncheckedCreateInput>
    /**
     * In case the Birthday was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BirthdayUpdateInput, BirthdayUncheckedUpdateInput>
  }

  /**
   * Birthday delete
   */
  export type BirthdayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Birthday
     */
    select?: BirthdaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Birthday
     */
    omit?: BirthdayOmit<ExtArgs> | null
    /**
     * Filter which Birthday to delete.
     */
    where: BirthdayWhereUniqueInput
  }

  /**
   * Birthday deleteMany
   */
  export type BirthdayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Birthdays to delete
     */
    where?: BirthdayWhereInput
    /**
     * Limit how many Birthdays to delete.
     */
    limit?: number
  }

  /**
   * Birthday without action
   */
  export type BirthdayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Birthday
     */
    select?: BirthdaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Birthday
     */
    omit?: BirthdayOmit<ExtArgs> | null
  }


  /**
   * Model GuildConfig
   */

  export type AggregateGuildConfig = {
    _count: GuildConfigCountAggregateOutputType | null
    _min: GuildConfigMinAggregateOutputType | null
    _max: GuildConfigMaxAggregateOutputType | null
  }

  export type GuildConfigMinAggregateOutputType = {
    guildId: string | null
    birthdayChannelId: string | null
    birthdayRoleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuildConfigMaxAggregateOutputType = {
    guildId: string | null
    birthdayChannelId: string | null
    birthdayRoleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuildConfigCountAggregateOutputType = {
    guildId: number
    birthdayChannelId: number
    birthdayRoleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuildConfigMinAggregateInputType = {
    guildId?: true
    birthdayChannelId?: true
    birthdayRoleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuildConfigMaxAggregateInputType = {
    guildId?: true
    birthdayChannelId?: true
    birthdayRoleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuildConfigCountAggregateInputType = {
    guildId?: true
    birthdayChannelId?: true
    birthdayRoleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuildConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildConfig to aggregate.
     */
    where?: GuildConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildConfigs to fetch.
     */
    orderBy?: GuildConfigOrderByWithRelationInput | GuildConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuildConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuildConfigs
    **/
    _count?: true | GuildConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuildConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuildConfigMaxAggregateInputType
  }

  export type GetGuildConfigAggregateType<T extends GuildConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateGuildConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuildConfig[P]>
      : GetScalarType<T[P], AggregateGuildConfig[P]>
  }




  export type GuildConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildConfigWhereInput
    orderBy?: GuildConfigOrderByWithAggregationInput | GuildConfigOrderByWithAggregationInput[]
    by: GuildConfigScalarFieldEnum[] | GuildConfigScalarFieldEnum
    having?: GuildConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuildConfigCountAggregateInputType | true
    _min?: GuildConfigMinAggregateInputType
    _max?: GuildConfigMaxAggregateInputType
  }

  export type GuildConfigGroupByOutputType = {
    guildId: string
    birthdayChannelId: string | null
    birthdayRoleId: string | null
    createdAt: Date
    updatedAt: Date
    _count: GuildConfigCountAggregateOutputType | null
    _min: GuildConfigMinAggregateOutputType | null
    _max: GuildConfigMaxAggregateOutputType | null
  }

  type GetGuildConfigGroupByPayload<T extends GuildConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuildConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuildConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuildConfigGroupByOutputType[P]>
            : GetScalarType<T[P], GuildConfigGroupByOutputType[P]>
        }
      >
    >


  export type GuildConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    birthdayChannelId?: boolean
    birthdayRoleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tempVoiceSystems?: boolean | GuildConfig$tempVoiceSystemsArgs<ExtArgs>
    _count?: boolean | GuildConfigCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guildConfig"]>

  export type GuildConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    birthdayChannelId?: boolean
    birthdayRoleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["guildConfig"]>

  export type GuildConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    birthdayChannelId?: boolean
    birthdayRoleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["guildConfig"]>

  export type GuildConfigSelectScalar = {
    guildId?: boolean
    birthdayChannelId?: boolean
    birthdayRoleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuildConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"guildId" | "birthdayChannelId" | "birthdayRoleId" | "createdAt" | "updatedAt", ExtArgs["result"]["guildConfig"]>
  export type GuildConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tempVoiceSystems?: boolean | GuildConfig$tempVoiceSystemsArgs<ExtArgs>
    _count?: boolean | GuildConfigCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuildConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GuildConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GuildConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuildConfig"
    objects: {
      tempVoiceSystems: Prisma.$TempVoiceSystemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      guildId: string
      birthdayChannelId: string | null
      birthdayRoleId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guildConfig"]>
    composites: {}
  }

  type GuildConfigGetPayload<S extends boolean | null | undefined | GuildConfigDefaultArgs> = $Result.GetResult<Prisma.$GuildConfigPayload, S>

  type GuildConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuildConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuildConfigCountAggregateInputType | true
    }

  export interface GuildConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuildConfig'], meta: { name: 'GuildConfig' } }
    /**
     * Find zero or one GuildConfig that matches the filter.
     * @param {GuildConfigFindUniqueArgs} args - Arguments to find a GuildConfig
     * @example
     * // Get one GuildConfig
     * const guildConfig = await prisma.guildConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuildConfigFindUniqueArgs>(args: SelectSubset<T, GuildConfigFindUniqueArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuildConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuildConfigFindUniqueOrThrowArgs} args - Arguments to find a GuildConfig
     * @example
     * // Get one GuildConfig
     * const guildConfig = await prisma.guildConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuildConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, GuildConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuildConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigFindFirstArgs} args - Arguments to find a GuildConfig
     * @example
     * // Get one GuildConfig
     * const guildConfig = await prisma.guildConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuildConfigFindFirstArgs>(args?: SelectSubset<T, GuildConfigFindFirstArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuildConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigFindFirstOrThrowArgs} args - Arguments to find a GuildConfig
     * @example
     * // Get one GuildConfig
     * const guildConfig = await prisma.guildConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuildConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, GuildConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuildConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuildConfigs
     * const guildConfigs = await prisma.guildConfig.findMany()
     * 
     * // Get first 10 GuildConfigs
     * const guildConfigs = await prisma.guildConfig.findMany({ take: 10 })
     * 
     * // Only select the `guildId`
     * const guildConfigWithGuildIdOnly = await prisma.guildConfig.findMany({ select: { guildId: true } })
     * 
     */
    findMany<T extends GuildConfigFindManyArgs>(args?: SelectSubset<T, GuildConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuildConfig.
     * @param {GuildConfigCreateArgs} args - Arguments to create a GuildConfig.
     * @example
     * // Create one GuildConfig
     * const GuildConfig = await prisma.guildConfig.create({
     *   data: {
     *     // ... data to create a GuildConfig
     *   }
     * })
     * 
     */
    create<T extends GuildConfigCreateArgs>(args: SelectSubset<T, GuildConfigCreateArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuildConfigs.
     * @param {GuildConfigCreateManyArgs} args - Arguments to create many GuildConfigs.
     * @example
     * // Create many GuildConfigs
     * const guildConfig = await prisma.guildConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuildConfigCreateManyArgs>(args?: SelectSubset<T, GuildConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuildConfigs and returns the data saved in the database.
     * @param {GuildConfigCreateManyAndReturnArgs} args - Arguments to create many GuildConfigs.
     * @example
     * // Create many GuildConfigs
     * const guildConfig = await prisma.guildConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuildConfigs and only return the `guildId`
     * const guildConfigWithGuildIdOnly = await prisma.guildConfig.createManyAndReturn({
     *   select: { guildId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuildConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, GuildConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuildConfig.
     * @param {GuildConfigDeleteArgs} args - Arguments to delete one GuildConfig.
     * @example
     * // Delete one GuildConfig
     * const GuildConfig = await prisma.guildConfig.delete({
     *   where: {
     *     // ... filter to delete one GuildConfig
     *   }
     * })
     * 
     */
    delete<T extends GuildConfigDeleteArgs>(args: SelectSubset<T, GuildConfigDeleteArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuildConfig.
     * @param {GuildConfigUpdateArgs} args - Arguments to update one GuildConfig.
     * @example
     * // Update one GuildConfig
     * const guildConfig = await prisma.guildConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuildConfigUpdateArgs>(args: SelectSubset<T, GuildConfigUpdateArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuildConfigs.
     * @param {GuildConfigDeleteManyArgs} args - Arguments to filter GuildConfigs to delete.
     * @example
     * // Delete a few GuildConfigs
     * const { count } = await prisma.guildConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuildConfigDeleteManyArgs>(args?: SelectSubset<T, GuildConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuildConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuildConfigs
     * const guildConfig = await prisma.guildConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuildConfigUpdateManyArgs>(args: SelectSubset<T, GuildConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuildConfigs and returns the data updated in the database.
     * @param {GuildConfigUpdateManyAndReturnArgs} args - Arguments to update many GuildConfigs.
     * @example
     * // Update many GuildConfigs
     * const guildConfig = await prisma.guildConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuildConfigs and only return the `guildId`
     * const guildConfigWithGuildIdOnly = await prisma.guildConfig.updateManyAndReturn({
     *   select: { guildId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuildConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, GuildConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuildConfig.
     * @param {GuildConfigUpsertArgs} args - Arguments to update or create a GuildConfig.
     * @example
     * // Update or create a GuildConfig
     * const guildConfig = await prisma.guildConfig.upsert({
     *   create: {
     *     // ... data to create a GuildConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuildConfig we want to update
     *   }
     * })
     */
    upsert<T extends GuildConfigUpsertArgs>(args: SelectSubset<T, GuildConfigUpsertArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuildConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigCountArgs} args - Arguments to filter GuildConfigs to count.
     * @example
     * // Count the number of GuildConfigs
     * const count = await prisma.guildConfig.count({
     *   where: {
     *     // ... the filter for the GuildConfigs we want to count
     *   }
     * })
    **/
    count<T extends GuildConfigCountArgs>(
      args?: Subset<T, GuildConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuildConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuildConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuildConfigAggregateArgs>(args: Subset<T, GuildConfigAggregateArgs>): Prisma.PrismaPromise<GetGuildConfigAggregateType<T>>

    /**
     * Group by GuildConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuildConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuildConfigGroupByArgs['orderBy'] }
        : { orderBy?: GuildConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuildConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuildConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuildConfig model
   */
  readonly fields: GuildConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuildConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuildConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tempVoiceSystems<T extends GuildConfig$tempVoiceSystemsArgs<ExtArgs> = {}>(args?: Subset<T, GuildConfig$tempVoiceSystemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempVoiceSystemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GuildConfig model
   */
  interface GuildConfigFieldRefs {
    readonly guildId: FieldRef<"GuildConfig", 'String'>
    readonly birthdayChannelId: FieldRef<"GuildConfig", 'String'>
    readonly birthdayRoleId: FieldRef<"GuildConfig", 'String'>
    readonly createdAt: FieldRef<"GuildConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"GuildConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GuildConfig findUnique
   */
  export type GuildConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildConfigInclude<ExtArgs> | null
    /**
     * Filter, which GuildConfig to fetch.
     */
    where: GuildConfigWhereUniqueInput
  }

  /**
   * GuildConfig findUniqueOrThrow
   */
  export type GuildConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildConfigInclude<ExtArgs> | null
    /**
     * Filter, which GuildConfig to fetch.
     */
    where: GuildConfigWhereUniqueInput
  }

  /**
   * GuildConfig findFirst
   */
  export type GuildConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildConfigInclude<ExtArgs> | null
    /**
     * Filter, which GuildConfig to fetch.
     */
    where?: GuildConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildConfigs to fetch.
     */
    orderBy?: GuildConfigOrderByWithRelationInput | GuildConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildConfigs.
     */
    cursor?: GuildConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildConfigs.
     */
    distinct?: GuildConfigScalarFieldEnum | GuildConfigScalarFieldEnum[]
  }

  /**
   * GuildConfig findFirstOrThrow
   */
  export type GuildConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildConfigInclude<ExtArgs> | null
    /**
     * Filter, which GuildConfig to fetch.
     */
    where?: GuildConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildConfigs to fetch.
     */
    orderBy?: GuildConfigOrderByWithRelationInput | GuildConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildConfigs.
     */
    cursor?: GuildConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildConfigs.
     */
    distinct?: GuildConfigScalarFieldEnum | GuildConfigScalarFieldEnum[]
  }

  /**
   * GuildConfig findMany
   */
  export type GuildConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildConfigInclude<ExtArgs> | null
    /**
     * Filter, which GuildConfigs to fetch.
     */
    where?: GuildConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildConfigs to fetch.
     */
    orderBy?: GuildConfigOrderByWithRelationInput | GuildConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuildConfigs.
     */
    cursor?: GuildConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildConfigs.
     */
    skip?: number
    distinct?: GuildConfigScalarFieldEnum | GuildConfigScalarFieldEnum[]
  }

  /**
   * GuildConfig create
   */
  export type GuildConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a GuildConfig.
     */
    data: XOR<GuildConfigCreateInput, GuildConfigUncheckedCreateInput>
  }

  /**
   * GuildConfig createMany
   */
  export type GuildConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuildConfigs.
     */
    data: GuildConfigCreateManyInput | GuildConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuildConfig createManyAndReturn
   */
  export type GuildConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * The data used to create many GuildConfigs.
     */
    data: GuildConfigCreateManyInput | GuildConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuildConfig update
   */
  export type GuildConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a GuildConfig.
     */
    data: XOR<GuildConfigUpdateInput, GuildConfigUncheckedUpdateInput>
    /**
     * Choose, which GuildConfig to update.
     */
    where: GuildConfigWhereUniqueInput
  }

  /**
   * GuildConfig updateMany
   */
  export type GuildConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuildConfigs.
     */
    data: XOR<GuildConfigUpdateManyMutationInput, GuildConfigUncheckedUpdateManyInput>
    /**
     * Filter which GuildConfigs to update
     */
    where?: GuildConfigWhereInput
    /**
     * Limit how many GuildConfigs to update.
     */
    limit?: number
  }

  /**
   * GuildConfig updateManyAndReturn
   */
  export type GuildConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * The data used to update GuildConfigs.
     */
    data: XOR<GuildConfigUpdateManyMutationInput, GuildConfigUncheckedUpdateManyInput>
    /**
     * Filter which GuildConfigs to update
     */
    where?: GuildConfigWhereInput
    /**
     * Limit how many GuildConfigs to update.
     */
    limit?: number
  }

  /**
   * GuildConfig upsert
   */
  export type GuildConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the GuildConfig to update in case it exists.
     */
    where: GuildConfigWhereUniqueInput
    /**
     * In case the GuildConfig found by the `where` argument doesn't exist, create a new GuildConfig with this data.
     */
    create: XOR<GuildConfigCreateInput, GuildConfigUncheckedCreateInput>
    /**
     * In case the GuildConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuildConfigUpdateInput, GuildConfigUncheckedUpdateInput>
  }

  /**
   * GuildConfig delete
   */
  export type GuildConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildConfigInclude<ExtArgs> | null
    /**
     * Filter which GuildConfig to delete.
     */
    where: GuildConfigWhereUniqueInput
  }

  /**
   * GuildConfig deleteMany
   */
  export type GuildConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildConfigs to delete
     */
    where?: GuildConfigWhereInput
    /**
     * Limit how many GuildConfigs to delete.
     */
    limit?: number
  }

  /**
   * GuildConfig.tempVoiceSystems
   */
  export type GuildConfig$tempVoiceSystemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceSystem
     */
    select?: TempVoiceSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceSystem
     */
    omit?: TempVoiceSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceSystemInclude<ExtArgs> | null
    where?: TempVoiceSystemWhereInput
    orderBy?: TempVoiceSystemOrderByWithRelationInput | TempVoiceSystemOrderByWithRelationInput[]
    cursor?: TempVoiceSystemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TempVoiceSystemScalarFieldEnum | TempVoiceSystemScalarFieldEnum[]
  }

  /**
   * GuildConfig without action
   */
  export type GuildConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildConfigInclude<ExtArgs> | null
  }


  /**
   * Model TempVoiceSystem
   */

  export type AggregateTempVoiceSystem = {
    _count: TempVoiceSystemCountAggregateOutputType | null
    _avg: TempVoiceSystemAvgAggregateOutputType | null
    _sum: TempVoiceSystemSumAggregateOutputType | null
    _min: TempVoiceSystemMinAggregateOutputType | null
    _max: TempVoiceSystemMaxAggregateOutputType | null
  }

  export type TempVoiceSystemAvgAggregateOutputType = {
    deleteDelay: number | null
  }

  export type TempVoiceSystemSumAggregateOutputType = {
    deleteDelay: number | null
  }

  export type TempVoiceSystemMinAggregateOutputType = {
    id: string | null
    guildId: string | null
    name: string | null
    categoryId: string | null
    enabled: boolean | null
    deleteDelay: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TempVoiceSystemMaxAggregateOutputType = {
    id: string | null
    guildId: string | null
    name: string | null
    categoryId: string | null
    enabled: boolean | null
    deleteDelay: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TempVoiceSystemCountAggregateOutputType = {
    id: number
    guildId: number
    name: number
    categoryId: number
    enabled: number
    deleteDelay: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TempVoiceSystemAvgAggregateInputType = {
    deleteDelay?: true
  }

  export type TempVoiceSystemSumAggregateInputType = {
    deleteDelay?: true
  }

  export type TempVoiceSystemMinAggregateInputType = {
    id?: true
    guildId?: true
    name?: true
    categoryId?: true
    enabled?: true
    deleteDelay?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TempVoiceSystemMaxAggregateInputType = {
    id?: true
    guildId?: true
    name?: true
    categoryId?: true
    enabled?: true
    deleteDelay?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TempVoiceSystemCountAggregateInputType = {
    id?: true
    guildId?: true
    name?: true
    categoryId?: true
    enabled?: true
    deleteDelay?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TempVoiceSystemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TempVoiceSystem to aggregate.
     */
    where?: TempVoiceSystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempVoiceSystems to fetch.
     */
    orderBy?: TempVoiceSystemOrderByWithRelationInput | TempVoiceSystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TempVoiceSystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempVoiceSystems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempVoiceSystems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TempVoiceSystems
    **/
    _count?: true | TempVoiceSystemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TempVoiceSystemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TempVoiceSystemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TempVoiceSystemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TempVoiceSystemMaxAggregateInputType
  }

  export type GetTempVoiceSystemAggregateType<T extends TempVoiceSystemAggregateArgs> = {
        [P in keyof T & keyof AggregateTempVoiceSystem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTempVoiceSystem[P]>
      : GetScalarType<T[P], AggregateTempVoiceSystem[P]>
  }




  export type TempVoiceSystemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempVoiceSystemWhereInput
    orderBy?: TempVoiceSystemOrderByWithAggregationInput | TempVoiceSystemOrderByWithAggregationInput[]
    by: TempVoiceSystemScalarFieldEnum[] | TempVoiceSystemScalarFieldEnum
    having?: TempVoiceSystemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TempVoiceSystemCountAggregateInputType | true
    _avg?: TempVoiceSystemAvgAggregateInputType
    _sum?: TempVoiceSystemSumAggregateInputType
    _min?: TempVoiceSystemMinAggregateInputType
    _max?: TempVoiceSystemMaxAggregateInputType
  }

  export type TempVoiceSystemGroupByOutputType = {
    id: string
    guildId: string
    name: string
    categoryId: string
    enabled: boolean
    deleteDelay: number
    createdAt: Date
    updatedAt: Date
    _count: TempVoiceSystemCountAggregateOutputType | null
    _avg: TempVoiceSystemAvgAggregateOutputType | null
    _sum: TempVoiceSystemSumAggregateOutputType | null
    _min: TempVoiceSystemMinAggregateOutputType | null
    _max: TempVoiceSystemMaxAggregateOutputType | null
  }

  type GetTempVoiceSystemGroupByPayload<T extends TempVoiceSystemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TempVoiceSystemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TempVoiceSystemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TempVoiceSystemGroupByOutputType[P]>
            : GetScalarType<T[P], TempVoiceSystemGroupByOutputType[P]>
        }
      >
    >


  export type TempVoiceSystemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    name?: boolean
    categoryId?: boolean
    enabled?: boolean
    deleteDelay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channels?: boolean | TempVoiceSystem$channelsArgs<ExtArgs>
    joins?: boolean | TempVoiceSystem$joinsArgs<ExtArgs>
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
    templates?: boolean | TempVoiceSystem$templatesArgs<ExtArgs>
    _count?: boolean | TempVoiceSystemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tempVoiceSystem"]>

  export type TempVoiceSystemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    name?: boolean
    categoryId?: boolean
    enabled?: boolean
    deleteDelay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tempVoiceSystem"]>

  export type TempVoiceSystemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    name?: boolean
    categoryId?: boolean
    enabled?: boolean
    deleteDelay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tempVoiceSystem"]>

  export type TempVoiceSystemSelectScalar = {
    id?: boolean
    guildId?: boolean
    name?: boolean
    categoryId?: boolean
    enabled?: boolean
    deleteDelay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TempVoiceSystemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "name" | "categoryId" | "enabled" | "deleteDelay" | "createdAt" | "updatedAt", ExtArgs["result"]["tempVoiceSystem"]>
  export type TempVoiceSystemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channels?: boolean | TempVoiceSystem$channelsArgs<ExtArgs>
    joins?: boolean | TempVoiceSystem$joinsArgs<ExtArgs>
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
    templates?: boolean | TempVoiceSystem$templatesArgs<ExtArgs>
    _count?: boolean | TempVoiceSystemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TempVoiceSystemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }
  export type TempVoiceSystemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }

  export type $TempVoiceSystemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TempVoiceSystem"
    objects: {
      channels: Prisma.$TempVoiceChannelPayload<ExtArgs>[]
      joins: Prisma.$TempVoiceJoinChannelPayload<ExtArgs>[]
      guild: Prisma.$GuildConfigPayload<ExtArgs>
      templates: Prisma.$TempVoiceTemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guildId: string
      name: string
      categoryId: string
      enabled: boolean
      deleteDelay: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tempVoiceSystem"]>
    composites: {}
  }

  type TempVoiceSystemGetPayload<S extends boolean | null | undefined | TempVoiceSystemDefaultArgs> = $Result.GetResult<Prisma.$TempVoiceSystemPayload, S>

  type TempVoiceSystemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TempVoiceSystemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TempVoiceSystemCountAggregateInputType | true
    }

  export interface TempVoiceSystemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TempVoiceSystem'], meta: { name: 'TempVoiceSystem' } }
    /**
     * Find zero or one TempVoiceSystem that matches the filter.
     * @param {TempVoiceSystemFindUniqueArgs} args - Arguments to find a TempVoiceSystem
     * @example
     * // Get one TempVoiceSystem
     * const tempVoiceSystem = await prisma.tempVoiceSystem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TempVoiceSystemFindUniqueArgs>(args: SelectSubset<T, TempVoiceSystemFindUniqueArgs<ExtArgs>>): Prisma__TempVoiceSystemClient<$Result.GetResult<Prisma.$TempVoiceSystemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TempVoiceSystem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TempVoiceSystemFindUniqueOrThrowArgs} args - Arguments to find a TempVoiceSystem
     * @example
     * // Get one TempVoiceSystem
     * const tempVoiceSystem = await prisma.tempVoiceSystem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TempVoiceSystemFindUniqueOrThrowArgs>(args: SelectSubset<T, TempVoiceSystemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TempVoiceSystemClient<$Result.GetResult<Prisma.$TempVoiceSystemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TempVoiceSystem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceSystemFindFirstArgs} args - Arguments to find a TempVoiceSystem
     * @example
     * // Get one TempVoiceSystem
     * const tempVoiceSystem = await prisma.tempVoiceSystem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TempVoiceSystemFindFirstArgs>(args?: SelectSubset<T, TempVoiceSystemFindFirstArgs<ExtArgs>>): Prisma__TempVoiceSystemClient<$Result.GetResult<Prisma.$TempVoiceSystemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TempVoiceSystem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceSystemFindFirstOrThrowArgs} args - Arguments to find a TempVoiceSystem
     * @example
     * // Get one TempVoiceSystem
     * const tempVoiceSystem = await prisma.tempVoiceSystem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TempVoiceSystemFindFirstOrThrowArgs>(args?: SelectSubset<T, TempVoiceSystemFindFirstOrThrowArgs<ExtArgs>>): Prisma__TempVoiceSystemClient<$Result.GetResult<Prisma.$TempVoiceSystemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TempVoiceSystems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceSystemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TempVoiceSystems
     * const tempVoiceSystems = await prisma.tempVoiceSystem.findMany()
     * 
     * // Get first 10 TempVoiceSystems
     * const tempVoiceSystems = await prisma.tempVoiceSystem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tempVoiceSystemWithIdOnly = await prisma.tempVoiceSystem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TempVoiceSystemFindManyArgs>(args?: SelectSubset<T, TempVoiceSystemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempVoiceSystemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TempVoiceSystem.
     * @param {TempVoiceSystemCreateArgs} args - Arguments to create a TempVoiceSystem.
     * @example
     * // Create one TempVoiceSystem
     * const TempVoiceSystem = await prisma.tempVoiceSystem.create({
     *   data: {
     *     // ... data to create a TempVoiceSystem
     *   }
     * })
     * 
     */
    create<T extends TempVoiceSystemCreateArgs>(args: SelectSubset<T, TempVoiceSystemCreateArgs<ExtArgs>>): Prisma__TempVoiceSystemClient<$Result.GetResult<Prisma.$TempVoiceSystemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TempVoiceSystems.
     * @param {TempVoiceSystemCreateManyArgs} args - Arguments to create many TempVoiceSystems.
     * @example
     * // Create many TempVoiceSystems
     * const tempVoiceSystem = await prisma.tempVoiceSystem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TempVoiceSystemCreateManyArgs>(args?: SelectSubset<T, TempVoiceSystemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TempVoiceSystems and returns the data saved in the database.
     * @param {TempVoiceSystemCreateManyAndReturnArgs} args - Arguments to create many TempVoiceSystems.
     * @example
     * // Create many TempVoiceSystems
     * const tempVoiceSystem = await prisma.tempVoiceSystem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TempVoiceSystems and only return the `id`
     * const tempVoiceSystemWithIdOnly = await prisma.tempVoiceSystem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TempVoiceSystemCreateManyAndReturnArgs>(args?: SelectSubset<T, TempVoiceSystemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempVoiceSystemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TempVoiceSystem.
     * @param {TempVoiceSystemDeleteArgs} args - Arguments to delete one TempVoiceSystem.
     * @example
     * // Delete one TempVoiceSystem
     * const TempVoiceSystem = await prisma.tempVoiceSystem.delete({
     *   where: {
     *     // ... filter to delete one TempVoiceSystem
     *   }
     * })
     * 
     */
    delete<T extends TempVoiceSystemDeleteArgs>(args: SelectSubset<T, TempVoiceSystemDeleteArgs<ExtArgs>>): Prisma__TempVoiceSystemClient<$Result.GetResult<Prisma.$TempVoiceSystemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TempVoiceSystem.
     * @param {TempVoiceSystemUpdateArgs} args - Arguments to update one TempVoiceSystem.
     * @example
     * // Update one TempVoiceSystem
     * const tempVoiceSystem = await prisma.tempVoiceSystem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TempVoiceSystemUpdateArgs>(args: SelectSubset<T, TempVoiceSystemUpdateArgs<ExtArgs>>): Prisma__TempVoiceSystemClient<$Result.GetResult<Prisma.$TempVoiceSystemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TempVoiceSystems.
     * @param {TempVoiceSystemDeleteManyArgs} args - Arguments to filter TempVoiceSystems to delete.
     * @example
     * // Delete a few TempVoiceSystems
     * const { count } = await prisma.tempVoiceSystem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TempVoiceSystemDeleteManyArgs>(args?: SelectSubset<T, TempVoiceSystemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TempVoiceSystems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceSystemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TempVoiceSystems
     * const tempVoiceSystem = await prisma.tempVoiceSystem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TempVoiceSystemUpdateManyArgs>(args: SelectSubset<T, TempVoiceSystemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TempVoiceSystems and returns the data updated in the database.
     * @param {TempVoiceSystemUpdateManyAndReturnArgs} args - Arguments to update many TempVoiceSystems.
     * @example
     * // Update many TempVoiceSystems
     * const tempVoiceSystem = await prisma.tempVoiceSystem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TempVoiceSystems and only return the `id`
     * const tempVoiceSystemWithIdOnly = await prisma.tempVoiceSystem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TempVoiceSystemUpdateManyAndReturnArgs>(args: SelectSubset<T, TempVoiceSystemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempVoiceSystemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TempVoiceSystem.
     * @param {TempVoiceSystemUpsertArgs} args - Arguments to update or create a TempVoiceSystem.
     * @example
     * // Update or create a TempVoiceSystem
     * const tempVoiceSystem = await prisma.tempVoiceSystem.upsert({
     *   create: {
     *     // ... data to create a TempVoiceSystem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TempVoiceSystem we want to update
     *   }
     * })
     */
    upsert<T extends TempVoiceSystemUpsertArgs>(args: SelectSubset<T, TempVoiceSystemUpsertArgs<ExtArgs>>): Prisma__TempVoiceSystemClient<$Result.GetResult<Prisma.$TempVoiceSystemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TempVoiceSystems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceSystemCountArgs} args - Arguments to filter TempVoiceSystems to count.
     * @example
     * // Count the number of TempVoiceSystems
     * const count = await prisma.tempVoiceSystem.count({
     *   where: {
     *     // ... the filter for the TempVoiceSystems we want to count
     *   }
     * })
    **/
    count<T extends TempVoiceSystemCountArgs>(
      args?: Subset<T, TempVoiceSystemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TempVoiceSystemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TempVoiceSystem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceSystemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TempVoiceSystemAggregateArgs>(args: Subset<T, TempVoiceSystemAggregateArgs>): Prisma.PrismaPromise<GetTempVoiceSystemAggregateType<T>>

    /**
     * Group by TempVoiceSystem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceSystemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TempVoiceSystemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TempVoiceSystemGroupByArgs['orderBy'] }
        : { orderBy?: TempVoiceSystemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TempVoiceSystemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTempVoiceSystemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TempVoiceSystem model
   */
  readonly fields: TempVoiceSystemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TempVoiceSystem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TempVoiceSystemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    channels<T extends TempVoiceSystem$channelsArgs<ExtArgs> = {}>(args?: Subset<T, TempVoiceSystem$channelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempVoiceChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    joins<T extends TempVoiceSystem$joinsArgs<ExtArgs> = {}>(args?: Subset<T, TempVoiceSystem$joinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempVoiceJoinChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guild<T extends GuildConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildConfigDefaultArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    templates<T extends TempVoiceSystem$templatesArgs<ExtArgs> = {}>(args?: Subset<T, TempVoiceSystem$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempVoiceTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TempVoiceSystem model
   */
  interface TempVoiceSystemFieldRefs {
    readonly id: FieldRef<"TempVoiceSystem", 'String'>
    readonly guildId: FieldRef<"TempVoiceSystem", 'String'>
    readonly name: FieldRef<"TempVoiceSystem", 'String'>
    readonly categoryId: FieldRef<"TempVoiceSystem", 'String'>
    readonly enabled: FieldRef<"TempVoiceSystem", 'Boolean'>
    readonly deleteDelay: FieldRef<"TempVoiceSystem", 'Int'>
    readonly createdAt: FieldRef<"TempVoiceSystem", 'DateTime'>
    readonly updatedAt: FieldRef<"TempVoiceSystem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TempVoiceSystem findUnique
   */
  export type TempVoiceSystemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceSystem
     */
    select?: TempVoiceSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceSystem
     */
    omit?: TempVoiceSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceSystemInclude<ExtArgs> | null
    /**
     * Filter, which TempVoiceSystem to fetch.
     */
    where: TempVoiceSystemWhereUniqueInput
  }

  /**
   * TempVoiceSystem findUniqueOrThrow
   */
  export type TempVoiceSystemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceSystem
     */
    select?: TempVoiceSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceSystem
     */
    omit?: TempVoiceSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceSystemInclude<ExtArgs> | null
    /**
     * Filter, which TempVoiceSystem to fetch.
     */
    where: TempVoiceSystemWhereUniqueInput
  }

  /**
   * TempVoiceSystem findFirst
   */
  export type TempVoiceSystemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceSystem
     */
    select?: TempVoiceSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceSystem
     */
    omit?: TempVoiceSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceSystemInclude<ExtArgs> | null
    /**
     * Filter, which TempVoiceSystem to fetch.
     */
    where?: TempVoiceSystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempVoiceSystems to fetch.
     */
    orderBy?: TempVoiceSystemOrderByWithRelationInput | TempVoiceSystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempVoiceSystems.
     */
    cursor?: TempVoiceSystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempVoiceSystems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempVoiceSystems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempVoiceSystems.
     */
    distinct?: TempVoiceSystemScalarFieldEnum | TempVoiceSystemScalarFieldEnum[]
  }

  /**
   * TempVoiceSystem findFirstOrThrow
   */
  export type TempVoiceSystemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceSystem
     */
    select?: TempVoiceSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceSystem
     */
    omit?: TempVoiceSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceSystemInclude<ExtArgs> | null
    /**
     * Filter, which TempVoiceSystem to fetch.
     */
    where?: TempVoiceSystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempVoiceSystems to fetch.
     */
    orderBy?: TempVoiceSystemOrderByWithRelationInput | TempVoiceSystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempVoiceSystems.
     */
    cursor?: TempVoiceSystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempVoiceSystems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempVoiceSystems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempVoiceSystems.
     */
    distinct?: TempVoiceSystemScalarFieldEnum | TempVoiceSystemScalarFieldEnum[]
  }

  /**
   * TempVoiceSystem findMany
   */
  export type TempVoiceSystemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceSystem
     */
    select?: TempVoiceSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceSystem
     */
    omit?: TempVoiceSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceSystemInclude<ExtArgs> | null
    /**
     * Filter, which TempVoiceSystems to fetch.
     */
    where?: TempVoiceSystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempVoiceSystems to fetch.
     */
    orderBy?: TempVoiceSystemOrderByWithRelationInput | TempVoiceSystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TempVoiceSystems.
     */
    cursor?: TempVoiceSystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempVoiceSystems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempVoiceSystems.
     */
    skip?: number
    distinct?: TempVoiceSystemScalarFieldEnum | TempVoiceSystemScalarFieldEnum[]
  }

  /**
   * TempVoiceSystem create
   */
  export type TempVoiceSystemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceSystem
     */
    select?: TempVoiceSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceSystem
     */
    omit?: TempVoiceSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceSystemInclude<ExtArgs> | null
    /**
     * The data needed to create a TempVoiceSystem.
     */
    data: XOR<TempVoiceSystemCreateInput, TempVoiceSystemUncheckedCreateInput>
  }

  /**
   * TempVoiceSystem createMany
   */
  export type TempVoiceSystemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TempVoiceSystems.
     */
    data: TempVoiceSystemCreateManyInput | TempVoiceSystemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TempVoiceSystem createManyAndReturn
   */
  export type TempVoiceSystemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceSystem
     */
    select?: TempVoiceSystemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceSystem
     */
    omit?: TempVoiceSystemOmit<ExtArgs> | null
    /**
     * The data used to create many TempVoiceSystems.
     */
    data: TempVoiceSystemCreateManyInput | TempVoiceSystemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceSystemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TempVoiceSystem update
   */
  export type TempVoiceSystemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceSystem
     */
    select?: TempVoiceSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceSystem
     */
    omit?: TempVoiceSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceSystemInclude<ExtArgs> | null
    /**
     * The data needed to update a TempVoiceSystem.
     */
    data: XOR<TempVoiceSystemUpdateInput, TempVoiceSystemUncheckedUpdateInput>
    /**
     * Choose, which TempVoiceSystem to update.
     */
    where: TempVoiceSystemWhereUniqueInput
  }

  /**
   * TempVoiceSystem updateMany
   */
  export type TempVoiceSystemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TempVoiceSystems.
     */
    data: XOR<TempVoiceSystemUpdateManyMutationInput, TempVoiceSystemUncheckedUpdateManyInput>
    /**
     * Filter which TempVoiceSystems to update
     */
    where?: TempVoiceSystemWhereInput
    /**
     * Limit how many TempVoiceSystems to update.
     */
    limit?: number
  }

  /**
   * TempVoiceSystem updateManyAndReturn
   */
  export type TempVoiceSystemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceSystem
     */
    select?: TempVoiceSystemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceSystem
     */
    omit?: TempVoiceSystemOmit<ExtArgs> | null
    /**
     * The data used to update TempVoiceSystems.
     */
    data: XOR<TempVoiceSystemUpdateManyMutationInput, TempVoiceSystemUncheckedUpdateManyInput>
    /**
     * Filter which TempVoiceSystems to update
     */
    where?: TempVoiceSystemWhereInput
    /**
     * Limit how many TempVoiceSystems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceSystemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TempVoiceSystem upsert
   */
  export type TempVoiceSystemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceSystem
     */
    select?: TempVoiceSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceSystem
     */
    omit?: TempVoiceSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceSystemInclude<ExtArgs> | null
    /**
     * The filter to search for the TempVoiceSystem to update in case it exists.
     */
    where: TempVoiceSystemWhereUniqueInput
    /**
     * In case the TempVoiceSystem found by the `where` argument doesn't exist, create a new TempVoiceSystem with this data.
     */
    create: XOR<TempVoiceSystemCreateInput, TempVoiceSystemUncheckedCreateInput>
    /**
     * In case the TempVoiceSystem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TempVoiceSystemUpdateInput, TempVoiceSystemUncheckedUpdateInput>
  }

  /**
   * TempVoiceSystem delete
   */
  export type TempVoiceSystemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceSystem
     */
    select?: TempVoiceSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceSystem
     */
    omit?: TempVoiceSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceSystemInclude<ExtArgs> | null
    /**
     * Filter which TempVoiceSystem to delete.
     */
    where: TempVoiceSystemWhereUniqueInput
  }

  /**
   * TempVoiceSystem deleteMany
   */
  export type TempVoiceSystemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TempVoiceSystems to delete
     */
    where?: TempVoiceSystemWhereInput
    /**
     * Limit how many TempVoiceSystems to delete.
     */
    limit?: number
  }

  /**
   * TempVoiceSystem.channels
   */
  export type TempVoiceSystem$channelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceChannel
     */
    select?: TempVoiceChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceChannel
     */
    omit?: TempVoiceChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceChannelInclude<ExtArgs> | null
    where?: TempVoiceChannelWhereInput
    orderBy?: TempVoiceChannelOrderByWithRelationInput | TempVoiceChannelOrderByWithRelationInput[]
    cursor?: TempVoiceChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TempVoiceChannelScalarFieldEnum | TempVoiceChannelScalarFieldEnum[]
  }

  /**
   * TempVoiceSystem.joins
   */
  export type TempVoiceSystem$joinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceJoinChannel
     */
    select?: TempVoiceJoinChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceJoinChannel
     */
    omit?: TempVoiceJoinChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceJoinChannelInclude<ExtArgs> | null
    where?: TempVoiceJoinChannelWhereInput
    orderBy?: TempVoiceJoinChannelOrderByWithRelationInput | TempVoiceJoinChannelOrderByWithRelationInput[]
    cursor?: TempVoiceJoinChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TempVoiceJoinChannelScalarFieldEnum | TempVoiceJoinChannelScalarFieldEnum[]
  }

  /**
   * TempVoiceSystem.templates
   */
  export type TempVoiceSystem$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceTemplate
     */
    select?: TempVoiceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceTemplate
     */
    omit?: TempVoiceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceTemplateInclude<ExtArgs> | null
    where?: TempVoiceTemplateWhereInput
    orderBy?: TempVoiceTemplateOrderByWithRelationInput | TempVoiceTemplateOrderByWithRelationInput[]
    cursor?: TempVoiceTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TempVoiceTemplateScalarFieldEnum | TempVoiceTemplateScalarFieldEnum[]
  }

  /**
   * TempVoiceSystem without action
   */
  export type TempVoiceSystemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceSystem
     */
    select?: TempVoiceSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceSystem
     */
    omit?: TempVoiceSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceSystemInclude<ExtArgs> | null
  }


  /**
   * Model TempVoiceJoinChannel
   */

  export type AggregateTempVoiceJoinChannel = {
    _count: TempVoiceJoinChannelCountAggregateOutputType | null
    _min: TempVoiceJoinChannelMinAggregateOutputType | null
    _max: TempVoiceJoinChannelMaxAggregateOutputType | null
  }

  export type TempVoiceJoinChannelMinAggregateOutputType = {
    id: string | null
    channelId: string | null
    templateType: $Enums.TempVoiceType | null
    createdAt: Date | null
    updatedAt: Date | null
    systemId: string | null
  }

  export type TempVoiceJoinChannelMaxAggregateOutputType = {
    id: string | null
    channelId: string | null
    templateType: $Enums.TempVoiceType | null
    createdAt: Date | null
    updatedAt: Date | null
    systemId: string | null
  }

  export type TempVoiceJoinChannelCountAggregateOutputType = {
    id: number
    channelId: number
    templateType: number
    createdAt: number
    updatedAt: number
    systemId: number
    _all: number
  }


  export type TempVoiceJoinChannelMinAggregateInputType = {
    id?: true
    channelId?: true
    templateType?: true
    createdAt?: true
    updatedAt?: true
    systemId?: true
  }

  export type TempVoiceJoinChannelMaxAggregateInputType = {
    id?: true
    channelId?: true
    templateType?: true
    createdAt?: true
    updatedAt?: true
    systemId?: true
  }

  export type TempVoiceJoinChannelCountAggregateInputType = {
    id?: true
    channelId?: true
    templateType?: true
    createdAt?: true
    updatedAt?: true
    systemId?: true
    _all?: true
  }

  export type TempVoiceJoinChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TempVoiceJoinChannel to aggregate.
     */
    where?: TempVoiceJoinChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempVoiceJoinChannels to fetch.
     */
    orderBy?: TempVoiceJoinChannelOrderByWithRelationInput | TempVoiceJoinChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TempVoiceJoinChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempVoiceJoinChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempVoiceJoinChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TempVoiceJoinChannels
    **/
    _count?: true | TempVoiceJoinChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TempVoiceJoinChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TempVoiceJoinChannelMaxAggregateInputType
  }

  export type GetTempVoiceJoinChannelAggregateType<T extends TempVoiceJoinChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateTempVoiceJoinChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTempVoiceJoinChannel[P]>
      : GetScalarType<T[P], AggregateTempVoiceJoinChannel[P]>
  }




  export type TempVoiceJoinChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempVoiceJoinChannelWhereInput
    orderBy?: TempVoiceJoinChannelOrderByWithAggregationInput | TempVoiceJoinChannelOrderByWithAggregationInput[]
    by: TempVoiceJoinChannelScalarFieldEnum[] | TempVoiceJoinChannelScalarFieldEnum
    having?: TempVoiceJoinChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TempVoiceJoinChannelCountAggregateInputType | true
    _min?: TempVoiceJoinChannelMinAggregateInputType
    _max?: TempVoiceJoinChannelMaxAggregateInputType
  }

  export type TempVoiceJoinChannelGroupByOutputType = {
    id: string
    channelId: string
    templateType: $Enums.TempVoiceType
    createdAt: Date
    updatedAt: Date
    systemId: string
    _count: TempVoiceJoinChannelCountAggregateOutputType | null
    _min: TempVoiceJoinChannelMinAggregateOutputType | null
    _max: TempVoiceJoinChannelMaxAggregateOutputType | null
  }

  type GetTempVoiceJoinChannelGroupByPayload<T extends TempVoiceJoinChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TempVoiceJoinChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TempVoiceJoinChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TempVoiceJoinChannelGroupByOutputType[P]>
            : GetScalarType<T[P], TempVoiceJoinChannelGroupByOutputType[P]>
        }
      >
    >


  export type TempVoiceJoinChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    templateType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    systemId?: boolean
    system?: boolean | TempVoiceSystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tempVoiceJoinChannel"]>

  export type TempVoiceJoinChannelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    templateType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    systemId?: boolean
    system?: boolean | TempVoiceSystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tempVoiceJoinChannel"]>

  export type TempVoiceJoinChannelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    templateType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    systemId?: boolean
    system?: boolean | TempVoiceSystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tempVoiceJoinChannel"]>

  export type TempVoiceJoinChannelSelectScalar = {
    id?: boolean
    channelId?: boolean
    templateType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    systemId?: boolean
  }

  export type TempVoiceJoinChannelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "channelId" | "templateType" | "createdAt" | "updatedAt" | "systemId", ExtArgs["result"]["tempVoiceJoinChannel"]>
  export type TempVoiceJoinChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    system?: boolean | TempVoiceSystemDefaultArgs<ExtArgs>
  }
  export type TempVoiceJoinChannelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    system?: boolean | TempVoiceSystemDefaultArgs<ExtArgs>
  }
  export type TempVoiceJoinChannelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    system?: boolean | TempVoiceSystemDefaultArgs<ExtArgs>
  }

  export type $TempVoiceJoinChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TempVoiceJoinChannel"
    objects: {
      system: Prisma.$TempVoiceSystemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      channelId: string
      templateType: $Enums.TempVoiceType
      createdAt: Date
      updatedAt: Date
      systemId: string
    }, ExtArgs["result"]["tempVoiceJoinChannel"]>
    composites: {}
  }

  type TempVoiceJoinChannelGetPayload<S extends boolean | null | undefined | TempVoiceJoinChannelDefaultArgs> = $Result.GetResult<Prisma.$TempVoiceJoinChannelPayload, S>

  type TempVoiceJoinChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TempVoiceJoinChannelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TempVoiceJoinChannelCountAggregateInputType | true
    }

  export interface TempVoiceJoinChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TempVoiceJoinChannel'], meta: { name: 'TempVoiceJoinChannel' } }
    /**
     * Find zero or one TempVoiceJoinChannel that matches the filter.
     * @param {TempVoiceJoinChannelFindUniqueArgs} args - Arguments to find a TempVoiceJoinChannel
     * @example
     * // Get one TempVoiceJoinChannel
     * const tempVoiceJoinChannel = await prisma.tempVoiceJoinChannel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TempVoiceJoinChannelFindUniqueArgs>(args: SelectSubset<T, TempVoiceJoinChannelFindUniqueArgs<ExtArgs>>): Prisma__TempVoiceJoinChannelClient<$Result.GetResult<Prisma.$TempVoiceJoinChannelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TempVoiceJoinChannel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TempVoiceJoinChannelFindUniqueOrThrowArgs} args - Arguments to find a TempVoiceJoinChannel
     * @example
     * // Get one TempVoiceJoinChannel
     * const tempVoiceJoinChannel = await prisma.tempVoiceJoinChannel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TempVoiceJoinChannelFindUniqueOrThrowArgs>(args: SelectSubset<T, TempVoiceJoinChannelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TempVoiceJoinChannelClient<$Result.GetResult<Prisma.$TempVoiceJoinChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TempVoiceJoinChannel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceJoinChannelFindFirstArgs} args - Arguments to find a TempVoiceJoinChannel
     * @example
     * // Get one TempVoiceJoinChannel
     * const tempVoiceJoinChannel = await prisma.tempVoiceJoinChannel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TempVoiceJoinChannelFindFirstArgs>(args?: SelectSubset<T, TempVoiceJoinChannelFindFirstArgs<ExtArgs>>): Prisma__TempVoiceJoinChannelClient<$Result.GetResult<Prisma.$TempVoiceJoinChannelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TempVoiceJoinChannel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceJoinChannelFindFirstOrThrowArgs} args - Arguments to find a TempVoiceJoinChannel
     * @example
     * // Get one TempVoiceJoinChannel
     * const tempVoiceJoinChannel = await prisma.tempVoiceJoinChannel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TempVoiceJoinChannelFindFirstOrThrowArgs>(args?: SelectSubset<T, TempVoiceJoinChannelFindFirstOrThrowArgs<ExtArgs>>): Prisma__TempVoiceJoinChannelClient<$Result.GetResult<Prisma.$TempVoiceJoinChannelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TempVoiceJoinChannels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceJoinChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TempVoiceJoinChannels
     * const tempVoiceJoinChannels = await prisma.tempVoiceJoinChannel.findMany()
     * 
     * // Get first 10 TempVoiceJoinChannels
     * const tempVoiceJoinChannels = await prisma.tempVoiceJoinChannel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tempVoiceJoinChannelWithIdOnly = await prisma.tempVoiceJoinChannel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TempVoiceJoinChannelFindManyArgs>(args?: SelectSubset<T, TempVoiceJoinChannelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempVoiceJoinChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TempVoiceJoinChannel.
     * @param {TempVoiceJoinChannelCreateArgs} args - Arguments to create a TempVoiceJoinChannel.
     * @example
     * // Create one TempVoiceJoinChannel
     * const TempVoiceJoinChannel = await prisma.tempVoiceJoinChannel.create({
     *   data: {
     *     // ... data to create a TempVoiceJoinChannel
     *   }
     * })
     * 
     */
    create<T extends TempVoiceJoinChannelCreateArgs>(args: SelectSubset<T, TempVoiceJoinChannelCreateArgs<ExtArgs>>): Prisma__TempVoiceJoinChannelClient<$Result.GetResult<Prisma.$TempVoiceJoinChannelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TempVoiceJoinChannels.
     * @param {TempVoiceJoinChannelCreateManyArgs} args - Arguments to create many TempVoiceJoinChannels.
     * @example
     * // Create many TempVoiceJoinChannels
     * const tempVoiceJoinChannel = await prisma.tempVoiceJoinChannel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TempVoiceJoinChannelCreateManyArgs>(args?: SelectSubset<T, TempVoiceJoinChannelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TempVoiceJoinChannels and returns the data saved in the database.
     * @param {TempVoiceJoinChannelCreateManyAndReturnArgs} args - Arguments to create many TempVoiceJoinChannels.
     * @example
     * // Create many TempVoiceJoinChannels
     * const tempVoiceJoinChannel = await prisma.tempVoiceJoinChannel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TempVoiceJoinChannels and only return the `id`
     * const tempVoiceJoinChannelWithIdOnly = await prisma.tempVoiceJoinChannel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TempVoiceJoinChannelCreateManyAndReturnArgs>(args?: SelectSubset<T, TempVoiceJoinChannelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempVoiceJoinChannelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TempVoiceJoinChannel.
     * @param {TempVoiceJoinChannelDeleteArgs} args - Arguments to delete one TempVoiceJoinChannel.
     * @example
     * // Delete one TempVoiceJoinChannel
     * const TempVoiceJoinChannel = await prisma.tempVoiceJoinChannel.delete({
     *   where: {
     *     // ... filter to delete one TempVoiceJoinChannel
     *   }
     * })
     * 
     */
    delete<T extends TempVoiceJoinChannelDeleteArgs>(args: SelectSubset<T, TempVoiceJoinChannelDeleteArgs<ExtArgs>>): Prisma__TempVoiceJoinChannelClient<$Result.GetResult<Prisma.$TempVoiceJoinChannelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TempVoiceJoinChannel.
     * @param {TempVoiceJoinChannelUpdateArgs} args - Arguments to update one TempVoiceJoinChannel.
     * @example
     * // Update one TempVoiceJoinChannel
     * const tempVoiceJoinChannel = await prisma.tempVoiceJoinChannel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TempVoiceJoinChannelUpdateArgs>(args: SelectSubset<T, TempVoiceJoinChannelUpdateArgs<ExtArgs>>): Prisma__TempVoiceJoinChannelClient<$Result.GetResult<Prisma.$TempVoiceJoinChannelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TempVoiceJoinChannels.
     * @param {TempVoiceJoinChannelDeleteManyArgs} args - Arguments to filter TempVoiceJoinChannels to delete.
     * @example
     * // Delete a few TempVoiceJoinChannels
     * const { count } = await prisma.tempVoiceJoinChannel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TempVoiceJoinChannelDeleteManyArgs>(args?: SelectSubset<T, TempVoiceJoinChannelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TempVoiceJoinChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceJoinChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TempVoiceJoinChannels
     * const tempVoiceJoinChannel = await prisma.tempVoiceJoinChannel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TempVoiceJoinChannelUpdateManyArgs>(args: SelectSubset<T, TempVoiceJoinChannelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TempVoiceJoinChannels and returns the data updated in the database.
     * @param {TempVoiceJoinChannelUpdateManyAndReturnArgs} args - Arguments to update many TempVoiceJoinChannels.
     * @example
     * // Update many TempVoiceJoinChannels
     * const tempVoiceJoinChannel = await prisma.tempVoiceJoinChannel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TempVoiceJoinChannels and only return the `id`
     * const tempVoiceJoinChannelWithIdOnly = await prisma.tempVoiceJoinChannel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TempVoiceJoinChannelUpdateManyAndReturnArgs>(args: SelectSubset<T, TempVoiceJoinChannelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempVoiceJoinChannelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TempVoiceJoinChannel.
     * @param {TempVoiceJoinChannelUpsertArgs} args - Arguments to update or create a TempVoiceJoinChannel.
     * @example
     * // Update or create a TempVoiceJoinChannel
     * const tempVoiceJoinChannel = await prisma.tempVoiceJoinChannel.upsert({
     *   create: {
     *     // ... data to create a TempVoiceJoinChannel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TempVoiceJoinChannel we want to update
     *   }
     * })
     */
    upsert<T extends TempVoiceJoinChannelUpsertArgs>(args: SelectSubset<T, TempVoiceJoinChannelUpsertArgs<ExtArgs>>): Prisma__TempVoiceJoinChannelClient<$Result.GetResult<Prisma.$TempVoiceJoinChannelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TempVoiceJoinChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceJoinChannelCountArgs} args - Arguments to filter TempVoiceJoinChannels to count.
     * @example
     * // Count the number of TempVoiceJoinChannels
     * const count = await prisma.tempVoiceJoinChannel.count({
     *   where: {
     *     // ... the filter for the TempVoiceJoinChannels we want to count
     *   }
     * })
    **/
    count<T extends TempVoiceJoinChannelCountArgs>(
      args?: Subset<T, TempVoiceJoinChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TempVoiceJoinChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TempVoiceJoinChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceJoinChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TempVoiceJoinChannelAggregateArgs>(args: Subset<T, TempVoiceJoinChannelAggregateArgs>): Prisma.PrismaPromise<GetTempVoiceJoinChannelAggregateType<T>>

    /**
     * Group by TempVoiceJoinChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceJoinChannelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TempVoiceJoinChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TempVoiceJoinChannelGroupByArgs['orderBy'] }
        : { orderBy?: TempVoiceJoinChannelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TempVoiceJoinChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTempVoiceJoinChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TempVoiceJoinChannel model
   */
  readonly fields: TempVoiceJoinChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TempVoiceJoinChannel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TempVoiceJoinChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    system<T extends TempVoiceSystemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TempVoiceSystemDefaultArgs<ExtArgs>>): Prisma__TempVoiceSystemClient<$Result.GetResult<Prisma.$TempVoiceSystemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TempVoiceJoinChannel model
   */
  interface TempVoiceJoinChannelFieldRefs {
    readonly id: FieldRef<"TempVoiceJoinChannel", 'String'>
    readonly channelId: FieldRef<"TempVoiceJoinChannel", 'String'>
    readonly templateType: FieldRef<"TempVoiceJoinChannel", 'TempVoiceType'>
    readonly createdAt: FieldRef<"TempVoiceJoinChannel", 'DateTime'>
    readonly updatedAt: FieldRef<"TempVoiceJoinChannel", 'DateTime'>
    readonly systemId: FieldRef<"TempVoiceJoinChannel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TempVoiceJoinChannel findUnique
   */
  export type TempVoiceJoinChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceJoinChannel
     */
    select?: TempVoiceJoinChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceJoinChannel
     */
    omit?: TempVoiceJoinChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceJoinChannelInclude<ExtArgs> | null
    /**
     * Filter, which TempVoiceJoinChannel to fetch.
     */
    where: TempVoiceJoinChannelWhereUniqueInput
  }

  /**
   * TempVoiceJoinChannel findUniqueOrThrow
   */
  export type TempVoiceJoinChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceJoinChannel
     */
    select?: TempVoiceJoinChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceJoinChannel
     */
    omit?: TempVoiceJoinChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceJoinChannelInclude<ExtArgs> | null
    /**
     * Filter, which TempVoiceJoinChannel to fetch.
     */
    where: TempVoiceJoinChannelWhereUniqueInput
  }

  /**
   * TempVoiceJoinChannel findFirst
   */
  export type TempVoiceJoinChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceJoinChannel
     */
    select?: TempVoiceJoinChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceJoinChannel
     */
    omit?: TempVoiceJoinChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceJoinChannelInclude<ExtArgs> | null
    /**
     * Filter, which TempVoiceJoinChannel to fetch.
     */
    where?: TempVoiceJoinChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempVoiceJoinChannels to fetch.
     */
    orderBy?: TempVoiceJoinChannelOrderByWithRelationInput | TempVoiceJoinChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempVoiceJoinChannels.
     */
    cursor?: TempVoiceJoinChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempVoiceJoinChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempVoiceJoinChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempVoiceJoinChannels.
     */
    distinct?: TempVoiceJoinChannelScalarFieldEnum | TempVoiceJoinChannelScalarFieldEnum[]
  }

  /**
   * TempVoiceJoinChannel findFirstOrThrow
   */
  export type TempVoiceJoinChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceJoinChannel
     */
    select?: TempVoiceJoinChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceJoinChannel
     */
    omit?: TempVoiceJoinChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceJoinChannelInclude<ExtArgs> | null
    /**
     * Filter, which TempVoiceJoinChannel to fetch.
     */
    where?: TempVoiceJoinChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempVoiceJoinChannels to fetch.
     */
    orderBy?: TempVoiceJoinChannelOrderByWithRelationInput | TempVoiceJoinChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempVoiceJoinChannels.
     */
    cursor?: TempVoiceJoinChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempVoiceJoinChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempVoiceJoinChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempVoiceJoinChannels.
     */
    distinct?: TempVoiceJoinChannelScalarFieldEnum | TempVoiceJoinChannelScalarFieldEnum[]
  }

  /**
   * TempVoiceJoinChannel findMany
   */
  export type TempVoiceJoinChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceJoinChannel
     */
    select?: TempVoiceJoinChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceJoinChannel
     */
    omit?: TempVoiceJoinChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceJoinChannelInclude<ExtArgs> | null
    /**
     * Filter, which TempVoiceJoinChannels to fetch.
     */
    where?: TempVoiceJoinChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempVoiceJoinChannels to fetch.
     */
    orderBy?: TempVoiceJoinChannelOrderByWithRelationInput | TempVoiceJoinChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TempVoiceJoinChannels.
     */
    cursor?: TempVoiceJoinChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempVoiceJoinChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempVoiceJoinChannels.
     */
    skip?: number
    distinct?: TempVoiceJoinChannelScalarFieldEnum | TempVoiceJoinChannelScalarFieldEnum[]
  }

  /**
   * TempVoiceJoinChannel create
   */
  export type TempVoiceJoinChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceJoinChannel
     */
    select?: TempVoiceJoinChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceJoinChannel
     */
    omit?: TempVoiceJoinChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceJoinChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a TempVoiceJoinChannel.
     */
    data: XOR<TempVoiceJoinChannelCreateInput, TempVoiceJoinChannelUncheckedCreateInput>
  }

  /**
   * TempVoiceJoinChannel createMany
   */
  export type TempVoiceJoinChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TempVoiceJoinChannels.
     */
    data: TempVoiceJoinChannelCreateManyInput | TempVoiceJoinChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TempVoiceJoinChannel createManyAndReturn
   */
  export type TempVoiceJoinChannelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceJoinChannel
     */
    select?: TempVoiceJoinChannelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceJoinChannel
     */
    omit?: TempVoiceJoinChannelOmit<ExtArgs> | null
    /**
     * The data used to create many TempVoiceJoinChannels.
     */
    data: TempVoiceJoinChannelCreateManyInput | TempVoiceJoinChannelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceJoinChannelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TempVoiceJoinChannel update
   */
  export type TempVoiceJoinChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceJoinChannel
     */
    select?: TempVoiceJoinChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceJoinChannel
     */
    omit?: TempVoiceJoinChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceJoinChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a TempVoiceJoinChannel.
     */
    data: XOR<TempVoiceJoinChannelUpdateInput, TempVoiceJoinChannelUncheckedUpdateInput>
    /**
     * Choose, which TempVoiceJoinChannel to update.
     */
    where: TempVoiceJoinChannelWhereUniqueInput
  }

  /**
   * TempVoiceJoinChannel updateMany
   */
  export type TempVoiceJoinChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TempVoiceJoinChannels.
     */
    data: XOR<TempVoiceJoinChannelUpdateManyMutationInput, TempVoiceJoinChannelUncheckedUpdateManyInput>
    /**
     * Filter which TempVoiceJoinChannels to update
     */
    where?: TempVoiceJoinChannelWhereInput
    /**
     * Limit how many TempVoiceJoinChannels to update.
     */
    limit?: number
  }

  /**
   * TempVoiceJoinChannel updateManyAndReturn
   */
  export type TempVoiceJoinChannelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceJoinChannel
     */
    select?: TempVoiceJoinChannelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceJoinChannel
     */
    omit?: TempVoiceJoinChannelOmit<ExtArgs> | null
    /**
     * The data used to update TempVoiceJoinChannels.
     */
    data: XOR<TempVoiceJoinChannelUpdateManyMutationInput, TempVoiceJoinChannelUncheckedUpdateManyInput>
    /**
     * Filter which TempVoiceJoinChannels to update
     */
    where?: TempVoiceJoinChannelWhereInput
    /**
     * Limit how many TempVoiceJoinChannels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceJoinChannelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TempVoiceJoinChannel upsert
   */
  export type TempVoiceJoinChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceJoinChannel
     */
    select?: TempVoiceJoinChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceJoinChannel
     */
    omit?: TempVoiceJoinChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceJoinChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the TempVoiceJoinChannel to update in case it exists.
     */
    where: TempVoiceJoinChannelWhereUniqueInput
    /**
     * In case the TempVoiceJoinChannel found by the `where` argument doesn't exist, create a new TempVoiceJoinChannel with this data.
     */
    create: XOR<TempVoiceJoinChannelCreateInput, TempVoiceJoinChannelUncheckedCreateInput>
    /**
     * In case the TempVoiceJoinChannel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TempVoiceJoinChannelUpdateInput, TempVoiceJoinChannelUncheckedUpdateInput>
  }

  /**
   * TempVoiceJoinChannel delete
   */
  export type TempVoiceJoinChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceJoinChannel
     */
    select?: TempVoiceJoinChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceJoinChannel
     */
    omit?: TempVoiceJoinChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceJoinChannelInclude<ExtArgs> | null
    /**
     * Filter which TempVoiceJoinChannel to delete.
     */
    where: TempVoiceJoinChannelWhereUniqueInput
  }

  /**
   * TempVoiceJoinChannel deleteMany
   */
  export type TempVoiceJoinChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TempVoiceJoinChannels to delete
     */
    where?: TempVoiceJoinChannelWhereInput
    /**
     * Limit how many TempVoiceJoinChannels to delete.
     */
    limit?: number
  }

  /**
   * TempVoiceJoinChannel without action
   */
  export type TempVoiceJoinChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceJoinChannel
     */
    select?: TempVoiceJoinChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceJoinChannel
     */
    omit?: TempVoiceJoinChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceJoinChannelInclude<ExtArgs> | null
  }


  /**
   * Model TempVoiceTemplate
   */

  export type AggregateTempVoiceTemplate = {
    _count: TempVoiceTemplateCountAggregateOutputType | null
    _avg: TempVoiceTemplateAvgAggregateOutputType | null
    _sum: TempVoiceTemplateSumAggregateOutputType | null
    _min: TempVoiceTemplateMinAggregateOutputType | null
    _max: TempVoiceTemplateMaxAggregateOutputType | null
  }

  export type TempVoiceTemplateAvgAggregateOutputType = {
    userLimit: number | null
    bitrate: number | null
  }

  export type TempVoiceTemplateSumAggregateOutputType = {
    userLimit: number | null
    bitrate: number | null
  }

  export type TempVoiceTemplateMinAggregateOutputType = {
    id: string | null
    type: $Enums.TempVoiceType | null
    nameTemplate: string | null
    userLimit: number | null
    bitrate: number | null
    createdAt: Date | null
    updatedAt: Date | null
    systemId: string | null
  }

  export type TempVoiceTemplateMaxAggregateOutputType = {
    id: string | null
    type: $Enums.TempVoiceType | null
    nameTemplate: string | null
    userLimit: number | null
    bitrate: number | null
    createdAt: Date | null
    updatedAt: Date | null
    systemId: string | null
  }

  export type TempVoiceTemplateCountAggregateOutputType = {
    id: number
    type: number
    nameTemplate: number
    userLimit: number
    bitrate: number
    createdAt: number
    updatedAt: number
    systemId: number
    _all: number
  }


  export type TempVoiceTemplateAvgAggregateInputType = {
    userLimit?: true
    bitrate?: true
  }

  export type TempVoiceTemplateSumAggregateInputType = {
    userLimit?: true
    bitrate?: true
  }

  export type TempVoiceTemplateMinAggregateInputType = {
    id?: true
    type?: true
    nameTemplate?: true
    userLimit?: true
    bitrate?: true
    createdAt?: true
    updatedAt?: true
    systemId?: true
  }

  export type TempVoiceTemplateMaxAggregateInputType = {
    id?: true
    type?: true
    nameTemplate?: true
    userLimit?: true
    bitrate?: true
    createdAt?: true
    updatedAt?: true
    systemId?: true
  }

  export type TempVoiceTemplateCountAggregateInputType = {
    id?: true
    type?: true
    nameTemplate?: true
    userLimit?: true
    bitrate?: true
    createdAt?: true
    updatedAt?: true
    systemId?: true
    _all?: true
  }

  export type TempVoiceTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TempVoiceTemplate to aggregate.
     */
    where?: TempVoiceTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempVoiceTemplates to fetch.
     */
    orderBy?: TempVoiceTemplateOrderByWithRelationInput | TempVoiceTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TempVoiceTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempVoiceTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempVoiceTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TempVoiceTemplates
    **/
    _count?: true | TempVoiceTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TempVoiceTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TempVoiceTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TempVoiceTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TempVoiceTemplateMaxAggregateInputType
  }

  export type GetTempVoiceTemplateAggregateType<T extends TempVoiceTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTempVoiceTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTempVoiceTemplate[P]>
      : GetScalarType<T[P], AggregateTempVoiceTemplate[P]>
  }




  export type TempVoiceTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempVoiceTemplateWhereInput
    orderBy?: TempVoiceTemplateOrderByWithAggregationInput | TempVoiceTemplateOrderByWithAggregationInput[]
    by: TempVoiceTemplateScalarFieldEnum[] | TempVoiceTemplateScalarFieldEnum
    having?: TempVoiceTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TempVoiceTemplateCountAggregateInputType | true
    _avg?: TempVoiceTemplateAvgAggregateInputType
    _sum?: TempVoiceTemplateSumAggregateInputType
    _min?: TempVoiceTemplateMinAggregateInputType
    _max?: TempVoiceTemplateMaxAggregateInputType
  }

  export type TempVoiceTemplateGroupByOutputType = {
    id: string
    type: $Enums.TempVoiceType
    nameTemplate: string
    userLimit: number | null
    bitrate: number | null
    createdAt: Date
    updatedAt: Date
    systemId: string
    _count: TempVoiceTemplateCountAggregateOutputType | null
    _avg: TempVoiceTemplateAvgAggregateOutputType | null
    _sum: TempVoiceTemplateSumAggregateOutputType | null
    _min: TempVoiceTemplateMinAggregateOutputType | null
    _max: TempVoiceTemplateMaxAggregateOutputType | null
  }

  type GetTempVoiceTemplateGroupByPayload<T extends TempVoiceTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TempVoiceTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TempVoiceTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TempVoiceTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TempVoiceTemplateGroupByOutputType[P]>
        }
      >
    >


  export type TempVoiceTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    nameTemplate?: boolean
    userLimit?: boolean
    bitrate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    systemId?: boolean
    system?: boolean | TempVoiceSystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tempVoiceTemplate"]>

  export type TempVoiceTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    nameTemplate?: boolean
    userLimit?: boolean
    bitrate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    systemId?: boolean
    system?: boolean | TempVoiceSystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tempVoiceTemplate"]>

  export type TempVoiceTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    nameTemplate?: boolean
    userLimit?: boolean
    bitrate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    systemId?: boolean
    system?: boolean | TempVoiceSystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tempVoiceTemplate"]>

  export type TempVoiceTemplateSelectScalar = {
    id?: boolean
    type?: boolean
    nameTemplate?: boolean
    userLimit?: boolean
    bitrate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    systemId?: boolean
  }

  export type TempVoiceTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "nameTemplate" | "userLimit" | "bitrate" | "createdAt" | "updatedAt" | "systemId", ExtArgs["result"]["tempVoiceTemplate"]>
  export type TempVoiceTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    system?: boolean | TempVoiceSystemDefaultArgs<ExtArgs>
  }
  export type TempVoiceTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    system?: boolean | TempVoiceSystemDefaultArgs<ExtArgs>
  }
  export type TempVoiceTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    system?: boolean | TempVoiceSystemDefaultArgs<ExtArgs>
  }

  export type $TempVoiceTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TempVoiceTemplate"
    objects: {
      system: Prisma.$TempVoiceSystemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.TempVoiceType
      nameTemplate: string
      userLimit: number | null
      bitrate: number | null
      createdAt: Date
      updatedAt: Date
      systemId: string
    }, ExtArgs["result"]["tempVoiceTemplate"]>
    composites: {}
  }

  type TempVoiceTemplateGetPayload<S extends boolean | null | undefined | TempVoiceTemplateDefaultArgs> = $Result.GetResult<Prisma.$TempVoiceTemplatePayload, S>

  type TempVoiceTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TempVoiceTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TempVoiceTemplateCountAggregateInputType | true
    }

  export interface TempVoiceTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TempVoiceTemplate'], meta: { name: 'TempVoiceTemplate' } }
    /**
     * Find zero or one TempVoiceTemplate that matches the filter.
     * @param {TempVoiceTemplateFindUniqueArgs} args - Arguments to find a TempVoiceTemplate
     * @example
     * // Get one TempVoiceTemplate
     * const tempVoiceTemplate = await prisma.tempVoiceTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TempVoiceTemplateFindUniqueArgs>(args: SelectSubset<T, TempVoiceTemplateFindUniqueArgs<ExtArgs>>): Prisma__TempVoiceTemplateClient<$Result.GetResult<Prisma.$TempVoiceTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TempVoiceTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TempVoiceTemplateFindUniqueOrThrowArgs} args - Arguments to find a TempVoiceTemplate
     * @example
     * // Get one TempVoiceTemplate
     * const tempVoiceTemplate = await prisma.tempVoiceTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TempVoiceTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TempVoiceTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TempVoiceTemplateClient<$Result.GetResult<Prisma.$TempVoiceTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TempVoiceTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceTemplateFindFirstArgs} args - Arguments to find a TempVoiceTemplate
     * @example
     * // Get one TempVoiceTemplate
     * const tempVoiceTemplate = await prisma.tempVoiceTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TempVoiceTemplateFindFirstArgs>(args?: SelectSubset<T, TempVoiceTemplateFindFirstArgs<ExtArgs>>): Prisma__TempVoiceTemplateClient<$Result.GetResult<Prisma.$TempVoiceTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TempVoiceTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceTemplateFindFirstOrThrowArgs} args - Arguments to find a TempVoiceTemplate
     * @example
     * // Get one TempVoiceTemplate
     * const tempVoiceTemplate = await prisma.tempVoiceTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TempVoiceTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TempVoiceTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TempVoiceTemplateClient<$Result.GetResult<Prisma.$TempVoiceTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TempVoiceTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TempVoiceTemplates
     * const tempVoiceTemplates = await prisma.tempVoiceTemplate.findMany()
     * 
     * // Get first 10 TempVoiceTemplates
     * const tempVoiceTemplates = await prisma.tempVoiceTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tempVoiceTemplateWithIdOnly = await prisma.tempVoiceTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TempVoiceTemplateFindManyArgs>(args?: SelectSubset<T, TempVoiceTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempVoiceTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TempVoiceTemplate.
     * @param {TempVoiceTemplateCreateArgs} args - Arguments to create a TempVoiceTemplate.
     * @example
     * // Create one TempVoiceTemplate
     * const TempVoiceTemplate = await prisma.tempVoiceTemplate.create({
     *   data: {
     *     // ... data to create a TempVoiceTemplate
     *   }
     * })
     * 
     */
    create<T extends TempVoiceTemplateCreateArgs>(args: SelectSubset<T, TempVoiceTemplateCreateArgs<ExtArgs>>): Prisma__TempVoiceTemplateClient<$Result.GetResult<Prisma.$TempVoiceTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TempVoiceTemplates.
     * @param {TempVoiceTemplateCreateManyArgs} args - Arguments to create many TempVoiceTemplates.
     * @example
     * // Create many TempVoiceTemplates
     * const tempVoiceTemplate = await prisma.tempVoiceTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TempVoiceTemplateCreateManyArgs>(args?: SelectSubset<T, TempVoiceTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TempVoiceTemplates and returns the data saved in the database.
     * @param {TempVoiceTemplateCreateManyAndReturnArgs} args - Arguments to create many TempVoiceTemplates.
     * @example
     * // Create many TempVoiceTemplates
     * const tempVoiceTemplate = await prisma.tempVoiceTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TempVoiceTemplates and only return the `id`
     * const tempVoiceTemplateWithIdOnly = await prisma.tempVoiceTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TempVoiceTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TempVoiceTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempVoiceTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TempVoiceTemplate.
     * @param {TempVoiceTemplateDeleteArgs} args - Arguments to delete one TempVoiceTemplate.
     * @example
     * // Delete one TempVoiceTemplate
     * const TempVoiceTemplate = await prisma.tempVoiceTemplate.delete({
     *   where: {
     *     // ... filter to delete one TempVoiceTemplate
     *   }
     * })
     * 
     */
    delete<T extends TempVoiceTemplateDeleteArgs>(args: SelectSubset<T, TempVoiceTemplateDeleteArgs<ExtArgs>>): Prisma__TempVoiceTemplateClient<$Result.GetResult<Prisma.$TempVoiceTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TempVoiceTemplate.
     * @param {TempVoiceTemplateUpdateArgs} args - Arguments to update one TempVoiceTemplate.
     * @example
     * // Update one TempVoiceTemplate
     * const tempVoiceTemplate = await prisma.tempVoiceTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TempVoiceTemplateUpdateArgs>(args: SelectSubset<T, TempVoiceTemplateUpdateArgs<ExtArgs>>): Prisma__TempVoiceTemplateClient<$Result.GetResult<Prisma.$TempVoiceTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TempVoiceTemplates.
     * @param {TempVoiceTemplateDeleteManyArgs} args - Arguments to filter TempVoiceTemplates to delete.
     * @example
     * // Delete a few TempVoiceTemplates
     * const { count } = await prisma.tempVoiceTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TempVoiceTemplateDeleteManyArgs>(args?: SelectSubset<T, TempVoiceTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TempVoiceTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TempVoiceTemplates
     * const tempVoiceTemplate = await prisma.tempVoiceTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TempVoiceTemplateUpdateManyArgs>(args: SelectSubset<T, TempVoiceTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TempVoiceTemplates and returns the data updated in the database.
     * @param {TempVoiceTemplateUpdateManyAndReturnArgs} args - Arguments to update many TempVoiceTemplates.
     * @example
     * // Update many TempVoiceTemplates
     * const tempVoiceTemplate = await prisma.tempVoiceTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TempVoiceTemplates and only return the `id`
     * const tempVoiceTemplateWithIdOnly = await prisma.tempVoiceTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TempVoiceTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TempVoiceTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempVoiceTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TempVoiceTemplate.
     * @param {TempVoiceTemplateUpsertArgs} args - Arguments to update or create a TempVoiceTemplate.
     * @example
     * // Update or create a TempVoiceTemplate
     * const tempVoiceTemplate = await prisma.tempVoiceTemplate.upsert({
     *   create: {
     *     // ... data to create a TempVoiceTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TempVoiceTemplate we want to update
     *   }
     * })
     */
    upsert<T extends TempVoiceTemplateUpsertArgs>(args: SelectSubset<T, TempVoiceTemplateUpsertArgs<ExtArgs>>): Prisma__TempVoiceTemplateClient<$Result.GetResult<Prisma.$TempVoiceTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TempVoiceTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceTemplateCountArgs} args - Arguments to filter TempVoiceTemplates to count.
     * @example
     * // Count the number of TempVoiceTemplates
     * const count = await prisma.tempVoiceTemplate.count({
     *   where: {
     *     // ... the filter for the TempVoiceTemplates we want to count
     *   }
     * })
    **/
    count<T extends TempVoiceTemplateCountArgs>(
      args?: Subset<T, TempVoiceTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TempVoiceTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TempVoiceTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TempVoiceTemplateAggregateArgs>(args: Subset<T, TempVoiceTemplateAggregateArgs>): Prisma.PrismaPromise<GetTempVoiceTemplateAggregateType<T>>

    /**
     * Group by TempVoiceTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TempVoiceTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TempVoiceTemplateGroupByArgs['orderBy'] }
        : { orderBy?: TempVoiceTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TempVoiceTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTempVoiceTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TempVoiceTemplate model
   */
  readonly fields: TempVoiceTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TempVoiceTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TempVoiceTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    system<T extends TempVoiceSystemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TempVoiceSystemDefaultArgs<ExtArgs>>): Prisma__TempVoiceSystemClient<$Result.GetResult<Prisma.$TempVoiceSystemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TempVoiceTemplate model
   */
  interface TempVoiceTemplateFieldRefs {
    readonly id: FieldRef<"TempVoiceTemplate", 'String'>
    readonly type: FieldRef<"TempVoiceTemplate", 'TempVoiceType'>
    readonly nameTemplate: FieldRef<"TempVoiceTemplate", 'String'>
    readonly userLimit: FieldRef<"TempVoiceTemplate", 'Int'>
    readonly bitrate: FieldRef<"TempVoiceTemplate", 'Int'>
    readonly createdAt: FieldRef<"TempVoiceTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"TempVoiceTemplate", 'DateTime'>
    readonly systemId: FieldRef<"TempVoiceTemplate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TempVoiceTemplate findUnique
   */
  export type TempVoiceTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceTemplate
     */
    select?: TempVoiceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceTemplate
     */
    omit?: TempVoiceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceTemplateInclude<ExtArgs> | null
    /**
     * Filter, which TempVoiceTemplate to fetch.
     */
    where: TempVoiceTemplateWhereUniqueInput
  }

  /**
   * TempVoiceTemplate findUniqueOrThrow
   */
  export type TempVoiceTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceTemplate
     */
    select?: TempVoiceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceTemplate
     */
    omit?: TempVoiceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceTemplateInclude<ExtArgs> | null
    /**
     * Filter, which TempVoiceTemplate to fetch.
     */
    where: TempVoiceTemplateWhereUniqueInput
  }

  /**
   * TempVoiceTemplate findFirst
   */
  export type TempVoiceTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceTemplate
     */
    select?: TempVoiceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceTemplate
     */
    omit?: TempVoiceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceTemplateInclude<ExtArgs> | null
    /**
     * Filter, which TempVoiceTemplate to fetch.
     */
    where?: TempVoiceTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempVoiceTemplates to fetch.
     */
    orderBy?: TempVoiceTemplateOrderByWithRelationInput | TempVoiceTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempVoiceTemplates.
     */
    cursor?: TempVoiceTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempVoiceTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempVoiceTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempVoiceTemplates.
     */
    distinct?: TempVoiceTemplateScalarFieldEnum | TempVoiceTemplateScalarFieldEnum[]
  }

  /**
   * TempVoiceTemplate findFirstOrThrow
   */
  export type TempVoiceTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceTemplate
     */
    select?: TempVoiceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceTemplate
     */
    omit?: TempVoiceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceTemplateInclude<ExtArgs> | null
    /**
     * Filter, which TempVoiceTemplate to fetch.
     */
    where?: TempVoiceTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempVoiceTemplates to fetch.
     */
    orderBy?: TempVoiceTemplateOrderByWithRelationInput | TempVoiceTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempVoiceTemplates.
     */
    cursor?: TempVoiceTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempVoiceTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempVoiceTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempVoiceTemplates.
     */
    distinct?: TempVoiceTemplateScalarFieldEnum | TempVoiceTemplateScalarFieldEnum[]
  }

  /**
   * TempVoiceTemplate findMany
   */
  export type TempVoiceTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceTemplate
     */
    select?: TempVoiceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceTemplate
     */
    omit?: TempVoiceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceTemplateInclude<ExtArgs> | null
    /**
     * Filter, which TempVoiceTemplates to fetch.
     */
    where?: TempVoiceTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempVoiceTemplates to fetch.
     */
    orderBy?: TempVoiceTemplateOrderByWithRelationInput | TempVoiceTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TempVoiceTemplates.
     */
    cursor?: TempVoiceTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempVoiceTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempVoiceTemplates.
     */
    skip?: number
    distinct?: TempVoiceTemplateScalarFieldEnum | TempVoiceTemplateScalarFieldEnum[]
  }

  /**
   * TempVoiceTemplate create
   */
  export type TempVoiceTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceTemplate
     */
    select?: TempVoiceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceTemplate
     */
    omit?: TempVoiceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a TempVoiceTemplate.
     */
    data: XOR<TempVoiceTemplateCreateInput, TempVoiceTemplateUncheckedCreateInput>
  }

  /**
   * TempVoiceTemplate createMany
   */
  export type TempVoiceTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TempVoiceTemplates.
     */
    data: TempVoiceTemplateCreateManyInput | TempVoiceTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TempVoiceTemplate createManyAndReturn
   */
  export type TempVoiceTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceTemplate
     */
    select?: TempVoiceTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceTemplate
     */
    omit?: TempVoiceTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many TempVoiceTemplates.
     */
    data: TempVoiceTemplateCreateManyInput | TempVoiceTemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TempVoiceTemplate update
   */
  export type TempVoiceTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceTemplate
     */
    select?: TempVoiceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceTemplate
     */
    omit?: TempVoiceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a TempVoiceTemplate.
     */
    data: XOR<TempVoiceTemplateUpdateInput, TempVoiceTemplateUncheckedUpdateInput>
    /**
     * Choose, which TempVoiceTemplate to update.
     */
    where: TempVoiceTemplateWhereUniqueInput
  }

  /**
   * TempVoiceTemplate updateMany
   */
  export type TempVoiceTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TempVoiceTemplates.
     */
    data: XOR<TempVoiceTemplateUpdateManyMutationInput, TempVoiceTemplateUncheckedUpdateManyInput>
    /**
     * Filter which TempVoiceTemplates to update
     */
    where?: TempVoiceTemplateWhereInput
    /**
     * Limit how many TempVoiceTemplates to update.
     */
    limit?: number
  }

  /**
   * TempVoiceTemplate updateManyAndReturn
   */
  export type TempVoiceTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceTemplate
     */
    select?: TempVoiceTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceTemplate
     */
    omit?: TempVoiceTemplateOmit<ExtArgs> | null
    /**
     * The data used to update TempVoiceTemplates.
     */
    data: XOR<TempVoiceTemplateUpdateManyMutationInput, TempVoiceTemplateUncheckedUpdateManyInput>
    /**
     * Filter which TempVoiceTemplates to update
     */
    where?: TempVoiceTemplateWhereInput
    /**
     * Limit how many TempVoiceTemplates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceTemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TempVoiceTemplate upsert
   */
  export type TempVoiceTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceTemplate
     */
    select?: TempVoiceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceTemplate
     */
    omit?: TempVoiceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the TempVoiceTemplate to update in case it exists.
     */
    where: TempVoiceTemplateWhereUniqueInput
    /**
     * In case the TempVoiceTemplate found by the `where` argument doesn't exist, create a new TempVoiceTemplate with this data.
     */
    create: XOR<TempVoiceTemplateCreateInput, TempVoiceTemplateUncheckedCreateInput>
    /**
     * In case the TempVoiceTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TempVoiceTemplateUpdateInput, TempVoiceTemplateUncheckedUpdateInput>
  }

  /**
   * TempVoiceTemplate delete
   */
  export type TempVoiceTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceTemplate
     */
    select?: TempVoiceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceTemplate
     */
    omit?: TempVoiceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceTemplateInclude<ExtArgs> | null
    /**
     * Filter which TempVoiceTemplate to delete.
     */
    where: TempVoiceTemplateWhereUniqueInput
  }

  /**
   * TempVoiceTemplate deleteMany
   */
  export type TempVoiceTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TempVoiceTemplates to delete
     */
    where?: TempVoiceTemplateWhereInput
    /**
     * Limit how many TempVoiceTemplates to delete.
     */
    limit?: number
  }

  /**
   * TempVoiceTemplate without action
   */
  export type TempVoiceTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceTemplate
     */
    select?: TempVoiceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceTemplate
     */
    omit?: TempVoiceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceTemplateInclude<ExtArgs> | null
  }


  /**
   * Model TempVoiceChannel
   */

  export type AggregateTempVoiceChannel = {
    _count: TempVoiceChannelCountAggregateOutputType | null
    _min: TempVoiceChannelMinAggregateOutputType | null
    _max: TempVoiceChannelMaxAggregateOutputType | null
  }

  export type TempVoiceChannelMinAggregateOutputType = {
    id: string | null
    systemId: string | null
    channelId: string | null
    ownerId: string | null
    templateType: $Enums.TempVoiceType | null
    createdAt: Date | null
    lastActiveAt: Date | null
  }

  export type TempVoiceChannelMaxAggregateOutputType = {
    id: string | null
    systemId: string | null
    channelId: string | null
    ownerId: string | null
    templateType: $Enums.TempVoiceType | null
    createdAt: Date | null
    lastActiveAt: Date | null
  }

  export type TempVoiceChannelCountAggregateOutputType = {
    id: number
    systemId: number
    channelId: number
    ownerId: number
    templateType: number
    createdAt: number
    lastActiveAt: number
    _all: number
  }


  export type TempVoiceChannelMinAggregateInputType = {
    id?: true
    systemId?: true
    channelId?: true
    ownerId?: true
    templateType?: true
    createdAt?: true
    lastActiveAt?: true
  }

  export type TempVoiceChannelMaxAggregateInputType = {
    id?: true
    systemId?: true
    channelId?: true
    ownerId?: true
    templateType?: true
    createdAt?: true
    lastActiveAt?: true
  }

  export type TempVoiceChannelCountAggregateInputType = {
    id?: true
    systemId?: true
    channelId?: true
    ownerId?: true
    templateType?: true
    createdAt?: true
    lastActiveAt?: true
    _all?: true
  }

  export type TempVoiceChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TempVoiceChannel to aggregate.
     */
    where?: TempVoiceChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempVoiceChannels to fetch.
     */
    orderBy?: TempVoiceChannelOrderByWithRelationInput | TempVoiceChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TempVoiceChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempVoiceChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempVoiceChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TempVoiceChannels
    **/
    _count?: true | TempVoiceChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TempVoiceChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TempVoiceChannelMaxAggregateInputType
  }

  export type GetTempVoiceChannelAggregateType<T extends TempVoiceChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateTempVoiceChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTempVoiceChannel[P]>
      : GetScalarType<T[P], AggregateTempVoiceChannel[P]>
  }




  export type TempVoiceChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempVoiceChannelWhereInput
    orderBy?: TempVoiceChannelOrderByWithAggregationInput | TempVoiceChannelOrderByWithAggregationInput[]
    by: TempVoiceChannelScalarFieldEnum[] | TempVoiceChannelScalarFieldEnum
    having?: TempVoiceChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TempVoiceChannelCountAggregateInputType | true
    _min?: TempVoiceChannelMinAggregateInputType
    _max?: TempVoiceChannelMaxAggregateInputType
  }

  export type TempVoiceChannelGroupByOutputType = {
    id: string
    systemId: string
    channelId: string
    ownerId: string
    templateType: $Enums.TempVoiceType
    createdAt: Date
    lastActiveAt: Date
    _count: TempVoiceChannelCountAggregateOutputType | null
    _min: TempVoiceChannelMinAggregateOutputType | null
    _max: TempVoiceChannelMaxAggregateOutputType | null
  }

  type GetTempVoiceChannelGroupByPayload<T extends TempVoiceChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TempVoiceChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TempVoiceChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TempVoiceChannelGroupByOutputType[P]>
            : GetScalarType<T[P], TempVoiceChannelGroupByOutputType[P]>
        }
      >
    >


  export type TempVoiceChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    systemId?: boolean
    channelId?: boolean
    ownerId?: boolean
    templateType?: boolean
    createdAt?: boolean
    lastActiveAt?: boolean
    system?: boolean | TempVoiceSystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tempVoiceChannel"]>

  export type TempVoiceChannelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    systemId?: boolean
    channelId?: boolean
    ownerId?: boolean
    templateType?: boolean
    createdAt?: boolean
    lastActiveAt?: boolean
    system?: boolean | TempVoiceSystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tempVoiceChannel"]>

  export type TempVoiceChannelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    systemId?: boolean
    channelId?: boolean
    ownerId?: boolean
    templateType?: boolean
    createdAt?: boolean
    lastActiveAt?: boolean
    system?: boolean | TempVoiceSystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tempVoiceChannel"]>

  export type TempVoiceChannelSelectScalar = {
    id?: boolean
    systemId?: boolean
    channelId?: boolean
    ownerId?: boolean
    templateType?: boolean
    createdAt?: boolean
    lastActiveAt?: boolean
  }

  export type TempVoiceChannelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "systemId" | "channelId" | "ownerId" | "templateType" | "createdAt" | "lastActiveAt", ExtArgs["result"]["tempVoiceChannel"]>
  export type TempVoiceChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    system?: boolean | TempVoiceSystemDefaultArgs<ExtArgs>
  }
  export type TempVoiceChannelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    system?: boolean | TempVoiceSystemDefaultArgs<ExtArgs>
  }
  export type TempVoiceChannelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    system?: boolean | TempVoiceSystemDefaultArgs<ExtArgs>
  }

  export type $TempVoiceChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TempVoiceChannel"
    objects: {
      system: Prisma.$TempVoiceSystemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      systemId: string
      channelId: string
      ownerId: string
      templateType: $Enums.TempVoiceType
      createdAt: Date
      lastActiveAt: Date
    }, ExtArgs["result"]["tempVoiceChannel"]>
    composites: {}
  }

  type TempVoiceChannelGetPayload<S extends boolean | null | undefined | TempVoiceChannelDefaultArgs> = $Result.GetResult<Prisma.$TempVoiceChannelPayload, S>

  type TempVoiceChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TempVoiceChannelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TempVoiceChannelCountAggregateInputType | true
    }

  export interface TempVoiceChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TempVoiceChannel'], meta: { name: 'TempVoiceChannel' } }
    /**
     * Find zero or one TempVoiceChannel that matches the filter.
     * @param {TempVoiceChannelFindUniqueArgs} args - Arguments to find a TempVoiceChannel
     * @example
     * // Get one TempVoiceChannel
     * const tempVoiceChannel = await prisma.tempVoiceChannel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TempVoiceChannelFindUniqueArgs>(args: SelectSubset<T, TempVoiceChannelFindUniqueArgs<ExtArgs>>): Prisma__TempVoiceChannelClient<$Result.GetResult<Prisma.$TempVoiceChannelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TempVoiceChannel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TempVoiceChannelFindUniqueOrThrowArgs} args - Arguments to find a TempVoiceChannel
     * @example
     * // Get one TempVoiceChannel
     * const tempVoiceChannel = await prisma.tempVoiceChannel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TempVoiceChannelFindUniqueOrThrowArgs>(args: SelectSubset<T, TempVoiceChannelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TempVoiceChannelClient<$Result.GetResult<Prisma.$TempVoiceChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TempVoiceChannel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceChannelFindFirstArgs} args - Arguments to find a TempVoiceChannel
     * @example
     * // Get one TempVoiceChannel
     * const tempVoiceChannel = await prisma.tempVoiceChannel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TempVoiceChannelFindFirstArgs>(args?: SelectSubset<T, TempVoiceChannelFindFirstArgs<ExtArgs>>): Prisma__TempVoiceChannelClient<$Result.GetResult<Prisma.$TempVoiceChannelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TempVoiceChannel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceChannelFindFirstOrThrowArgs} args - Arguments to find a TempVoiceChannel
     * @example
     * // Get one TempVoiceChannel
     * const tempVoiceChannel = await prisma.tempVoiceChannel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TempVoiceChannelFindFirstOrThrowArgs>(args?: SelectSubset<T, TempVoiceChannelFindFirstOrThrowArgs<ExtArgs>>): Prisma__TempVoiceChannelClient<$Result.GetResult<Prisma.$TempVoiceChannelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TempVoiceChannels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TempVoiceChannels
     * const tempVoiceChannels = await prisma.tempVoiceChannel.findMany()
     * 
     * // Get first 10 TempVoiceChannels
     * const tempVoiceChannels = await prisma.tempVoiceChannel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tempVoiceChannelWithIdOnly = await prisma.tempVoiceChannel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TempVoiceChannelFindManyArgs>(args?: SelectSubset<T, TempVoiceChannelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempVoiceChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TempVoiceChannel.
     * @param {TempVoiceChannelCreateArgs} args - Arguments to create a TempVoiceChannel.
     * @example
     * // Create one TempVoiceChannel
     * const TempVoiceChannel = await prisma.tempVoiceChannel.create({
     *   data: {
     *     // ... data to create a TempVoiceChannel
     *   }
     * })
     * 
     */
    create<T extends TempVoiceChannelCreateArgs>(args: SelectSubset<T, TempVoiceChannelCreateArgs<ExtArgs>>): Prisma__TempVoiceChannelClient<$Result.GetResult<Prisma.$TempVoiceChannelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TempVoiceChannels.
     * @param {TempVoiceChannelCreateManyArgs} args - Arguments to create many TempVoiceChannels.
     * @example
     * // Create many TempVoiceChannels
     * const tempVoiceChannel = await prisma.tempVoiceChannel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TempVoiceChannelCreateManyArgs>(args?: SelectSubset<T, TempVoiceChannelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TempVoiceChannels and returns the data saved in the database.
     * @param {TempVoiceChannelCreateManyAndReturnArgs} args - Arguments to create many TempVoiceChannels.
     * @example
     * // Create many TempVoiceChannels
     * const tempVoiceChannel = await prisma.tempVoiceChannel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TempVoiceChannels and only return the `id`
     * const tempVoiceChannelWithIdOnly = await prisma.tempVoiceChannel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TempVoiceChannelCreateManyAndReturnArgs>(args?: SelectSubset<T, TempVoiceChannelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempVoiceChannelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TempVoiceChannel.
     * @param {TempVoiceChannelDeleteArgs} args - Arguments to delete one TempVoiceChannel.
     * @example
     * // Delete one TempVoiceChannel
     * const TempVoiceChannel = await prisma.tempVoiceChannel.delete({
     *   where: {
     *     // ... filter to delete one TempVoiceChannel
     *   }
     * })
     * 
     */
    delete<T extends TempVoiceChannelDeleteArgs>(args: SelectSubset<T, TempVoiceChannelDeleteArgs<ExtArgs>>): Prisma__TempVoiceChannelClient<$Result.GetResult<Prisma.$TempVoiceChannelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TempVoiceChannel.
     * @param {TempVoiceChannelUpdateArgs} args - Arguments to update one TempVoiceChannel.
     * @example
     * // Update one TempVoiceChannel
     * const tempVoiceChannel = await prisma.tempVoiceChannel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TempVoiceChannelUpdateArgs>(args: SelectSubset<T, TempVoiceChannelUpdateArgs<ExtArgs>>): Prisma__TempVoiceChannelClient<$Result.GetResult<Prisma.$TempVoiceChannelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TempVoiceChannels.
     * @param {TempVoiceChannelDeleteManyArgs} args - Arguments to filter TempVoiceChannels to delete.
     * @example
     * // Delete a few TempVoiceChannels
     * const { count } = await prisma.tempVoiceChannel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TempVoiceChannelDeleteManyArgs>(args?: SelectSubset<T, TempVoiceChannelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TempVoiceChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TempVoiceChannels
     * const tempVoiceChannel = await prisma.tempVoiceChannel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TempVoiceChannelUpdateManyArgs>(args: SelectSubset<T, TempVoiceChannelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TempVoiceChannels and returns the data updated in the database.
     * @param {TempVoiceChannelUpdateManyAndReturnArgs} args - Arguments to update many TempVoiceChannels.
     * @example
     * // Update many TempVoiceChannels
     * const tempVoiceChannel = await prisma.tempVoiceChannel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TempVoiceChannels and only return the `id`
     * const tempVoiceChannelWithIdOnly = await prisma.tempVoiceChannel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TempVoiceChannelUpdateManyAndReturnArgs>(args: SelectSubset<T, TempVoiceChannelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempVoiceChannelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TempVoiceChannel.
     * @param {TempVoiceChannelUpsertArgs} args - Arguments to update or create a TempVoiceChannel.
     * @example
     * // Update or create a TempVoiceChannel
     * const tempVoiceChannel = await prisma.tempVoiceChannel.upsert({
     *   create: {
     *     // ... data to create a TempVoiceChannel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TempVoiceChannel we want to update
     *   }
     * })
     */
    upsert<T extends TempVoiceChannelUpsertArgs>(args: SelectSubset<T, TempVoiceChannelUpsertArgs<ExtArgs>>): Prisma__TempVoiceChannelClient<$Result.GetResult<Prisma.$TempVoiceChannelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TempVoiceChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceChannelCountArgs} args - Arguments to filter TempVoiceChannels to count.
     * @example
     * // Count the number of TempVoiceChannels
     * const count = await prisma.tempVoiceChannel.count({
     *   where: {
     *     // ... the filter for the TempVoiceChannels we want to count
     *   }
     * })
    **/
    count<T extends TempVoiceChannelCountArgs>(
      args?: Subset<T, TempVoiceChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TempVoiceChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TempVoiceChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TempVoiceChannelAggregateArgs>(args: Subset<T, TempVoiceChannelAggregateArgs>): Prisma.PrismaPromise<GetTempVoiceChannelAggregateType<T>>

    /**
     * Group by TempVoiceChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempVoiceChannelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TempVoiceChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TempVoiceChannelGroupByArgs['orderBy'] }
        : { orderBy?: TempVoiceChannelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TempVoiceChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTempVoiceChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TempVoiceChannel model
   */
  readonly fields: TempVoiceChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TempVoiceChannel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TempVoiceChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    system<T extends TempVoiceSystemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TempVoiceSystemDefaultArgs<ExtArgs>>): Prisma__TempVoiceSystemClient<$Result.GetResult<Prisma.$TempVoiceSystemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TempVoiceChannel model
   */
  interface TempVoiceChannelFieldRefs {
    readonly id: FieldRef<"TempVoiceChannel", 'String'>
    readonly systemId: FieldRef<"TempVoiceChannel", 'String'>
    readonly channelId: FieldRef<"TempVoiceChannel", 'String'>
    readonly ownerId: FieldRef<"TempVoiceChannel", 'String'>
    readonly templateType: FieldRef<"TempVoiceChannel", 'TempVoiceType'>
    readonly createdAt: FieldRef<"TempVoiceChannel", 'DateTime'>
    readonly lastActiveAt: FieldRef<"TempVoiceChannel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TempVoiceChannel findUnique
   */
  export type TempVoiceChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceChannel
     */
    select?: TempVoiceChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceChannel
     */
    omit?: TempVoiceChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceChannelInclude<ExtArgs> | null
    /**
     * Filter, which TempVoiceChannel to fetch.
     */
    where: TempVoiceChannelWhereUniqueInput
  }

  /**
   * TempVoiceChannel findUniqueOrThrow
   */
  export type TempVoiceChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceChannel
     */
    select?: TempVoiceChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceChannel
     */
    omit?: TempVoiceChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceChannelInclude<ExtArgs> | null
    /**
     * Filter, which TempVoiceChannel to fetch.
     */
    where: TempVoiceChannelWhereUniqueInput
  }

  /**
   * TempVoiceChannel findFirst
   */
  export type TempVoiceChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceChannel
     */
    select?: TempVoiceChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceChannel
     */
    omit?: TempVoiceChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceChannelInclude<ExtArgs> | null
    /**
     * Filter, which TempVoiceChannel to fetch.
     */
    where?: TempVoiceChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempVoiceChannels to fetch.
     */
    orderBy?: TempVoiceChannelOrderByWithRelationInput | TempVoiceChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempVoiceChannels.
     */
    cursor?: TempVoiceChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempVoiceChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempVoiceChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempVoiceChannels.
     */
    distinct?: TempVoiceChannelScalarFieldEnum | TempVoiceChannelScalarFieldEnum[]
  }

  /**
   * TempVoiceChannel findFirstOrThrow
   */
  export type TempVoiceChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceChannel
     */
    select?: TempVoiceChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceChannel
     */
    omit?: TempVoiceChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceChannelInclude<ExtArgs> | null
    /**
     * Filter, which TempVoiceChannel to fetch.
     */
    where?: TempVoiceChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempVoiceChannels to fetch.
     */
    orderBy?: TempVoiceChannelOrderByWithRelationInput | TempVoiceChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempVoiceChannels.
     */
    cursor?: TempVoiceChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempVoiceChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempVoiceChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempVoiceChannels.
     */
    distinct?: TempVoiceChannelScalarFieldEnum | TempVoiceChannelScalarFieldEnum[]
  }

  /**
   * TempVoiceChannel findMany
   */
  export type TempVoiceChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceChannel
     */
    select?: TempVoiceChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceChannel
     */
    omit?: TempVoiceChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceChannelInclude<ExtArgs> | null
    /**
     * Filter, which TempVoiceChannels to fetch.
     */
    where?: TempVoiceChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempVoiceChannels to fetch.
     */
    orderBy?: TempVoiceChannelOrderByWithRelationInput | TempVoiceChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TempVoiceChannels.
     */
    cursor?: TempVoiceChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempVoiceChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempVoiceChannels.
     */
    skip?: number
    distinct?: TempVoiceChannelScalarFieldEnum | TempVoiceChannelScalarFieldEnum[]
  }

  /**
   * TempVoiceChannel create
   */
  export type TempVoiceChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceChannel
     */
    select?: TempVoiceChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceChannel
     */
    omit?: TempVoiceChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a TempVoiceChannel.
     */
    data: XOR<TempVoiceChannelCreateInput, TempVoiceChannelUncheckedCreateInput>
  }

  /**
   * TempVoiceChannel createMany
   */
  export type TempVoiceChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TempVoiceChannels.
     */
    data: TempVoiceChannelCreateManyInput | TempVoiceChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TempVoiceChannel createManyAndReturn
   */
  export type TempVoiceChannelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceChannel
     */
    select?: TempVoiceChannelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceChannel
     */
    omit?: TempVoiceChannelOmit<ExtArgs> | null
    /**
     * The data used to create many TempVoiceChannels.
     */
    data: TempVoiceChannelCreateManyInput | TempVoiceChannelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceChannelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TempVoiceChannel update
   */
  export type TempVoiceChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceChannel
     */
    select?: TempVoiceChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceChannel
     */
    omit?: TempVoiceChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a TempVoiceChannel.
     */
    data: XOR<TempVoiceChannelUpdateInput, TempVoiceChannelUncheckedUpdateInput>
    /**
     * Choose, which TempVoiceChannel to update.
     */
    where: TempVoiceChannelWhereUniqueInput
  }

  /**
   * TempVoiceChannel updateMany
   */
  export type TempVoiceChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TempVoiceChannels.
     */
    data: XOR<TempVoiceChannelUpdateManyMutationInput, TempVoiceChannelUncheckedUpdateManyInput>
    /**
     * Filter which TempVoiceChannels to update
     */
    where?: TempVoiceChannelWhereInput
    /**
     * Limit how many TempVoiceChannels to update.
     */
    limit?: number
  }

  /**
   * TempVoiceChannel updateManyAndReturn
   */
  export type TempVoiceChannelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceChannel
     */
    select?: TempVoiceChannelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceChannel
     */
    omit?: TempVoiceChannelOmit<ExtArgs> | null
    /**
     * The data used to update TempVoiceChannels.
     */
    data: XOR<TempVoiceChannelUpdateManyMutationInput, TempVoiceChannelUncheckedUpdateManyInput>
    /**
     * Filter which TempVoiceChannels to update
     */
    where?: TempVoiceChannelWhereInput
    /**
     * Limit how many TempVoiceChannels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceChannelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TempVoiceChannel upsert
   */
  export type TempVoiceChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceChannel
     */
    select?: TempVoiceChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceChannel
     */
    omit?: TempVoiceChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the TempVoiceChannel to update in case it exists.
     */
    where: TempVoiceChannelWhereUniqueInput
    /**
     * In case the TempVoiceChannel found by the `where` argument doesn't exist, create a new TempVoiceChannel with this data.
     */
    create: XOR<TempVoiceChannelCreateInput, TempVoiceChannelUncheckedCreateInput>
    /**
     * In case the TempVoiceChannel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TempVoiceChannelUpdateInput, TempVoiceChannelUncheckedUpdateInput>
  }

  /**
   * TempVoiceChannel delete
   */
  export type TempVoiceChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceChannel
     */
    select?: TempVoiceChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceChannel
     */
    omit?: TempVoiceChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceChannelInclude<ExtArgs> | null
    /**
     * Filter which TempVoiceChannel to delete.
     */
    where: TempVoiceChannelWhereUniqueInput
  }

  /**
   * TempVoiceChannel deleteMany
   */
  export type TempVoiceChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TempVoiceChannels to delete
     */
    where?: TempVoiceChannelWhereInput
    /**
     * Limit how many TempVoiceChannels to delete.
     */
    limit?: number
  }

  /**
   * TempVoiceChannel without action
   */
  export type TempVoiceChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempVoiceChannel
     */
    select?: TempVoiceChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempVoiceChannel
     */
    omit?: TempVoiceChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempVoiceChannelInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BirthdayScalarFieldEnum: {
    userId: 'userId',
    day: 'day',
    month: 'month',
    year: 'year',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BirthdayScalarFieldEnum = (typeof BirthdayScalarFieldEnum)[keyof typeof BirthdayScalarFieldEnum]


  export const GuildConfigScalarFieldEnum: {
    guildId: 'guildId',
    birthdayChannelId: 'birthdayChannelId',
    birthdayRoleId: 'birthdayRoleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuildConfigScalarFieldEnum = (typeof GuildConfigScalarFieldEnum)[keyof typeof GuildConfigScalarFieldEnum]


  export const TempVoiceSystemScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    name: 'name',
    categoryId: 'categoryId',
    enabled: 'enabled',
    deleteDelay: 'deleteDelay',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TempVoiceSystemScalarFieldEnum = (typeof TempVoiceSystemScalarFieldEnum)[keyof typeof TempVoiceSystemScalarFieldEnum]


  export const TempVoiceJoinChannelScalarFieldEnum: {
    id: 'id',
    channelId: 'channelId',
    templateType: 'templateType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    systemId: 'systemId'
  };

  export type TempVoiceJoinChannelScalarFieldEnum = (typeof TempVoiceJoinChannelScalarFieldEnum)[keyof typeof TempVoiceJoinChannelScalarFieldEnum]


  export const TempVoiceTemplateScalarFieldEnum: {
    id: 'id',
    type: 'type',
    nameTemplate: 'nameTemplate',
    userLimit: 'userLimit',
    bitrate: 'bitrate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    systemId: 'systemId'
  };

  export type TempVoiceTemplateScalarFieldEnum = (typeof TempVoiceTemplateScalarFieldEnum)[keyof typeof TempVoiceTemplateScalarFieldEnum]


  export const TempVoiceChannelScalarFieldEnum: {
    id: 'id',
    systemId: 'systemId',
    channelId: 'channelId',
    ownerId: 'ownerId',
    templateType: 'templateType',
    createdAt: 'createdAt',
    lastActiveAt: 'lastActiveAt'
  };

  export type TempVoiceChannelScalarFieldEnum = (typeof TempVoiceChannelScalarFieldEnum)[keyof typeof TempVoiceChannelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TempVoiceType'
   */
  export type EnumTempVoiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TempVoiceType'>
    


  /**
   * Reference to a field of type 'TempVoiceType[]'
   */
  export type ListEnumTempVoiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TempVoiceType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BirthdayWhereInput = {
    AND?: BirthdayWhereInput | BirthdayWhereInput[]
    OR?: BirthdayWhereInput[]
    NOT?: BirthdayWhereInput | BirthdayWhereInput[]
    userId?: StringFilter<"Birthday"> | string
    day?: IntFilter<"Birthday"> | number
    month?: IntFilter<"Birthday"> | number
    year?: IntNullableFilter<"Birthday"> | number | null
    createdAt?: DateTimeFilter<"Birthday"> | Date | string
    updatedAt?: DateTimeFilter<"Birthday"> | Date | string
  }

  export type BirthdayOrderByWithRelationInput = {
    userId?: SortOrder
    day?: SortOrder
    month?: SortOrder
    year?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BirthdayWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: BirthdayWhereInput | BirthdayWhereInput[]
    OR?: BirthdayWhereInput[]
    NOT?: BirthdayWhereInput | BirthdayWhereInput[]
    day?: IntFilter<"Birthday"> | number
    month?: IntFilter<"Birthday"> | number
    year?: IntNullableFilter<"Birthday"> | number | null
    createdAt?: DateTimeFilter<"Birthday"> | Date | string
    updatedAt?: DateTimeFilter<"Birthday"> | Date | string
  }, "userId">

  export type BirthdayOrderByWithAggregationInput = {
    userId?: SortOrder
    day?: SortOrder
    month?: SortOrder
    year?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BirthdayCountOrderByAggregateInput
    _avg?: BirthdayAvgOrderByAggregateInput
    _max?: BirthdayMaxOrderByAggregateInput
    _min?: BirthdayMinOrderByAggregateInput
    _sum?: BirthdaySumOrderByAggregateInput
  }

  export type BirthdayScalarWhereWithAggregatesInput = {
    AND?: BirthdayScalarWhereWithAggregatesInput | BirthdayScalarWhereWithAggregatesInput[]
    OR?: BirthdayScalarWhereWithAggregatesInput[]
    NOT?: BirthdayScalarWhereWithAggregatesInput | BirthdayScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Birthday"> | string
    day?: IntWithAggregatesFilter<"Birthday"> | number
    month?: IntWithAggregatesFilter<"Birthday"> | number
    year?: IntNullableWithAggregatesFilter<"Birthday"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Birthday"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Birthday"> | Date | string
  }

  export type GuildConfigWhereInput = {
    AND?: GuildConfigWhereInput | GuildConfigWhereInput[]
    OR?: GuildConfigWhereInput[]
    NOT?: GuildConfigWhereInput | GuildConfigWhereInput[]
    guildId?: StringFilter<"GuildConfig"> | string
    birthdayChannelId?: StringNullableFilter<"GuildConfig"> | string | null
    birthdayRoleId?: StringNullableFilter<"GuildConfig"> | string | null
    createdAt?: DateTimeFilter<"GuildConfig"> | Date | string
    updatedAt?: DateTimeFilter<"GuildConfig"> | Date | string
    tempVoiceSystems?: TempVoiceSystemListRelationFilter
  }

  export type GuildConfigOrderByWithRelationInput = {
    guildId?: SortOrder
    birthdayChannelId?: SortOrderInput | SortOrder
    birthdayRoleId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tempVoiceSystems?: TempVoiceSystemOrderByRelationAggregateInput
  }

  export type GuildConfigWhereUniqueInput = Prisma.AtLeast<{
    guildId?: string
    AND?: GuildConfigWhereInput | GuildConfigWhereInput[]
    OR?: GuildConfigWhereInput[]
    NOT?: GuildConfigWhereInput | GuildConfigWhereInput[]
    birthdayChannelId?: StringNullableFilter<"GuildConfig"> | string | null
    birthdayRoleId?: StringNullableFilter<"GuildConfig"> | string | null
    createdAt?: DateTimeFilter<"GuildConfig"> | Date | string
    updatedAt?: DateTimeFilter<"GuildConfig"> | Date | string
    tempVoiceSystems?: TempVoiceSystemListRelationFilter
  }, "guildId">

  export type GuildConfigOrderByWithAggregationInput = {
    guildId?: SortOrder
    birthdayChannelId?: SortOrderInput | SortOrder
    birthdayRoleId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuildConfigCountOrderByAggregateInput
    _max?: GuildConfigMaxOrderByAggregateInput
    _min?: GuildConfigMinOrderByAggregateInput
  }

  export type GuildConfigScalarWhereWithAggregatesInput = {
    AND?: GuildConfigScalarWhereWithAggregatesInput | GuildConfigScalarWhereWithAggregatesInput[]
    OR?: GuildConfigScalarWhereWithAggregatesInput[]
    NOT?: GuildConfigScalarWhereWithAggregatesInput | GuildConfigScalarWhereWithAggregatesInput[]
    guildId?: StringWithAggregatesFilter<"GuildConfig"> | string
    birthdayChannelId?: StringNullableWithAggregatesFilter<"GuildConfig"> | string | null
    birthdayRoleId?: StringNullableWithAggregatesFilter<"GuildConfig"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GuildConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GuildConfig"> | Date | string
  }

  export type TempVoiceSystemWhereInput = {
    AND?: TempVoiceSystemWhereInput | TempVoiceSystemWhereInput[]
    OR?: TempVoiceSystemWhereInput[]
    NOT?: TempVoiceSystemWhereInput | TempVoiceSystemWhereInput[]
    id?: StringFilter<"TempVoiceSystem"> | string
    guildId?: StringFilter<"TempVoiceSystem"> | string
    name?: StringFilter<"TempVoiceSystem"> | string
    categoryId?: StringFilter<"TempVoiceSystem"> | string
    enabled?: BoolFilter<"TempVoiceSystem"> | boolean
    deleteDelay?: IntFilter<"TempVoiceSystem"> | number
    createdAt?: DateTimeFilter<"TempVoiceSystem"> | Date | string
    updatedAt?: DateTimeFilter<"TempVoiceSystem"> | Date | string
    channels?: TempVoiceChannelListRelationFilter
    joins?: TempVoiceJoinChannelListRelationFilter
    guild?: XOR<GuildConfigScalarRelationFilter, GuildConfigWhereInput>
    templates?: TempVoiceTemplateListRelationFilter
  }

  export type TempVoiceSystemOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    enabled?: SortOrder
    deleteDelay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    channels?: TempVoiceChannelOrderByRelationAggregateInput
    joins?: TempVoiceJoinChannelOrderByRelationAggregateInput
    guild?: GuildConfigOrderByWithRelationInput
    templates?: TempVoiceTemplateOrderByRelationAggregateInput
  }

  export type TempVoiceSystemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TempVoiceSystemWhereInput | TempVoiceSystemWhereInput[]
    OR?: TempVoiceSystemWhereInput[]
    NOT?: TempVoiceSystemWhereInput | TempVoiceSystemWhereInput[]
    guildId?: StringFilter<"TempVoiceSystem"> | string
    categoryId?: StringFilter<"TempVoiceSystem"> | string
    enabled?: BoolFilter<"TempVoiceSystem"> | boolean
    deleteDelay?: IntFilter<"TempVoiceSystem"> | number
    createdAt?: DateTimeFilter<"TempVoiceSystem"> | Date | string
    updatedAt?: DateTimeFilter<"TempVoiceSystem"> | Date | string
    channels?: TempVoiceChannelListRelationFilter
    joins?: TempVoiceJoinChannelListRelationFilter
    guild?: XOR<GuildConfigScalarRelationFilter, GuildConfigWhereInput>
    templates?: TempVoiceTemplateListRelationFilter
  }, "id" | "name">

  export type TempVoiceSystemOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    enabled?: SortOrder
    deleteDelay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TempVoiceSystemCountOrderByAggregateInput
    _avg?: TempVoiceSystemAvgOrderByAggregateInput
    _max?: TempVoiceSystemMaxOrderByAggregateInput
    _min?: TempVoiceSystemMinOrderByAggregateInput
    _sum?: TempVoiceSystemSumOrderByAggregateInput
  }

  export type TempVoiceSystemScalarWhereWithAggregatesInput = {
    AND?: TempVoiceSystemScalarWhereWithAggregatesInput | TempVoiceSystemScalarWhereWithAggregatesInput[]
    OR?: TempVoiceSystemScalarWhereWithAggregatesInput[]
    NOT?: TempVoiceSystemScalarWhereWithAggregatesInput | TempVoiceSystemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TempVoiceSystem"> | string
    guildId?: StringWithAggregatesFilter<"TempVoiceSystem"> | string
    name?: StringWithAggregatesFilter<"TempVoiceSystem"> | string
    categoryId?: StringWithAggregatesFilter<"TempVoiceSystem"> | string
    enabled?: BoolWithAggregatesFilter<"TempVoiceSystem"> | boolean
    deleteDelay?: IntWithAggregatesFilter<"TempVoiceSystem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TempVoiceSystem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TempVoiceSystem"> | Date | string
  }

  export type TempVoiceJoinChannelWhereInput = {
    AND?: TempVoiceJoinChannelWhereInput | TempVoiceJoinChannelWhereInput[]
    OR?: TempVoiceJoinChannelWhereInput[]
    NOT?: TempVoiceJoinChannelWhereInput | TempVoiceJoinChannelWhereInput[]
    id?: StringFilter<"TempVoiceJoinChannel"> | string
    channelId?: StringFilter<"TempVoiceJoinChannel"> | string
    templateType?: EnumTempVoiceTypeFilter<"TempVoiceJoinChannel"> | $Enums.TempVoiceType
    createdAt?: DateTimeFilter<"TempVoiceJoinChannel"> | Date | string
    updatedAt?: DateTimeFilter<"TempVoiceJoinChannel"> | Date | string
    systemId?: StringFilter<"TempVoiceJoinChannel"> | string
    system?: XOR<TempVoiceSystemScalarRelationFilter, TempVoiceSystemWhereInput>
  }

  export type TempVoiceJoinChannelOrderByWithRelationInput = {
    id?: SortOrder
    channelId?: SortOrder
    templateType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    systemId?: SortOrder
    system?: TempVoiceSystemOrderByWithRelationInput
  }

  export type TempVoiceJoinChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    channelId?: string
    AND?: TempVoiceJoinChannelWhereInput | TempVoiceJoinChannelWhereInput[]
    OR?: TempVoiceJoinChannelWhereInput[]
    NOT?: TempVoiceJoinChannelWhereInput | TempVoiceJoinChannelWhereInput[]
    templateType?: EnumTempVoiceTypeFilter<"TempVoiceJoinChannel"> | $Enums.TempVoiceType
    createdAt?: DateTimeFilter<"TempVoiceJoinChannel"> | Date | string
    updatedAt?: DateTimeFilter<"TempVoiceJoinChannel"> | Date | string
    systemId?: StringFilter<"TempVoiceJoinChannel"> | string
    system?: XOR<TempVoiceSystemScalarRelationFilter, TempVoiceSystemWhereInput>
  }, "id" | "channelId">

  export type TempVoiceJoinChannelOrderByWithAggregationInput = {
    id?: SortOrder
    channelId?: SortOrder
    templateType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    systemId?: SortOrder
    _count?: TempVoiceJoinChannelCountOrderByAggregateInput
    _max?: TempVoiceJoinChannelMaxOrderByAggregateInput
    _min?: TempVoiceJoinChannelMinOrderByAggregateInput
  }

  export type TempVoiceJoinChannelScalarWhereWithAggregatesInput = {
    AND?: TempVoiceJoinChannelScalarWhereWithAggregatesInput | TempVoiceJoinChannelScalarWhereWithAggregatesInput[]
    OR?: TempVoiceJoinChannelScalarWhereWithAggregatesInput[]
    NOT?: TempVoiceJoinChannelScalarWhereWithAggregatesInput | TempVoiceJoinChannelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TempVoiceJoinChannel"> | string
    channelId?: StringWithAggregatesFilter<"TempVoiceJoinChannel"> | string
    templateType?: EnumTempVoiceTypeWithAggregatesFilter<"TempVoiceJoinChannel"> | $Enums.TempVoiceType
    createdAt?: DateTimeWithAggregatesFilter<"TempVoiceJoinChannel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TempVoiceJoinChannel"> | Date | string
    systemId?: StringWithAggregatesFilter<"TempVoiceJoinChannel"> | string
  }

  export type TempVoiceTemplateWhereInput = {
    AND?: TempVoiceTemplateWhereInput | TempVoiceTemplateWhereInput[]
    OR?: TempVoiceTemplateWhereInput[]
    NOT?: TempVoiceTemplateWhereInput | TempVoiceTemplateWhereInput[]
    id?: StringFilter<"TempVoiceTemplate"> | string
    type?: EnumTempVoiceTypeFilter<"TempVoiceTemplate"> | $Enums.TempVoiceType
    nameTemplate?: StringFilter<"TempVoiceTemplate"> | string
    userLimit?: IntNullableFilter<"TempVoiceTemplate"> | number | null
    bitrate?: IntNullableFilter<"TempVoiceTemplate"> | number | null
    createdAt?: DateTimeFilter<"TempVoiceTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"TempVoiceTemplate"> | Date | string
    systemId?: StringFilter<"TempVoiceTemplate"> | string
    system?: XOR<TempVoiceSystemScalarRelationFilter, TempVoiceSystemWhereInput>
  }

  export type TempVoiceTemplateOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    nameTemplate?: SortOrder
    userLimit?: SortOrderInput | SortOrder
    bitrate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    systemId?: SortOrder
    system?: TempVoiceSystemOrderByWithRelationInput
  }

  export type TempVoiceTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    systemId_type?: TempVoiceTemplateSystemIdTypeCompoundUniqueInput
    AND?: TempVoiceTemplateWhereInput | TempVoiceTemplateWhereInput[]
    OR?: TempVoiceTemplateWhereInput[]
    NOT?: TempVoiceTemplateWhereInput | TempVoiceTemplateWhereInput[]
    type?: EnumTempVoiceTypeFilter<"TempVoiceTemplate"> | $Enums.TempVoiceType
    nameTemplate?: StringFilter<"TempVoiceTemplate"> | string
    userLimit?: IntNullableFilter<"TempVoiceTemplate"> | number | null
    bitrate?: IntNullableFilter<"TempVoiceTemplate"> | number | null
    createdAt?: DateTimeFilter<"TempVoiceTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"TempVoiceTemplate"> | Date | string
    systemId?: StringFilter<"TempVoiceTemplate"> | string
    system?: XOR<TempVoiceSystemScalarRelationFilter, TempVoiceSystemWhereInput>
  }, "id" | "systemId_type">

  export type TempVoiceTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    nameTemplate?: SortOrder
    userLimit?: SortOrderInput | SortOrder
    bitrate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    systemId?: SortOrder
    _count?: TempVoiceTemplateCountOrderByAggregateInput
    _avg?: TempVoiceTemplateAvgOrderByAggregateInput
    _max?: TempVoiceTemplateMaxOrderByAggregateInput
    _min?: TempVoiceTemplateMinOrderByAggregateInput
    _sum?: TempVoiceTemplateSumOrderByAggregateInput
  }

  export type TempVoiceTemplateScalarWhereWithAggregatesInput = {
    AND?: TempVoiceTemplateScalarWhereWithAggregatesInput | TempVoiceTemplateScalarWhereWithAggregatesInput[]
    OR?: TempVoiceTemplateScalarWhereWithAggregatesInput[]
    NOT?: TempVoiceTemplateScalarWhereWithAggregatesInput | TempVoiceTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TempVoiceTemplate"> | string
    type?: EnumTempVoiceTypeWithAggregatesFilter<"TempVoiceTemplate"> | $Enums.TempVoiceType
    nameTemplate?: StringWithAggregatesFilter<"TempVoiceTemplate"> | string
    userLimit?: IntNullableWithAggregatesFilter<"TempVoiceTemplate"> | number | null
    bitrate?: IntNullableWithAggregatesFilter<"TempVoiceTemplate"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"TempVoiceTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TempVoiceTemplate"> | Date | string
    systemId?: StringWithAggregatesFilter<"TempVoiceTemplate"> | string
  }

  export type TempVoiceChannelWhereInput = {
    AND?: TempVoiceChannelWhereInput | TempVoiceChannelWhereInput[]
    OR?: TempVoiceChannelWhereInput[]
    NOT?: TempVoiceChannelWhereInput | TempVoiceChannelWhereInput[]
    id?: StringFilter<"TempVoiceChannel"> | string
    systemId?: StringFilter<"TempVoiceChannel"> | string
    channelId?: StringFilter<"TempVoiceChannel"> | string
    ownerId?: StringFilter<"TempVoiceChannel"> | string
    templateType?: EnumTempVoiceTypeFilter<"TempVoiceChannel"> | $Enums.TempVoiceType
    createdAt?: DateTimeFilter<"TempVoiceChannel"> | Date | string
    lastActiveAt?: DateTimeFilter<"TempVoiceChannel"> | Date | string
    system?: XOR<TempVoiceSystemScalarRelationFilter, TempVoiceSystemWhereInput>
  }

  export type TempVoiceChannelOrderByWithRelationInput = {
    id?: SortOrder
    systemId?: SortOrder
    channelId?: SortOrder
    ownerId?: SortOrder
    templateType?: SortOrder
    createdAt?: SortOrder
    lastActiveAt?: SortOrder
    system?: TempVoiceSystemOrderByWithRelationInput
  }

  export type TempVoiceChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    channelId?: string
    AND?: TempVoiceChannelWhereInput | TempVoiceChannelWhereInput[]
    OR?: TempVoiceChannelWhereInput[]
    NOT?: TempVoiceChannelWhereInput | TempVoiceChannelWhereInput[]
    systemId?: StringFilter<"TempVoiceChannel"> | string
    ownerId?: StringFilter<"TempVoiceChannel"> | string
    templateType?: EnumTempVoiceTypeFilter<"TempVoiceChannel"> | $Enums.TempVoiceType
    createdAt?: DateTimeFilter<"TempVoiceChannel"> | Date | string
    lastActiveAt?: DateTimeFilter<"TempVoiceChannel"> | Date | string
    system?: XOR<TempVoiceSystemScalarRelationFilter, TempVoiceSystemWhereInput>
  }, "id" | "channelId">

  export type TempVoiceChannelOrderByWithAggregationInput = {
    id?: SortOrder
    systemId?: SortOrder
    channelId?: SortOrder
    ownerId?: SortOrder
    templateType?: SortOrder
    createdAt?: SortOrder
    lastActiveAt?: SortOrder
    _count?: TempVoiceChannelCountOrderByAggregateInput
    _max?: TempVoiceChannelMaxOrderByAggregateInput
    _min?: TempVoiceChannelMinOrderByAggregateInput
  }

  export type TempVoiceChannelScalarWhereWithAggregatesInput = {
    AND?: TempVoiceChannelScalarWhereWithAggregatesInput | TempVoiceChannelScalarWhereWithAggregatesInput[]
    OR?: TempVoiceChannelScalarWhereWithAggregatesInput[]
    NOT?: TempVoiceChannelScalarWhereWithAggregatesInput | TempVoiceChannelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TempVoiceChannel"> | string
    systemId?: StringWithAggregatesFilter<"TempVoiceChannel"> | string
    channelId?: StringWithAggregatesFilter<"TempVoiceChannel"> | string
    ownerId?: StringWithAggregatesFilter<"TempVoiceChannel"> | string
    templateType?: EnumTempVoiceTypeWithAggregatesFilter<"TempVoiceChannel"> | $Enums.TempVoiceType
    createdAt?: DateTimeWithAggregatesFilter<"TempVoiceChannel"> | Date | string
    lastActiveAt?: DateTimeWithAggregatesFilter<"TempVoiceChannel"> | Date | string
  }

  export type BirthdayCreateInput = {
    userId: string
    day: number
    month: number
    year?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BirthdayUncheckedCreateInput = {
    userId: string
    day: number
    month: number
    year?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BirthdayUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirthdayUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirthdayCreateManyInput = {
    userId: string
    day: number
    month: number
    year?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BirthdayUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirthdayUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildConfigCreateInput = {
    guildId: string
    birthdayChannelId?: string | null
    birthdayRoleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempVoiceSystems?: TempVoiceSystemCreateNestedManyWithoutGuildInput
  }

  export type GuildConfigUncheckedCreateInput = {
    guildId: string
    birthdayChannelId?: string | null
    birthdayRoleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tempVoiceSystems?: TempVoiceSystemUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildConfigUpdateInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    birthdayChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    birthdayRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempVoiceSystems?: TempVoiceSystemUpdateManyWithoutGuildNestedInput
  }

  export type GuildConfigUncheckedUpdateInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    birthdayChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    birthdayRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tempVoiceSystems?: TempVoiceSystemUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type GuildConfigCreateManyInput = {
    guildId: string
    birthdayChannelId?: string | null
    birthdayRoleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuildConfigUpdateManyMutationInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    birthdayChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    birthdayRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildConfigUncheckedUpdateManyInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    birthdayChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    birthdayRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempVoiceSystemCreateInput = {
    id?: string
    name: string
    categoryId: string
    enabled?: boolean
    deleteDelay?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: TempVoiceChannelCreateNestedManyWithoutSystemInput
    joins?: TempVoiceJoinChannelCreateNestedManyWithoutSystemInput
    guild: GuildConfigCreateNestedOneWithoutTempVoiceSystemsInput
    templates?: TempVoiceTemplateCreateNestedManyWithoutSystemInput
  }

  export type TempVoiceSystemUncheckedCreateInput = {
    id?: string
    guildId: string
    name: string
    categoryId: string
    enabled?: boolean
    deleteDelay?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: TempVoiceChannelUncheckedCreateNestedManyWithoutSystemInput
    joins?: TempVoiceJoinChannelUncheckedCreateNestedManyWithoutSystemInput
    templates?: TempVoiceTemplateUncheckedCreateNestedManyWithoutSystemInput
  }

  export type TempVoiceSystemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    deleteDelay?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: TempVoiceChannelUpdateManyWithoutSystemNestedInput
    joins?: TempVoiceJoinChannelUpdateManyWithoutSystemNestedInput
    guild?: GuildConfigUpdateOneRequiredWithoutTempVoiceSystemsNestedInput
    templates?: TempVoiceTemplateUpdateManyWithoutSystemNestedInput
  }

  export type TempVoiceSystemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    deleteDelay?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: TempVoiceChannelUncheckedUpdateManyWithoutSystemNestedInput
    joins?: TempVoiceJoinChannelUncheckedUpdateManyWithoutSystemNestedInput
    templates?: TempVoiceTemplateUncheckedUpdateManyWithoutSystemNestedInput
  }

  export type TempVoiceSystemCreateManyInput = {
    id?: string
    guildId: string
    name: string
    categoryId: string
    enabled?: boolean
    deleteDelay?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TempVoiceSystemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    deleteDelay?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempVoiceSystemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    deleteDelay?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempVoiceJoinChannelCreateInput = {
    id?: string
    channelId: string
    templateType: $Enums.TempVoiceType
    createdAt?: Date | string
    updatedAt?: Date | string
    system: TempVoiceSystemCreateNestedOneWithoutJoinsInput
  }

  export type TempVoiceJoinChannelUncheckedCreateInput = {
    id?: string
    channelId: string
    templateType: $Enums.TempVoiceType
    createdAt?: Date | string
    updatedAt?: Date | string
    systemId: string
  }

  export type TempVoiceJoinChannelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    templateType?: EnumTempVoiceTypeFieldUpdateOperationsInput | $Enums.TempVoiceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    system?: TempVoiceSystemUpdateOneRequiredWithoutJoinsNestedInput
  }

  export type TempVoiceJoinChannelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    templateType?: EnumTempVoiceTypeFieldUpdateOperationsInput | $Enums.TempVoiceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    systemId?: StringFieldUpdateOperationsInput | string
  }

  export type TempVoiceJoinChannelCreateManyInput = {
    id?: string
    channelId: string
    templateType: $Enums.TempVoiceType
    createdAt?: Date | string
    updatedAt?: Date | string
    systemId: string
  }

  export type TempVoiceJoinChannelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    templateType?: EnumTempVoiceTypeFieldUpdateOperationsInput | $Enums.TempVoiceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempVoiceJoinChannelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    templateType?: EnumTempVoiceTypeFieldUpdateOperationsInput | $Enums.TempVoiceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    systemId?: StringFieldUpdateOperationsInput | string
  }

  export type TempVoiceTemplateCreateInput = {
    id?: string
    type: $Enums.TempVoiceType
    nameTemplate: string
    userLimit?: number | null
    bitrate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    system: TempVoiceSystemCreateNestedOneWithoutTemplatesInput
  }

  export type TempVoiceTemplateUncheckedCreateInput = {
    id?: string
    type: $Enums.TempVoiceType
    nameTemplate: string
    userLimit?: number | null
    bitrate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    systemId: string
  }

  export type TempVoiceTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTempVoiceTypeFieldUpdateOperationsInput | $Enums.TempVoiceType
    nameTemplate?: StringFieldUpdateOperationsInput | string
    userLimit?: NullableIntFieldUpdateOperationsInput | number | null
    bitrate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    system?: TempVoiceSystemUpdateOneRequiredWithoutTemplatesNestedInput
  }

  export type TempVoiceTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTempVoiceTypeFieldUpdateOperationsInput | $Enums.TempVoiceType
    nameTemplate?: StringFieldUpdateOperationsInput | string
    userLimit?: NullableIntFieldUpdateOperationsInput | number | null
    bitrate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    systemId?: StringFieldUpdateOperationsInput | string
  }

  export type TempVoiceTemplateCreateManyInput = {
    id?: string
    type: $Enums.TempVoiceType
    nameTemplate: string
    userLimit?: number | null
    bitrate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    systemId: string
  }

  export type TempVoiceTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTempVoiceTypeFieldUpdateOperationsInput | $Enums.TempVoiceType
    nameTemplate?: StringFieldUpdateOperationsInput | string
    userLimit?: NullableIntFieldUpdateOperationsInput | number | null
    bitrate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempVoiceTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTempVoiceTypeFieldUpdateOperationsInput | $Enums.TempVoiceType
    nameTemplate?: StringFieldUpdateOperationsInput | string
    userLimit?: NullableIntFieldUpdateOperationsInput | number | null
    bitrate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    systemId?: StringFieldUpdateOperationsInput | string
  }

  export type TempVoiceChannelCreateInput = {
    id?: string
    channelId: string
    ownerId: string
    templateType: $Enums.TempVoiceType
    createdAt?: Date | string
    lastActiveAt?: Date | string
    system: TempVoiceSystemCreateNestedOneWithoutChannelsInput
  }

  export type TempVoiceChannelUncheckedCreateInput = {
    id?: string
    systemId: string
    channelId: string
    ownerId: string
    templateType: $Enums.TempVoiceType
    createdAt?: Date | string
    lastActiveAt?: Date | string
  }

  export type TempVoiceChannelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    templateType?: EnumTempVoiceTypeFieldUpdateOperationsInput | $Enums.TempVoiceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    system?: TempVoiceSystemUpdateOneRequiredWithoutChannelsNestedInput
  }

  export type TempVoiceChannelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    systemId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    templateType?: EnumTempVoiceTypeFieldUpdateOperationsInput | $Enums.TempVoiceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempVoiceChannelCreateManyInput = {
    id?: string
    systemId: string
    channelId: string
    ownerId: string
    templateType: $Enums.TempVoiceType
    createdAt?: Date | string
    lastActiveAt?: Date | string
  }

  export type TempVoiceChannelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    templateType?: EnumTempVoiceTypeFieldUpdateOperationsInput | $Enums.TempVoiceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempVoiceChannelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    systemId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    templateType?: EnumTempVoiceTypeFieldUpdateOperationsInput | $Enums.TempVoiceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BirthdayCountOrderByAggregateInput = {
    userId?: SortOrder
    day?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BirthdayAvgOrderByAggregateInput = {
    day?: SortOrder
    month?: SortOrder
    year?: SortOrder
  }

  export type BirthdayMaxOrderByAggregateInput = {
    userId?: SortOrder
    day?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BirthdayMinOrderByAggregateInput = {
    userId?: SortOrder
    day?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BirthdaySumOrderByAggregateInput = {
    day?: SortOrder
    month?: SortOrder
    year?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TempVoiceSystemListRelationFilter = {
    every?: TempVoiceSystemWhereInput
    some?: TempVoiceSystemWhereInput
    none?: TempVoiceSystemWhereInput
  }

  export type TempVoiceSystemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuildConfigCountOrderByAggregateInput = {
    guildId?: SortOrder
    birthdayChannelId?: SortOrder
    birthdayRoleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuildConfigMaxOrderByAggregateInput = {
    guildId?: SortOrder
    birthdayChannelId?: SortOrder
    birthdayRoleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuildConfigMinOrderByAggregateInput = {
    guildId?: SortOrder
    birthdayChannelId?: SortOrder
    birthdayRoleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TempVoiceChannelListRelationFilter = {
    every?: TempVoiceChannelWhereInput
    some?: TempVoiceChannelWhereInput
    none?: TempVoiceChannelWhereInput
  }

  export type TempVoiceJoinChannelListRelationFilter = {
    every?: TempVoiceJoinChannelWhereInput
    some?: TempVoiceJoinChannelWhereInput
    none?: TempVoiceJoinChannelWhereInput
  }

  export type GuildConfigScalarRelationFilter = {
    is?: GuildConfigWhereInput
    isNot?: GuildConfigWhereInput
  }

  export type TempVoiceTemplateListRelationFilter = {
    every?: TempVoiceTemplateWhereInput
    some?: TempVoiceTemplateWhereInput
    none?: TempVoiceTemplateWhereInput
  }

  export type TempVoiceChannelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TempVoiceJoinChannelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TempVoiceTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TempVoiceSystemCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    enabled?: SortOrder
    deleteDelay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TempVoiceSystemAvgOrderByAggregateInput = {
    deleteDelay?: SortOrder
  }

  export type TempVoiceSystemMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    enabled?: SortOrder
    deleteDelay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TempVoiceSystemMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    enabled?: SortOrder
    deleteDelay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TempVoiceSystemSumOrderByAggregateInput = {
    deleteDelay?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTempVoiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TempVoiceType | EnumTempVoiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TempVoiceType[] | ListEnumTempVoiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TempVoiceType[] | ListEnumTempVoiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTempVoiceTypeFilter<$PrismaModel> | $Enums.TempVoiceType
  }

  export type TempVoiceSystemScalarRelationFilter = {
    is?: TempVoiceSystemWhereInput
    isNot?: TempVoiceSystemWhereInput
  }

  export type TempVoiceJoinChannelCountOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    templateType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    systemId?: SortOrder
  }

  export type TempVoiceJoinChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    templateType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    systemId?: SortOrder
  }

  export type TempVoiceJoinChannelMinOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    templateType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    systemId?: SortOrder
  }

  export type EnumTempVoiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TempVoiceType | EnumTempVoiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TempVoiceType[] | ListEnumTempVoiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TempVoiceType[] | ListEnumTempVoiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTempVoiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.TempVoiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTempVoiceTypeFilter<$PrismaModel>
    _max?: NestedEnumTempVoiceTypeFilter<$PrismaModel>
  }

  export type TempVoiceTemplateSystemIdTypeCompoundUniqueInput = {
    systemId: string
    type: $Enums.TempVoiceType
  }

  export type TempVoiceTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    nameTemplate?: SortOrder
    userLimit?: SortOrder
    bitrate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    systemId?: SortOrder
  }

  export type TempVoiceTemplateAvgOrderByAggregateInput = {
    userLimit?: SortOrder
    bitrate?: SortOrder
  }

  export type TempVoiceTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    nameTemplate?: SortOrder
    userLimit?: SortOrder
    bitrate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    systemId?: SortOrder
  }

  export type TempVoiceTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    nameTemplate?: SortOrder
    userLimit?: SortOrder
    bitrate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    systemId?: SortOrder
  }

  export type TempVoiceTemplateSumOrderByAggregateInput = {
    userLimit?: SortOrder
    bitrate?: SortOrder
  }

  export type TempVoiceChannelCountOrderByAggregateInput = {
    id?: SortOrder
    systemId?: SortOrder
    channelId?: SortOrder
    ownerId?: SortOrder
    templateType?: SortOrder
    createdAt?: SortOrder
    lastActiveAt?: SortOrder
  }

  export type TempVoiceChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    systemId?: SortOrder
    channelId?: SortOrder
    ownerId?: SortOrder
    templateType?: SortOrder
    createdAt?: SortOrder
    lastActiveAt?: SortOrder
  }

  export type TempVoiceChannelMinOrderByAggregateInput = {
    id?: SortOrder
    systemId?: SortOrder
    channelId?: SortOrder
    ownerId?: SortOrder
    templateType?: SortOrder
    createdAt?: SortOrder
    lastActiveAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TempVoiceSystemCreateNestedManyWithoutGuildInput = {
    create?: XOR<TempVoiceSystemCreateWithoutGuildInput, TempVoiceSystemUncheckedCreateWithoutGuildInput> | TempVoiceSystemCreateWithoutGuildInput[] | TempVoiceSystemUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: TempVoiceSystemCreateOrConnectWithoutGuildInput | TempVoiceSystemCreateOrConnectWithoutGuildInput[]
    createMany?: TempVoiceSystemCreateManyGuildInputEnvelope
    connect?: TempVoiceSystemWhereUniqueInput | TempVoiceSystemWhereUniqueInput[]
  }

  export type TempVoiceSystemUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<TempVoiceSystemCreateWithoutGuildInput, TempVoiceSystemUncheckedCreateWithoutGuildInput> | TempVoiceSystemCreateWithoutGuildInput[] | TempVoiceSystemUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: TempVoiceSystemCreateOrConnectWithoutGuildInput | TempVoiceSystemCreateOrConnectWithoutGuildInput[]
    createMany?: TempVoiceSystemCreateManyGuildInputEnvelope
    connect?: TempVoiceSystemWhereUniqueInput | TempVoiceSystemWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TempVoiceSystemUpdateManyWithoutGuildNestedInput = {
    create?: XOR<TempVoiceSystemCreateWithoutGuildInput, TempVoiceSystemUncheckedCreateWithoutGuildInput> | TempVoiceSystemCreateWithoutGuildInput[] | TempVoiceSystemUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: TempVoiceSystemCreateOrConnectWithoutGuildInput | TempVoiceSystemCreateOrConnectWithoutGuildInput[]
    upsert?: TempVoiceSystemUpsertWithWhereUniqueWithoutGuildInput | TempVoiceSystemUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: TempVoiceSystemCreateManyGuildInputEnvelope
    set?: TempVoiceSystemWhereUniqueInput | TempVoiceSystemWhereUniqueInput[]
    disconnect?: TempVoiceSystemWhereUniqueInput | TempVoiceSystemWhereUniqueInput[]
    delete?: TempVoiceSystemWhereUniqueInput | TempVoiceSystemWhereUniqueInput[]
    connect?: TempVoiceSystemWhereUniqueInput | TempVoiceSystemWhereUniqueInput[]
    update?: TempVoiceSystemUpdateWithWhereUniqueWithoutGuildInput | TempVoiceSystemUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: TempVoiceSystemUpdateManyWithWhereWithoutGuildInput | TempVoiceSystemUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: TempVoiceSystemScalarWhereInput | TempVoiceSystemScalarWhereInput[]
  }

  export type TempVoiceSystemUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<TempVoiceSystemCreateWithoutGuildInput, TempVoiceSystemUncheckedCreateWithoutGuildInput> | TempVoiceSystemCreateWithoutGuildInput[] | TempVoiceSystemUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: TempVoiceSystemCreateOrConnectWithoutGuildInput | TempVoiceSystemCreateOrConnectWithoutGuildInput[]
    upsert?: TempVoiceSystemUpsertWithWhereUniqueWithoutGuildInput | TempVoiceSystemUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: TempVoiceSystemCreateManyGuildInputEnvelope
    set?: TempVoiceSystemWhereUniqueInput | TempVoiceSystemWhereUniqueInput[]
    disconnect?: TempVoiceSystemWhereUniqueInput | TempVoiceSystemWhereUniqueInput[]
    delete?: TempVoiceSystemWhereUniqueInput | TempVoiceSystemWhereUniqueInput[]
    connect?: TempVoiceSystemWhereUniqueInput | TempVoiceSystemWhereUniqueInput[]
    update?: TempVoiceSystemUpdateWithWhereUniqueWithoutGuildInput | TempVoiceSystemUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: TempVoiceSystemUpdateManyWithWhereWithoutGuildInput | TempVoiceSystemUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: TempVoiceSystemScalarWhereInput | TempVoiceSystemScalarWhereInput[]
  }

  export type TempVoiceChannelCreateNestedManyWithoutSystemInput = {
    create?: XOR<TempVoiceChannelCreateWithoutSystemInput, TempVoiceChannelUncheckedCreateWithoutSystemInput> | TempVoiceChannelCreateWithoutSystemInput[] | TempVoiceChannelUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: TempVoiceChannelCreateOrConnectWithoutSystemInput | TempVoiceChannelCreateOrConnectWithoutSystemInput[]
    createMany?: TempVoiceChannelCreateManySystemInputEnvelope
    connect?: TempVoiceChannelWhereUniqueInput | TempVoiceChannelWhereUniqueInput[]
  }

  export type TempVoiceJoinChannelCreateNestedManyWithoutSystemInput = {
    create?: XOR<TempVoiceJoinChannelCreateWithoutSystemInput, TempVoiceJoinChannelUncheckedCreateWithoutSystemInput> | TempVoiceJoinChannelCreateWithoutSystemInput[] | TempVoiceJoinChannelUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: TempVoiceJoinChannelCreateOrConnectWithoutSystemInput | TempVoiceJoinChannelCreateOrConnectWithoutSystemInput[]
    createMany?: TempVoiceJoinChannelCreateManySystemInputEnvelope
    connect?: TempVoiceJoinChannelWhereUniqueInput | TempVoiceJoinChannelWhereUniqueInput[]
  }

  export type GuildConfigCreateNestedOneWithoutTempVoiceSystemsInput = {
    create?: XOR<GuildConfigCreateWithoutTempVoiceSystemsInput, GuildConfigUncheckedCreateWithoutTempVoiceSystemsInput>
    connectOrCreate?: GuildConfigCreateOrConnectWithoutTempVoiceSystemsInput
    connect?: GuildConfigWhereUniqueInput
  }

  export type TempVoiceTemplateCreateNestedManyWithoutSystemInput = {
    create?: XOR<TempVoiceTemplateCreateWithoutSystemInput, TempVoiceTemplateUncheckedCreateWithoutSystemInput> | TempVoiceTemplateCreateWithoutSystemInput[] | TempVoiceTemplateUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: TempVoiceTemplateCreateOrConnectWithoutSystemInput | TempVoiceTemplateCreateOrConnectWithoutSystemInput[]
    createMany?: TempVoiceTemplateCreateManySystemInputEnvelope
    connect?: TempVoiceTemplateWhereUniqueInput | TempVoiceTemplateWhereUniqueInput[]
  }

  export type TempVoiceChannelUncheckedCreateNestedManyWithoutSystemInput = {
    create?: XOR<TempVoiceChannelCreateWithoutSystemInput, TempVoiceChannelUncheckedCreateWithoutSystemInput> | TempVoiceChannelCreateWithoutSystemInput[] | TempVoiceChannelUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: TempVoiceChannelCreateOrConnectWithoutSystemInput | TempVoiceChannelCreateOrConnectWithoutSystemInput[]
    createMany?: TempVoiceChannelCreateManySystemInputEnvelope
    connect?: TempVoiceChannelWhereUniqueInput | TempVoiceChannelWhereUniqueInput[]
  }

  export type TempVoiceJoinChannelUncheckedCreateNestedManyWithoutSystemInput = {
    create?: XOR<TempVoiceJoinChannelCreateWithoutSystemInput, TempVoiceJoinChannelUncheckedCreateWithoutSystemInput> | TempVoiceJoinChannelCreateWithoutSystemInput[] | TempVoiceJoinChannelUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: TempVoiceJoinChannelCreateOrConnectWithoutSystemInput | TempVoiceJoinChannelCreateOrConnectWithoutSystemInput[]
    createMany?: TempVoiceJoinChannelCreateManySystemInputEnvelope
    connect?: TempVoiceJoinChannelWhereUniqueInput | TempVoiceJoinChannelWhereUniqueInput[]
  }

  export type TempVoiceTemplateUncheckedCreateNestedManyWithoutSystemInput = {
    create?: XOR<TempVoiceTemplateCreateWithoutSystemInput, TempVoiceTemplateUncheckedCreateWithoutSystemInput> | TempVoiceTemplateCreateWithoutSystemInput[] | TempVoiceTemplateUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: TempVoiceTemplateCreateOrConnectWithoutSystemInput | TempVoiceTemplateCreateOrConnectWithoutSystemInput[]
    createMany?: TempVoiceTemplateCreateManySystemInputEnvelope
    connect?: TempVoiceTemplateWhereUniqueInput | TempVoiceTemplateWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TempVoiceChannelUpdateManyWithoutSystemNestedInput = {
    create?: XOR<TempVoiceChannelCreateWithoutSystemInput, TempVoiceChannelUncheckedCreateWithoutSystemInput> | TempVoiceChannelCreateWithoutSystemInput[] | TempVoiceChannelUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: TempVoiceChannelCreateOrConnectWithoutSystemInput | TempVoiceChannelCreateOrConnectWithoutSystemInput[]
    upsert?: TempVoiceChannelUpsertWithWhereUniqueWithoutSystemInput | TempVoiceChannelUpsertWithWhereUniqueWithoutSystemInput[]
    createMany?: TempVoiceChannelCreateManySystemInputEnvelope
    set?: TempVoiceChannelWhereUniqueInput | TempVoiceChannelWhereUniqueInput[]
    disconnect?: TempVoiceChannelWhereUniqueInput | TempVoiceChannelWhereUniqueInput[]
    delete?: TempVoiceChannelWhereUniqueInput | TempVoiceChannelWhereUniqueInput[]
    connect?: TempVoiceChannelWhereUniqueInput | TempVoiceChannelWhereUniqueInput[]
    update?: TempVoiceChannelUpdateWithWhereUniqueWithoutSystemInput | TempVoiceChannelUpdateWithWhereUniqueWithoutSystemInput[]
    updateMany?: TempVoiceChannelUpdateManyWithWhereWithoutSystemInput | TempVoiceChannelUpdateManyWithWhereWithoutSystemInput[]
    deleteMany?: TempVoiceChannelScalarWhereInput | TempVoiceChannelScalarWhereInput[]
  }

  export type TempVoiceJoinChannelUpdateManyWithoutSystemNestedInput = {
    create?: XOR<TempVoiceJoinChannelCreateWithoutSystemInput, TempVoiceJoinChannelUncheckedCreateWithoutSystemInput> | TempVoiceJoinChannelCreateWithoutSystemInput[] | TempVoiceJoinChannelUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: TempVoiceJoinChannelCreateOrConnectWithoutSystemInput | TempVoiceJoinChannelCreateOrConnectWithoutSystemInput[]
    upsert?: TempVoiceJoinChannelUpsertWithWhereUniqueWithoutSystemInput | TempVoiceJoinChannelUpsertWithWhereUniqueWithoutSystemInput[]
    createMany?: TempVoiceJoinChannelCreateManySystemInputEnvelope
    set?: TempVoiceJoinChannelWhereUniqueInput | TempVoiceJoinChannelWhereUniqueInput[]
    disconnect?: TempVoiceJoinChannelWhereUniqueInput | TempVoiceJoinChannelWhereUniqueInput[]
    delete?: TempVoiceJoinChannelWhereUniqueInput | TempVoiceJoinChannelWhereUniqueInput[]
    connect?: TempVoiceJoinChannelWhereUniqueInput | TempVoiceJoinChannelWhereUniqueInput[]
    update?: TempVoiceJoinChannelUpdateWithWhereUniqueWithoutSystemInput | TempVoiceJoinChannelUpdateWithWhereUniqueWithoutSystemInput[]
    updateMany?: TempVoiceJoinChannelUpdateManyWithWhereWithoutSystemInput | TempVoiceJoinChannelUpdateManyWithWhereWithoutSystemInput[]
    deleteMany?: TempVoiceJoinChannelScalarWhereInput | TempVoiceJoinChannelScalarWhereInput[]
  }

  export type GuildConfigUpdateOneRequiredWithoutTempVoiceSystemsNestedInput = {
    create?: XOR<GuildConfigCreateWithoutTempVoiceSystemsInput, GuildConfigUncheckedCreateWithoutTempVoiceSystemsInput>
    connectOrCreate?: GuildConfigCreateOrConnectWithoutTempVoiceSystemsInput
    upsert?: GuildConfigUpsertWithoutTempVoiceSystemsInput
    connect?: GuildConfigWhereUniqueInput
    update?: XOR<XOR<GuildConfigUpdateToOneWithWhereWithoutTempVoiceSystemsInput, GuildConfigUpdateWithoutTempVoiceSystemsInput>, GuildConfigUncheckedUpdateWithoutTempVoiceSystemsInput>
  }

  export type TempVoiceTemplateUpdateManyWithoutSystemNestedInput = {
    create?: XOR<TempVoiceTemplateCreateWithoutSystemInput, TempVoiceTemplateUncheckedCreateWithoutSystemInput> | TempVoiceTemplateCreateWithoutSystemInput[] | TempVoiceTemplateUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: TempVoiceTemplateCreateOrConnectWithoutSystemInput | TempVoiceTemplateCreateOrConnectWithoutSystemInput[]
    upsert?: TempVoiceTemplateUpsertWithWhereUniqueWithoutSystemInput | TempVoiceTemplateUpsertWithWhereUniqueWithoutSystemInput[]
    createMany?: TempVoiceTemplateCreateManySystemInputEnvelope
    set?: TempVoiceTemplateWhereUniqueInput | TempVoiceTemplateWhereUniqueInput[]
    disconnect?: TempVoiceTemplateWhereUniqueInput | TempVoiceTemplateWhereUniqueInput[]
    delete?: TempVoiceTemplateWhereUniqueInput | TempVoiceTemplateWhereUniqueInput[]
    connect?: TempVoiceTemplateWhereUniqueInput | TempVoiceTemplateWhereUniqueInput[]
    update?: TempVoiceTemplateUpdateWithWhereUniqueWithoutSystemInput | TempVoiceTemplateUpdateWithWhereUniqueWithoutSystemInput[]
    updateMany?: TempVoiceTemplateUpdateManyWithWhereWithoutSystemInput | TempVoiceTemplateUpdateManyWithWhereWithoutSystemInput[]
    deleteMany?: TempVoiceTemplateScalarWhereInput | TempVoiceTemplateScalarWhereInput[]
  }

  export type TempVoiceChannelUncheckedUpdateManyWithoutSystemNestedInput = {
    create?: XOR<TempVoiceChannelCreateWithoutSystemInput, TempVoiceChannelUncheckedCreateWithoutSystemInput> | TempVoiceChannelCreateWithoutSystemInput[] | TempVoiceChannelUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: TempVoiceChannelCreateOrConnectWithoutSystemInput | TempVoiceChannelCreateOrConnectWithoutSystemInput[]
    upsert?: TempVoiceChannelUpsertWithWhereUniqueWithoutSystemInput | TempVoiceChannelUpsertWithWhereUniqueWithoutSystemInput[]
    createMany?: TempVoiceChannelCreateManySystemInputEnvelope
    set?: TempVoiceChannelWhereUniqueInput | TempVoiceChannelWhereUniqueInput[]
    disconnect?: TempVoiceChannelWhereUniqueInput | TempVoiceChannelWhereUniqueInput[]
    delete?: TempVoiceChannelWhereUniqueInput | TempVoiceChannelWhereUniqueInput[]
    connect?: TempVoiceChannelWhereUniqueInput | TempVoiceChannelWhereUniqueInput[]
    update?: TempVoiceChannelUpdateWithWhereUniqueWithoutSystemInput | TempVoiceChannelUpdateWithWhereUniqueWithoutSystemInput[]
    updateMany?: TempVoiceChannelUpdateManyWithWhereWithoutSystemInput | TempVoiceChannelUpdateManyWithWhereWithoutSystemInput[]
    deleteMany?: TempVoiceChannelScalarWhereInput | TempVoiceChannelScalarWhereInput[]
  }

  export type TempVoiceJoinChannelUncheckedUpdateManyWithoutSystemNestedInput = {
    create?: XOR<TempVoiceJoinChannelCreateWithoutSystemInput, TempVoiceJoinChannelUncheckedCreateWithoutSystemInput> | TempVoiceJoinChannelCreateWithoutSystemInput[] | TempVoiceJoinChannelUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: TempVoiceJoinChannelCreateOrConnectWithoutSystemInput | TempVoiceJoinChannelCreateOrConnectWithoutSystemInput[]
    upsert?: TempVoiceJoinChannelUpsertWithWhereUniqueWithoutSystemInput | TempVoiceJoinChannelUpsertWithWhereUniqueWithoutSystemInput[]
    createMany?: TempVoiceJoinChannelCreateManySystemInputEnvelope
    set?: TempVoiceJoinChannelWhereUniqueInput | TempVoiceJoinChannelWhereUniqueInput[]
    disconnect?: TempVoiceJoinChannelWhereUniqueInput | TempVoiceJoinChannelWhereUniqueInput[]
    delete?: TempVoiceJoinChannelWhereUniqueInput | TempVoiceJoinChannelWhereUniqueInput[]
    connect?: TempVoiceJoinChannelWhereUniqueInput | TempVoiceJoinChannelWhereUniqueInput[]
    update?: TempVoiceJoinChannelUpdateWithWhereUniqueWithoutSystemInput | TempVoiceJoinChannelUpdateWithWhereUniqueWithoutSystemInput[]
    updateMany?: TempVoiceJoinChannelUpdateManyWithWhereWithoutSystemInput | TempVoiceJoinChannelUpdateManyWithWhereWithoutSystemInput[]
    deleteMany?: TempVoiceJoinChannelScalarWhereInput | TempVoiceJoinChannelScalarWhereInput[]
  }

  export type TempVoiceTemplateUncheckedUpdateManyWithoutSystemNestedInput = {
    create?: XOR<TempVoiceTemplateCreateWithoutSystemInput, TempVoiceTemplateUncheckedCreateWithoutSystemInput> | TempVoiceTemplateCreateWithoutSystemInput[] | TempVoiceTemplateUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: TempVoiceTemplateCreateOrConnectWithoutSystemInput | TempVoiceTemplateCreateOrConnectWithoutSystemInput[]
    upsert?: TempVoiceTemplateUpsertWithWhereUniqueWithoutSystemInput | TempVoiceTemplateUpsertWithWhereUniqueWithoutSystemInput[]
    createMany?: TempVoiceTemplateCreateManySystemInputEnvelope
    set?: TempVoiceTemplateWhereUniqueInput | TempVoiceTemplateWhereUniqueInput[]
    disconnect?: TempVoiceTemplateWhereUniqueInput | TempVoiceTemplateWhereUniqueInput[]
    delete?: TempVoiceTemplateWhereUniqueInput | TempVoiceTemplateWhereUniqueInput[]
    connect?: TempVoiceTemplateWhereUniqueInput | TempVoiceTemplateWhereUniqueInput[]
    update?: TempVoiceTemplateUpdateWithWhereUniqueWithoutSystemInput | TempVoiceTemplateUpdateWithWhereUniqueWithoutSystemInput[]
    updateMany?: TempVoiceTemplateUpdateManyWithWhereWithoutSystemInput | TempVoiceTemplateUpdateManyWithWhereWithoutSystemInput[]
    deleteMany?: TempVoiceTemplateScalarWhereInput | TempVoiceTemplateScalarWhereInput[]
  }

  export type TempVoiceSystemCreateNestedOneWithoutJoinsInput = {
    create?: XOR<TempVoiceSystemCreateWithoutJoinsInput, TempVoiceSystemUncheckedCreateWithoutJoinsInput>
    connectOrCreate?: TempVoiceSystemCreateOrConnectWithoutJoinsInput
    connect?: TempVoiceSystemWhereUniqueInput
  }

  export type EnumTempVoiceTypeFieldUpdateOperationsInput = {
    set?: $Enums.TempVoiceType
  }

  export type TempVoiceSystemUpdateOneRequiredWithoutJoinsNestedInput = {
    create?: XOR<TempVoiceSystemCreateWithoutJoinsInput, TempVoiceSystemUncheckedCreateWithoutJoinsInput>
    connectOrCreate?: TempVoiceSystemCreateOrConnectWithoutJoinsInput
    upsert?: TempVoiceSystemUpsertWithoutJoinsInput
    connect?: TempVoiceSystemWhereUniqueInput
    update?: XOR<XOR<TempVoiceSystemUpdateToOneWithWhereWithoutJoinsInput, TempVoiceSystemUpdateWithoutJoinsInput>, TempVoiceSystemUncheckedUpdateWithoutJoinsInput>
  }

  export type TempVoiceSystemCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<TempVoiceSystemCreateWithoutTemplatesInput, TempVoiceSystemUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: TempVoiceSystemCreateOrConnectWithoutTemplatesInput
    connect?: TempVoiceSystemWhereUniqueInput
  }

  export type TempVoiceSystemUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<TempVoiceSystemCreateWithoutTemplatesInput, TempVoiceSystemUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: TempVoiceSystemCreateOrConnectWithoutTemplatesInput
    upsert?: TempVoiceSystemUpsertWithoutTemplatesInput
    connect?: TempVoiceSystemWhereUniqueInput
    update?: XOR<XOR<TempVoiceSystemUpdateToOneWithWhereWithoutTemplatesInput, TempVoiceSystemUpdateWithoutTemplatesInput>, TempVoiceSystemUncheckedUpdateWithoutTemplatesInput>
  }

  export type TempVoiceSystemCreateNestedOneWithoutChannelsInput = {
    create?: XOR<TempVoiceSystemCreateWithoutChannelsInput, TempVoiceSystemUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: TempVoiceSystemCreateOrConnectWithoutChannelsInput
    connect?: TempVoiceSystemWhereUniqueInput
  }

  export type TempVoiceSystemUpdateOneRequiredWithoutChannelsNestedInput = {
    create?: XOR<TempVoiceSystemCreateWithoutChannelsInput, TempVoiceSystemUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: TempVoiceSystemCreateOrConnectWithoutChannelsInput
    upsert?: TempVoiceSystemUpsertWithoutChannelsInput
    connect?: TempVoiceSystemWhereUniqueInput
    update?: XOR<XOR<TempVoiceSystemUpdateToOneWithWhereWithoutChannelsInput, TempVoiceSystemUpdateWithoutChannelsInput>, TempVoiceSystemUncheckedUpdateWithoutChannelsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTempVoiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TempVoiceType | EnumTempVoiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TempVoiceType[] | ListEnumTempVoiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TempVoiceType[] | ListEnumTempVoiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTempVoiceTypeFilter<$PrismaModel> | $Enums.TempVoiceType
  }

  export type NestedEnumTempVoiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TempVoiceType | EnumTempVoiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TempVoiceType[] | ListEnumTempVoiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TempVoiceType[] | ListEnumTempVoiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTempVoiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.TempVoiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTempVoiceTypeFilter<$PrismaModel>
    _max?: NestedEnumTempVoiceTypeFilter<$PrismaModel>
  }

  export type TempVoiceSystemCreateWithoutGuildInput = {
    id?: string
    name: string
    categoryId: string
    enabled?: boolean
    deleteDelay?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: TempVoiceChannelCreateNestedManyWithoutSystemInput
    joins?: TempVoiceJoinChannelCreateNestedManyWithoutSystemInput
    templates?: TempVoiceTemplateCreateNestedManyWithoutSystemInput
  }

  export type TempVoiceSystemUncheckedCreateWithoutGuildInput = {
    id?: string
    name: string
    categoryId: string
    enabled?: boolean
    deleteDelay?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: TempVoiceChannelUncheckedCreateNestedManyWithoutSystemInput
    joins?: TempVoiceJoinChannelUncheckedCreateNestedManyWithoutSystemInput
    templates?: TempVoiceTemplateUncheckedCreateNestedManyWithoutSystemInput
  }

  export type TempVoiceSystemCreateOrConnectWithoutGuildInput = {
    where: TempVoiceSystemWhereUniqueInput
    create: XOR<TempVoiceSystemCreateWithoutGuildInput, TempVoiceSystemUncheckedCreateWithoutGuildInput>
  }

  export type TempVoiceSystemCreateManyGuildInputEnvelope = {
    data: TempVoiceSystemCreateManyGuildInput | TempVoiceSystemCreateManyGuildInput[]
    skipDuplicates?: boolean
  }

  export type TempVoiceSystemUpsertWithWhereUniqueWithoutGuildInput = {
    where: TempVoiceSystemWhereUniqueInput
    update: XOR<TempVoiceSystemUpdateWithoutGuildInput, TempVoiceSystemUncheckedUpdateWithoutGuildInput>
    create: XOR<TempVoiceSystemCreateWithoutGuildInput, TempVoiceSystemUncheckedCreateWithoutGuildInput>
  }

  export type TempVoiceSystemUpdateWithWhereUniqueWithoutGuildInput = {
    where: TempVoiceSystemWhereUniqueInput
    data: XOR<TempVoiceSystemUpdateWithoutGuildInput, TempVoiceSystemUncheckedUpdateWithoutGuildInput>
  }

  export type TempVoiceSystemUpdateManyWithWhereWithoutGuildInput = {
    where: TempVoiceSystemScalarWhereInput
    data: XOR<TempVoiceSystemUpdateManyMutationInput, TempVoiceSystemUncheckedUpdateManyWithoutGuildInput>
  }

  export type TempVoiceSystemScalarWhereInput = {
    AND?: TempVoiceSystemScalarWhereInput | TempVoiceSystemScalarWhereInput[]
    OR?: TempVoiceSystemScalarWhereInput[]
    NOT?: TempVoiceSystemScalarWhereInput | TempVoiceSystemScalarWhereInput[]
    id?: StringFilter<"TempVoiceSystem"> | string
    guildId?: StringFilter<"TempVoiceSystem"> | string
    name?: StringFilter<"TempVoiceSystem"> | string
    categoryId?: StringFilter<"TempVoiceSystem"> | string
    enabled?: BoolFilter<"TempVoiceSystem"> | boolean
    deleteDelay?: IntFilter<"TempVoiceSystem"> | number
    createdAt?: DateTimeFilter<"TempVoiceSystem"> | Date | string
    updatedAt?: DateTimeFilter<"TempVoiceSystem"> | Date | string
  }

  export type TempVoiceChannelCreateWithoutSystemInput = {
    id?: string
    channelId: string
    ownerId: string
    templateType: $Enums.TempVoiceType
    createdAt?: Date | string
    lastActiveAt?: Date | string
  }

  export type TempVoiceChannelUncheckedCreateWithoutSystemInput = {
    id?: string
    channelId: string
    ownerId: string
    templateType: $Enums.TempVoiceType
    createdAt?: Date | string
    lastActiveAt?: Date | string
  }

  export type TempVoiceChannelCreateOrConnectWithoutSystemInput = {
    where: TempVoiceChannelWhereUniqueInput
    create: XOR<TempVoiceChannelCreateWithoutSystemInput, TempVoiceChannelUncheckedCreateWithoutSystemInput>
  }

  export type TempVoiceChannelCreateManySystemInputEnvelope = {
    data: TempVoiceChannelCreateManySystemInput | TempVoiceChannelCreateManySystemInput[]
    skipDuplicates?: boolean
  }

  export type TempVoiceJoinChannelCreateWithoutSystemInput = {
    id?: string
    channelId: string
    templateType: $Enums.TempVoiceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TempVoiceJoinChannelUncheckedCreateWithoutSystemInput = {
    id?: string
    channelId: string
    templateType: $Enums.TempVoiceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TempVoiceJoinChannelCreateOrConnectWithoutSystemInput = {
    where: TempVoiceJoinChannelWhereUniqueInput
    create: XOR<TempVoiceJoinChannelCreateWithoutSystemInput, TempVoiceJoinChannelUncheckedCreateWithoutSystemInput>
  }

  export type TempVoiceJoinChannelCreateManySystemInputEnvelope = {
    data: TempVoiceJoinChannelCreateManySystemInput | TempVoiceJoinChannelCreateManySystemInput[]
    skipDuplicates?: boolean
  }

  export type GuildConfigCreateWithoutTempVoiceSystemsInput = {
    guildId: string
    birthdayChannelId?: string | null
    birthdayRoleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuildConfigUncheckedCreateWithoutTempVoiceSystemsInput = {
    guildId: string
    birthdayChannelId?: string | null
    birthdayRoleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuildConfigCreateOrConnectWithoutTempVoiceSystemsInput = {
    where: GuildConfigWhereUniqueInput
    create: XOR<GuildConfigCreateWithoutTempVoiceSystemsInput, GuildConfigUncheckedCreateWithoutTempVoiceSystemsInput>
  }

  export type TempVoiceTemplateCreateWithoutSystemInput = {
    id?: string
    type: $Enums.TempVoiceType
    nameTemplate: string
    userLimit?: number | null
    bitrate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TempVoiceTemplateUncheckedCreateWithoutSystemInput = {
    id?: string
    type: $Enums.TempVoiceType
    nameTemplate: string
    userLimit?: number | null
    bitrate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TempVoiceTemplateCreateOrConnectWithoutSystemInput = {
    where: TempVoiceTemplateWhereUniqueInput
    create: XOR<TempVoiceTemplateCreateWithoutSystemInput, TempVoiceTemplateUncheckedCreateWithoutSystemInput>
  }

  export type TempVoiceTemplateCreateManySystemInputEnvelope = {
    data: TempVoiceTemplateCreateManySystemInput | TempVoiceTemplateCreateManySystemInput[]
    skipDuplicates?: boolean
  }

  export type TempVoiceChannelUpsertWithWhereUniqueWithoutSystemInput = {
    where: TempVoiceChannelWhereUniqueInput
    update: XOR<TempVoiceChannelUpdateWithoutSystemInput, TempVoiceChannelUncheckedUpdateWithoutSystemInput>
    create: XOR<TempVoiceChannelCreateWithoutSystemInput, TempVoiceChannelUncheckedCreateWithoutSystemInput>
  }

  export type TempVoiceChannelUpdateWithWhereUniqueWithoutSystemInput = {
    where: TempVoiceChannelWhereUniqueInput
    data: XOR<TempVoiceChannelUpdateWithoutSystemInput, TempVoiceChannelUncheckedUpdateWithoutSystemInput>
  }

  export type TempVoiceChannelUpdateManyWithWhereWithoutSystemInput = {
    where: TempVoiceChannelScalarWhereInput
    data: XOR<TempVoiceChannelUpdateManyMutationInput, TempVoiceChannelUncheckedUpdateManyWithoutSystemInput>
  }

  export type TempVoiceChannelScalarWhereInput = {
    AND?: TempVoiceChannelScalarWhereInput | TempVoiceChannelScalarWhereInput[]
    OR?: TempVoiceChannelScalarWhereInput[]
    NOT?: TempVoiceChannelScalarWhereInput | TempVoiceChannelScalarWhereInput[]
    id?: StringFilter<"TempVoiceChannel"> | string
    systemId?: StringFilter<"TempVoiceChannel"> | string
    channelId?: StringFilter<"TempVoiceChannel"> | string
    ownerId?: StringFilter<"TempVoiceChannel"> | string
    templateType?: EnumTempVoiceTypeFilter<"TempVoiceChannel"> | $Enums.TempVoiceType
    createdAt?: DateTimeFilter<"TempVoiceChannel"> | Date | string
    lastActiveAt?: DateTimeFilter<"TempVoiceChannel"> | Date | string
  }

  export type TempVoiceJoinChannelUpsertWithWhereUniqueWithoutSystemInput = {
    where: TempVoiceJoinChannelWhereUniqueInput
    update: XOR<TempVoiceJoinChannelUpdateWithoutSystemInput, TempVoiceJoinChannelUncheckedUpdateWithoutSystemInput>
    create: XOR<TempVoiceJoinChannelCreateWithoutSystemInput, TempVoiceJoinChannelUncheckedCreateWithoutSystemInput>
  }

  export type TempVoiceJoinChannelUpdateWithWhereUniqueWithoutSystemInput = {
    where: TempVoiceJoinChannelWhereUniqueInput
    data: XOR<TempVoiceJoinChannelUpdateWithoutSystemInput, TempVoiceJoinChannelUncheckedUpdateWithoutSystemInput>
  }

  export type TempVoiceJoinChannelUpdateManyWithWhereWithoutSystemInput = {
    where: TempVoiceJoinChannelScalarWhereInput
    data: XOR<TempVoiceJoinChannelUpdateManyMutationInput, TempVoiceJoinChannelUncheckedUpdateManyWithoutSystemInput>
  }

  export type TempVoiceJoinChannelScalarWhereInput = {
    AND?: TempVoiceJoinChannelScalarWhereInput | TempVoiceJoinChannelScalarWhereInput[]
    OR?: TempVoiceJoinChannelScalarWhereInput[]
    NOT?: TempVoiceJoinChannelScalarWhereInput | TempVoiceJoinChannelScalarWhereInput[]
    id?: StringFilter<"TempVoiceJoinChannel"> | string
    channelId?: StringFilter<"TempVoiceJoinChannel"> | string
    templateType?: EnumTempVoiceTypeFilter<"TempVoiceJoinChannel"> | $Enums.TempVoiceType
    createdAt?: DateTimeFilter<"TempVoiceJoinChannel"> | Date | string
    updatedAt?: DateTimeFilter<"TempVoiceJoinChannel"> | Date | string
    systemId?: StringFilter<"TempVoiceJoinChannel"> | string
  }

  export type GuildConfigUpsertWithoutTempVoiceSystemsInput = {
    update: XOR<GuildConfigUpdateWithoutTempVoiceSystemsInput, GuildConfigUncheckedUpdateWithoutTempVoiceSystemsInput>
    create: XOR<GuildConfigCreateWithoutTempVoiceSystemsInput, GuildConfigUncheckedCreateWithoutTempVoiceSystemsInput>
    where?: GuildConfigWhereInput
  }

  export type GuildConfigUpdateToOneWithWhereWithoutTempVoiceSystemsInput = {
    where?: GuildConfigWhereInput
    data: XOR<GuildConfigUpdateWithoutTempVoiceSystemsInput, GuildConfigUncheckedUpdateWithoutTempVoiceSystemsInput>
  }

  export type GuildConfigUpdateWithoutTempVoiceSystemsInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    birthdayChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    birthdayRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildConfigUncheckedUpdateWithoutTempVoiceSystemsInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    birthdayChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    birthdayRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempVoiceTemplateUpsertWithWhereUniqueWithoutSystemInput = {
    where: TempVoiceTemplateWhereUniqueInput
    update: XOR<TempVoiceTemplateUpdateWithoutSystemInput, TempVoiceTemplateUncheckedUpdateWithoutSystemInput>
    create: XOR<TempVoiceTemplateCreateWithoutSystemInput, TempVoiceTemplateUncheckedCreateWithoutSystemInput>
  }

  export type TempVoiceTemplateUpdateWithWhereUniqueWithoutSystemInput = {
    where: TempVoiceTemplateWhereUniqueInput
    data: XOR<TempVoiceTemplateUpdateWithoutSystemInput, TempVoiceTemplateUncheckedUpdateWithoutSystemInput>
  }

  export type TempVoiceTemplateUpdateManyWithWhereWithoutSystemInput = {
    where: TempVoiceTemplateScalarWhereInput
    data: XOR<TempVoiceTemplateUpdateManyMutationInput, TempVoiceTemplateUncheckedUpdateManyWithoutSystemInput>
  }

  export type TempVoiceTemplateScalarWhereInput = {
    AND?: TempVoiceTemplateScalarWhereInput | TempVoiceTemplateScalarWhereInput[]
    OR?: TempVoiceTemplateScalarWhereInput[]
    NOT?: TempVoiceTemplateScalarWhereInput | TempVoiceTemplateScalarWhereInput[]
    id?: StringFilter<"TempVoiceTemplate"> | string
    type?: EnumTempVoiceTypeFilter<"TempVoiceTemplate"> | $Enums.TempVoiceType
    nameTemplate?: StringFilter<"TempVoiceTemplate"> | string
    userLimit?: IntNullableFilter<"TempVoiceTemplate"> | number | null
    bitrate?: IntNullableFilter<"TempVoiceTemplate"> | number | null
    createdAt?: DateTimeFilter<"TempVoiceTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"TempVoiceTemplate"> | Date | string
    systemId?: StringFilter<"TempVoiceTemplate"> | string
  }

  export type TempVoiceSystemCreateWithoutJoinsInput = {
    id?: string
    name: string
    categoryId: string
    enabled?: boolean
    deleteDelay?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: TempVoiceChannelCreateNestedManyWithoutSystemInput
    guild: GuildConfigCreateNestedOneWithoutTempVoiceSystemsInput
    templates?: TempVoiceTemplateCreateNestedManyWithoutSystemInput
  }

  export type TempVoiceSystemUncheckedCreateWithoutJoinsInput = {
    id?: string
    guildId: string
    name: string
    categoryId: string
    enabled?: boolean
    deleteDelay?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: TempVoiceChannelUncheckedCreateNestedManyWithoutSystemInput
    templates?: TempVoiceTemplateUncheckedCreateNestedManyWithoutSystemInput
  }

  export type TempVoiceSystemCreateOrConnectWithoutJoinsInput = {
    where: TempVoiceSystemWhereUniqueInput
    create: XOR<TempVoiceSystemCreateWithoutJoinsInput, TempVoiceSystemUncheckedCreateWithoutJoinsInput>
  }

  export type TempVoiceSystemUpsertWithoutJoinsInput = {
    update: XOR<TempVoiceSystemUpdateWithoutJoinsInput, TempVoiceSystemUncheckedUpdateWithoutJoinsInput>
    create: XOR<TempVoiceSystemCreateWithoutJoinsInput, TempVoiceSystemUncheckedCreateWithoutJoinsInput>
    where?: TempVoiceSystemWhereInput
  }

  export type TempVoiceSystemUpdateToOneWithWhereWithoutJoinsInput = {
    where?: TempVoiceSystemWhereInput
    data: XOR<TempVoiceSystemUpdateWithoutJoinsInput, TempVoiceSystemUncheckedUpdateWithoutJoinsInput>
  }

  export type TempVoiceSystemUpdateWithoutJoinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    deleteDelay?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: TempVoiceChannelUpdateManyWithoutSystemNestedInput
    guild?: GuildConfigUpdateOneRequiredWithoutTempVoiceSystemsNestedInput
    templates?: TempVoiceTemplateUpdateManyWithoutSystemNestedInput
  }

  export type TempVoiceSystemUncheckedUpdateWithoutJoinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    deleteDelay?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: TempVoiceChannelUncheckedUpdateManyWithoutSystemNestedInput
    templates?: TempVoiceTemplateUncheckedUpdateManyWithoutSystemNestedInput
  }

  export type TempVoiceSystemCreateWithoutTemplatesInput = {
    id?: string
    name: string
    categoryId: string
    enabled?: boolean
    deleteDelay?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: TempVoiceChannelCreateNestedManyWithoutSystemInput
    joins?: TempVoiceJoinChannelCreateNestedManyWithoutSystemInput
    guild: GuildConfigCreateNestedOneWithoutTempVoiceSystemsInput
  }

  export type TempVoiceSystemUncheckedCreateWithoutTemplatesInput = {
    id?: string
    guildId: string
    name: string
    categoryId: string
    enabled?: boolean
    deleteDelay?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: TempVoiceChannelUncheckedCreateNestedManyWithoutSystemInput
    joins?: TempVoiceJoinChannelUncheckedCreateNestedManyWithoutSystemInput
  }

  export type TempVoiceSystemCreateOrConnectWithoutTemplatesInput = {
    where: TempVoiceSystemWhereUniqueInput
    create: XOR<TempVoiceSystemCreateWithoutTemplatesInput, TempVoiceSystemUncheckedCreateWithoutTemplatesInput>
  }

  export type TempVoiceSystemUpsertWithoutTemplatesInput = {
    update: XOR<TempVoiceSystemUpdateWithoutTemplatesInput, TempVoiceSystemUncheckedUpdateWithoutTemplatesInput>
    create: XOR<TempVoiceSystemCreateWithoutTemplatesInput, TempVoiceSystemUncheckedCreateWithoutTemplatesInput>
    where?: TempVoiceSystemWhereInput
  }

  export type TempVoiceSystemUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: TempVoiceSystemWhereInput
    data: XOR<TempVoiceSystemUpdateWithoutTemplatesInput, TempVoiceSystemUncheckedUpdateWithoutTemplatesInput>
  }

  export type TempVoiceSystemUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    deleteDelay?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: TempVoiceChannelUpdateManyWithoutSystemNestedInput
    joins?: TempVoiceJoinChannelUpdateManyWithoutSystemNestedInput
    guild?: GuildConfigUpdateOneRequiredWithoutTempVoiceSystemsNestedInput
  }

  export type TempVoiceSystemUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    deleteDelay?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: TempVoiceChannelUncheckedUpdateManyWithoutSystemNestedInput
    joins?: TempVoiceJoinChannelUncheckedUpdateManyWithoutSystemNestedInput
  }

  export type TempVoiceSystemCreateWithoutChannelsInput = {
    id?: string
    name: string
    categoryId: string
    enabled?: boolean
    deleteDelay?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    joins?: TempVoiceJoinChannelCreateNestedManyWithoutSystemInput
    guild: GuildConfigCreateNestedOneWithoutTempVoiceSystemsInput
    templates?: TempVoiceTemplateCreateNestedManyWithoutSystemInput
  }

  export type TempVoiceSystemUncheckedCreateWithoutChannelsInput = {
    id?: string
    guildId: string
    name: string
    categoryId: string
    enabled?: boolean
    deleteDelay?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    joins?: TempVoiceJoinChannelUncheckedCreateNestedManyWithoutSystemInput
    templates?: TempVoiceTemplateUncheckedCreateNestedManyWithoutSystemInput
  }

  export type TempVoiceSystemCreateOrConnectWithoutChannelsInput = {
    where: TempVoiceSystemWhereUniqueInput
    create: XOR<TempVoiceSystemCreateWithoutChannelsInput, TempVoiceSystemUncheckedCreateWithoutChannelsInput>
  }

  export type TempVoiceSystemUpsertWithoutChannelsInput = {
    update: XOR<TempVoiceSystemUpdateWithoutChannelsInput, TempVoiceSystemUncheckedUpdateWithoutChannelsInput>
    create: XOR<TempVoiceSystemCreateWithoutChannelsInput, TempVoiceSystemUncheckedCreateWithoutChannelsInput>
    where?: TempVoiceSystemWhereInput
  }

  export type TempVoiceSystemUpdateToOneWithWhereWithoutChannelsInput = {
    where?: TempVoiceSystemWhereInput
    data: XOR<TempVoiceSystemUpdateWithoutChannelsInput, TempVoiceSystemUncheckedUpdateWithoutChannelsInput>
  }

  export type TempVoiceSystemUpdateWithoutChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    deleteDelay?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joins?: TempVoiceJoinChannelUpdateManyWithoutSystemNestedInput
    guild?: GuildConfigUpdateOneRequiredWithoutTempVoiceSystemsNestedInput
    templates?: TempVoiceTemplateUpdateManyWithoutSystemNestedInput
  }

  export type TempVoiceSystemUncheckedUpdateWithoutChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    deleteDelay?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joins?: TempVoiceJoinChannelUncheckedUpdateManyWithoutSystemNestedInput
    templates?: TempVoiceTemplateUncheckedUpdateManyWithoutSystemNestedInput
  }

  export type TempVoiceSystemCreateManyGuildInput = {
    id?: string
    name: string
    categoryId: string
    enabled?: boolean
    deleteDelay?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TempVoiceSystemUpdateWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    deleteDelay?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: TempVoiceChannelUpdateManyWithoutSystemNestedInput
    joins?: TempVoiceJoinChannelUpdateManyWithoutSystemNestedInput
    templates?: TempVoiceTemplateUpdateManyWithoutSystemNestedInput
  }

  export type TempVoiceSystemUncheckedUpdateWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    deleteDelay?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: TempVoiceChannelUncheckedUpdateManyWithoutSystemNestedInput
    joins?: TempVoiceJoinChannelUncheckedUpdateManyWithoutSystemNestedInput
    templates?: TempVoiceTemplateUncheckedUpdateManyWithoutSystemNestedInput
  }

  export type TempVoiceSystemUncheckedUpdateManyWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    deleteDelay?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempVoiceChannelCreateManySystemInput = {
    id?: string
    channelId: string
    ownerId: string
    templateType: $Enums.TempVoiceType
    createdAt?: Date | string
    lastActiveAt?: Date | string
  }

  export type TempVoiceJoinChannelCreateManySystemInput = {
    id?: string
    channelId: string
    templateType: $Enums.TempVoiceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TempVoiceTemplateCreateManySystemInput = {
    id?: string
    type: $Enums.TempVoiceType
    nameTemplate: string
    userLimit?: number | null
    bitrate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TempVoiceChannelUpdateWithoutSystemInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    templateType?: EnumTempVoiceTypeFieldUpdateOperationsInput | $Enums.TempVoiceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempVoiceChannelUncheckedUpdateWithoutSystemInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    templateType?: EnumTempVoiceTypeFieldUpdateOperationsInput | $Enums.TempVoiceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempVoiceChannelUncheckedUpdateManyWithoutSystemInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    templateType?: EnumTempVoiceTypeFieldUpdateOperationsInput | $Enums.TempVoiceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempVoiceJoinChannelUpdateWithoutSystemInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    templateType?: EnumTempVoiceTypeFieldUpdateOperationsInput | $Enums.TempVoiceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempVoiceJoinChannelUncheckedUpdateWithoutSystemInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    templateType?: EnumTempVoiceTypeFieldUpdateOperationsInput | $Enums.TempVoiceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempVoiceJoinChannelUncheckedUpdateManyWithoutSystemInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    templateType?: EnumTempVoiceTypeFieldUpdateOperationsInput | $Enums.TempVoiceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempVoiceTemplateUpdateWithoutSystemInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTempVoiceTypeFieldUpdateOperationsInput | $Enums.TempVoiceType
    nameTemplate?: StringFieldUpdateOperationsInput | string
    userLimit?: NullableIntFieldUpdateOperationsInput | number | null
    bitrate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempVoiceTemplateUncheckedUpdateWithoutSystemInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTempVoiceTypeFieldUpdateOperationsInput | $Enums.TempVoiceType
    nameTemplate?: StringFieldUpdateOperationsInput | string
    userLimit?: NullableIntFieldUpdateOperationsInput | number | null
    bitrate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempVoiceTemplateUncheckedUpdateManyWithoutSystemInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTempVoiceTypeFieldUpdateOperationsInput | $Enums.TempVoiceType
    nameTemplate?: StringFieldUpdateOperationsInput | string
    userLimit?: NullableIntFieldUpdateOperationsInput | number | null
    bitrate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}