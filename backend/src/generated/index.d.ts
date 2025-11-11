
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Jadwal
 * 
 */
export type Jadwal = $Result.DefaultSelection<Prisma.$JadwalPayload>
/**
 * Model DataPendaftar
 * 
 */
export type DataPendaftar = $Result.DefaultSelection<Prisma.$DataPendaftarPayload>
/**
 * Model kategori_pelatihan
 * 
 */
export type kategori_pelatihan = $Result.DefaultSelection<Prisma.$kategori_pelatihanPayload>
/**
 * Model data_pelatihan
 * 
 */
export type data_pelatihan = $Result.DefaultSelection<Prisma.$data_pelatihanPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jadwal`: Exposes CRUD operations for the **Jadwal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jadwals
    * const jadwals = await prisma.jadwal.findMany()
    * ```
    */
  get jadwal(): Prisma.JadwalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataPendaftar`: Exposes CRUD operations for the **DataPendaftar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataPendaftars
    * const dataPendaftars = await prisma.dataPendaftar.findMany()
    * ```
    */
  get dataPendaftar(): Prisma.DataPendaftarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kategori_pelatihan`: Exposes CRUD operations for the **kategori_pelatihan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kategori_pelatihans
    * const kategori_pelatihans = await prisma.kategori_pelatihan.findMany()
    * ```
    */
  get kategori_pelatihan(): Prisma.kategori_pelatihanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.data_pelatihan`: Exposes CRUD operations for the **data_pelatihan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Data_pelatihans
    * const data_pelatihans = await prisma.data_pelatihan.findMany()
    * ```
    */
  get data_pelatihan(): Prisma.data_pelatihanDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
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
    Admin: 'Admin',
    Jadwal: 'Jadwal',
    DataPendaftar: 'DataPendaftar',
    kategori_pelatihan: 'kategori_pelatihan',
    data_pelatihan: 'data_pelatihan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "jadwal" | "dataPendaftar" | "kategori_pelatihan" | "data_pelatihan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Jadwal: {
        payload: Prisma.$JadwalPayload<ExtArgs>
        fields: Prisma.JadwalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JadwalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JadwalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          findFirst: {
            args: Prisma.JadwalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JadwalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          findMany: {
            args: Prisma.JadwalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>[]
          }
          create: {
            args: Prisma.JadwalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          createMany: {
            args: Prisma.JadwalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JadwalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          update: {
            args: Prisma.JadwalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          deleteMany: {
            args: Prisma.JadwalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JadwalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JadwalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          aggregate: {
            args: Prisma.JadwalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJadwal>
          }
          groupBy: {
            args: Prisma.JadwalGroupByArgs<ExtArgs>
            result: $Utils.Optional<JadwalGroupByOutputType>[]
          }
          count: {
            args: Prisma.JadwalCountArgs<ExtArgs>
            result: $Utils.Optional<JadwalCountAggregateOutputType> | number
          }
        }
      }
      DataPendaftar: {
        payload: Prisma.$DataPendaftarPayload<ExtArgs>
        fields: Prisma.DataPendaftarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataPendaftarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendaftarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataPendaftarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendaftarPayload>
          }
          findFirst: {
            args: Prisma.DataPendaftarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendaftarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataPendaftarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendaftarPayload>
          }
          findMany: {
            args: Prisma.DataPendaftarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendaftarPayload>[]
          }
          create: {
            args: Prisma.DataPendaftarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendaftarPayload>
          }
          createMany: {
            args: Prisma.DataPendaftarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DataPendaftarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendaftarPayload>
          }
          update: {
            args: Prisma.DataPendaftarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendaftarPayload>
          }
          deleteMany: {
            args: Prisma.DataPendaftarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataPendaftarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DataPendaftarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendaftarPayload>
          }
          aggregate: {
            args: Prisma.DataPendaftarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataPendaftar>
          }
          groupBy: {
            args: Prisma.DataPendaftarGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataPendaftarGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataPendaftarCountArgs<ExtArgs>
            result: $Utils.Optional<DataPendaftarCountAggregateOutputType> | number
          }
        }
      }
      kategori_pelatihan: {
        payload: Prisma.$kategori_pelatihanPayload<ExtArgs>
        fields: Prisma.kategori_pelatihanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kategori_pelatihanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategori_pelatihanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kategori_pelatihanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategori_pelatihanPayload>
          }
          findFirst: {
            args: Prisma.kategori_pelatihanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategori_pelatihanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kategori_pelatihanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategori_pelatihanPayload>
          }
          findMany: {
            args: Prisma.kategori_pelatihanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategori_pelatihanPayload>[]
          }
          create: {
            args: Prisma.kategori_pelatihanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategori_pelatihanPayload>
          }
          createMany: {
            args: Prisma.kategori_pelatihanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.kategori_pelatihanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategori_pelatihanPayload>
          }
          update: {
            args: Prisma.kategori_pelatihanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategori_pelatihanPayload>
          }
          deleteMany: {
            args: Prisma.kategori_pelatihanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.kategori_pelatihanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.kategori_pelatihanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategori_pelatihanPayload>
          }
          aggregate: {
            args: Prisma.Kategori_pelatihanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKategori_pelatihan>
          }
          groupBy: {
            args: Prisma.kategori_pelatihanGroupByArgs<ExtArgs>
            result: $Utils.Optional<Kategori_pelatihanGroupByOutputType>[]
          }
          count: {
            args: Prisma.kategori_pelatihanCountArgs<ExtArgs>
            result: $Utils.Optional<Kategori_pelatihanCountAggregateOutputType> | number
          }
        }
      }
      data_pelatihan: {
        payload: Prisma.$data_pelatihanPayload<ExtArgs>
        fields: Prisma.data_pelatihanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.data_pelatihanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_pelatihanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.data_pelatihanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_pelatihanPayload>
          }
          findFirst: {
            args: Prisma.data_pelatihanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_pelatihanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.data_pelatihanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_pelatihanPayload>
          }
          findMany: {
            args: Prisma.data_pelatihanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_pelatihanPayload>[]
          }
          create: {
            args: Prisma.data_pelatihanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_pelatihanPayload>
          }
          createMany: {
            args: Prisma.data_pelatihanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.data_pelatihanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_pelatihanPayload>
          }
          update: {
            args: Prisma.data_pelatihanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_pelatihanPayload>
          }
          deleteMany: {
            args: Prisma.data_pelatihanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.data_pelatihanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.data_pelatihanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_pelatihanPayload>
          }
          aggregate: {
            args: Prisma.Data_pelatihanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateData_pelatihan>
          }
          groupBy: {
            args: Prisma.data_pelatihanGroupByArgs<ExtArgs>
            result: $Utils.Optional<Data_pelatihanGroupByOutputType>[]
          }
          count: {
            args: Prisma.data_pelatihanCountArgs<ExtArgs>
            result: $Utils.Optional<Data_pelatihanCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    jadwal?: JadwalOmit
    dataPendaftar?: DataPendaftarOmit
    kategori_pelatihan?: kategori_pelatihanOmit
    data_pelatihan?: data_pelatihanOmit
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
   * Count Type Kategori_pelatihanCountOutputType
   */

  export type Kategori_pelatihanCountOutputType = {
    data: number
  }

  export type Kategori_pelatihanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data?: boolean | Kategori_pelatihanCountOutputTypeCountDataArgs
  }

  // Custom InputTypes
  /**
   * Kategori_pelatihanCountOutputType without action
   */
  export type Kategori_pelatihanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori_pelatihanCountOutputType
     */
    select?: Kategori_pelatihanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Kategori_pelatihanCountOutputType without action
   */
  export type Kategori_pelatihanCountOutputTypeCountDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: data_pelatihanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: string | null
    akses: boolean | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: string | null
    akses: boolean | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    akses: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    akses?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    akses?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    akses?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    username: string
    password: string
    role: string
    akses: boolean
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    akses?: boolean
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    akses?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role" | "akses", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      role: string
      akses: boolean
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly username: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'String'>
    readonly akses: FieldRef<"Admin", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Jadwal
   */

  export type AggregateJadwal = {
    _count: JadwalCountAggregateOutputType | null
    _avg: JadwalAvgAggregateOutputType | null
    _sum: JadwalSumAggregateOutputType | null
    _min: JadwalMinAggregateOutputType | null
    _max: JadwalMaxAggregateOutputType | null
  }

  export type JadwalAvgAggregateOutputType = {
    id: number | null
    harga: number | null
    jmlHari: number | null
  }

  export type JadwalSumAggregateOutputType = {
    id: number | null
    harga: number | null
    jmlHari: number | null
  }

  export type JadwalMinAggregateOutputType = {
    id: number | null
    bidang: string | null
    nama: string | null
    harga: number | null
    jmlHari: number | null
    bulan: string | null
    tanggal: string | null
  }

  export type JadwalMaxAggregateOutputType = {
    id: number | null
    bidang: string | null
    nama: string | null
    harga: number | null
    jmlHari: number | null
    bulan: string | null
    tanggal: string | null
  }

  export type JadwalCountAggregateOutputType = {
    id: number
    bidang: number
    nama: number
    harga: number
    jmlHari: number
    bulan: number
    tanggal: number
    _all: number
  }


  export type JadwalAvgAggregateInputType = {
    id?: true
    harga?: true
    jmlHari?: true
  }

  export type JadwalSumAggregateInputType = {
    id?: true
    harga?: true
    jmlHari?: true
  }

  export type JadwalMinAggregateInputType = {
    id?: true
    bidang?: true
    nama?: true
    harga?: true
    jmlHari?: true
    bulan?: true
    tanggal?: true
  }

  export type JadwalMaxAggregateInputType = {
    id?: true
    bidang?: true
    nama?: true
    harga?: true
    jmlHari?: true
    bulan?: true
    tanggal?: true
  }

  export type JadwalCountAggregateInputType = {
    id?: true
    bidang?: true
    nama?: true
    harga?: true
    jmlHari?: true
    bulan?: true
    tanggal?: true
    _all?: true
  }

  export type JadwalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jadwal to aggregate.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jadwals
    **/
    _count?: true | JadwalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JadwalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JadwalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JadwalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JadwalMaxAggregateInputType
  }

  export type GetJadwalAggregateType<T extends JadwalAggregateArgs> = {
        [P in keyof T & keyof AggregateJadwal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJadwal[P]>
      : GetScalarType<T[P], AggregateJadwal[P]>
  }




  export type JadwalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalWhereInput
    orderBy?: JadwalOrderByWithAggregationInput | JadwalOrderByWithAggregationInput[]
    by: JadwalScalarFieldEnum[] | JadwalScalarFieldEnum
    having?: JadwalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JadwalCountAggregateInputType | true
    _avg?: JadwalAvgAggregateInputType
    _sum?: JadwalSumAggregateInputType
    _min?: JadwalMinAggregateInputType
    _max?: JadwalMaxAggregateInputType
  }

  export type JadwalGroupByOutputType = {
    id: number
    bidang: string
    nama: string
    harga: number
    jmlHari: number
    bulan: string | null
    tanggal: string | null
    _count: JadwalCountAggregateOutputType | null
    _avg: JadwalAvgAggregateOutputType | null
    _sum: JadwalSumAggregateOutputType | null
    _min: JadwalMinAggregateOutputType | null
    _max: JadwalMaxAggregateOutputType | null
  }

  type GetJadwalGroupByPayload<T extends JadwalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JadwalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JadwalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JadwalGroupByOutputType[P]>
            : GetScalarType<T[P], JadwalGroupByOutputType[P]>
        }
      >
    >


  export type JadwalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bidang?: boolean
    nama?: boolean
    harga?: boolean
    jmlHari?: boolean
    bulan?: boolean
    tanggal?: boolean
  }, ExtArgs["result"]["jadwal"]>



  export type JadwalSelectScalar = {
    id?: boolean
    bidang?: boolean
    nama?: boolean
    harga?: boolean
    jmlHari?: boolean
    bulan?: boolean
    tanggal?: boolean
  }

  export type JadwalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bidang" | "nama" | "harga" | "jmlHari" | "bulan" | "tanggal", ExtArgs["result"]["jadwal"]>

  export type $JadwalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jadwal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bidang: string
      nama: string
      harga: number
      jmlHari: number
      bulan: string | null
      tanggal: string | null
    }, ExtArgs["result"]["jadwal"]>
    composites: {}
  }

  type JadwalGetPayload<S extends boolean | null | undefined | JadwalDefaultArgs> = $Result.GetResult<Prisma.$JadwalPayload, S>

  type JadwalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JadwalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JadwalCountAggregateInputType | true
    }

  export interface JadwalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jadwal'], meta: { name: 'Jadwal' } }
    /**
     * Find zero or one Jadwal that matches the filter.
     * @param {JadwalFindUniqueArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JadwalFindUniqueArgs>(args: SelectSubset<T, JadwalFindUniqueArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jadwal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JadwalFindUniqueOrThrowArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JadwalFindUniqueOrThrowArgs>(args: SelectSubset<T, JadwalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalFindFirstArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JadwalFindFirstArgs>(args?: SelectSubset<T, JadwalFindFirstArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalFindFirstOrThrowArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JadwalFindFirstOrThrowArgs>(args?: SelectSubset<T, JadwalFindFirstOrThrowArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jadwals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jadwals
     * const jadwals = await prisma.jadwal.findMany()
     * 
     * // Get first 10 Jadwals
     * const jadwals = await prisma.jadwal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jadwalWithIdOnly = await prisma.jadwal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JadwalFindManyArgs>(args?: SelectSubset<T, JadwalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jadwal.
     * @param {JadwalCreateArgs} args - Arguments to create a Jadwal.
     * @example
     * // Create one Jadwal
     * const Jadwal = await prisma.jadwal.create({
     *   data: {
     *     // ... data to create a Jadwal
     *   }
     * })
     * 
     */
    create<T extends JadwalCreateArgs>(args: SelectSubset<T, JadwalCreateArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jadwals.
     * @param {JadwalCreateManyArgs} args - Arguments to create many Jadwals.
     * @example
     * // Create many Jadwals
     * const jadwal = await prisma.jadwal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JadwalCreateManyArgs>(args?: SelectSubset<T, JadwalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jadwal.
     * @param {JadwalDeleteArgs} args - Arguments to delete one Jadwal.
     * @example
     * // Delete one Jadwal
     * const Jadwal = await prisma.jadwal.delete({
     *   where: {
     *     // ... filter to delete one Jadwal
     *   }
     * })
     * 
     */
    delete<T extends JadwalDeleteArgs>(args: SelectSubset<T, JadwalDeleteArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jadwal.
     * @param {JadwalUpdateArgs} args - Arguments to update one Jadwal.
     * @example
     * // Update one Jadwal
     * const jadwal = await prisma.jadwal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JadwalUpdateArgs>(args: SelectSubset<T, JadwalUpdateArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jadwals.
     * @param {JadwalDeleteManyArgs} args - Arguments to filter Jadwals to delete.
     * @example
     * // Delete a few Jadwals
     * const { count } = await prisma.jadwal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JadwalDeleteManyArgs>(args?: SelectSubset<T, JadwalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jadwals
     * const jadwal = await prisma.jadwal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JadwalUpdateManyArgs>(args: SelectSubset<T, JadwalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jadwal.
     * @param {JadwalUpsertArgs} args - Arguments to update or create a Jadwal.
     * @example
     * // Update or create a Jadwal
     * const jadwal = await prisma.jadwal.upsert({
     *   create: {
     *     // ... data to create a Jadwal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jadwal we want to update
     *   }
     * })
     */
    upsert<T extends JadwalUpsertArgs>(args: SelectSubset<T, JadwalUpsertArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalCountArgs} args - Arguments to filter Jadwals to count.
     * @example
     * // Count the number of Jadwals
     * const count = await prisma.jadwal.count({
     *   where: {
     *     // ... the filter for the Jadwals we want to count
     *   }
     * })
    **/
    count<T extends JadwalCountArgs>(
      args?: Subset<T, JadwalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JadwalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JadwalAggregateArgs>(args: Subset<T, JadwalAggregateArgs>): Prisma.PrismaPromise<GetJadwalAggregateType<T>>

    /**
     * Group by Jadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalGroupByArgs} args - Group by arguments.
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
      T extends JadwalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JadwalGroupByArgs['orderBy'] }
        : { orderBy?: JadwalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JadwalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJadwalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jadwal model
   */
  readonly fields: JadwalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jadwal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JadwalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Jadwal model
   */
  interface JadwalFieldRefs {
    readonly id: FieldRef<"Jadwal", 'Int'>
    readonly bidang: FieldRef<"Jadwal", 'String'>
    readonly nama: FieldRef<"Jadwal", 'String'>
    readonly harga: FieldRef<"Jadwal", 'Int'>
    readonly jmlHari: FieldRef<"Jadwal", 'Int'>
    readonly bulan: FieldRef<"Jadwal", 'String'>
    readonly tanggal: FieldRef<"Jadwal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Jadwal findUnique
   */
  export type JadwalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal findUniqueOrThrow
   */
  export type JadwalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal findFirst
   */
  export type JadwalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jadwals.
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jadwals.
     */
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Jadwal findFirstOrThrow
   */
  export type JadwalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jadwals.
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jadwals.
     */
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Jadwal findMany
   */
  export type JadwalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Filter, which Jadwals to fetch.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jadwals.
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Jadwal create
   */
  export type JadwalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * The data needed to create a Jadwal.
     */
    data: XOR<JadwalCreateInput, JadwalUncheckedCreateInput>
  }

  /**
   * Jadwal createMany
   */
  export type JadwalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jadwals.
     */
    data: JadwalCreateManyInput | JadwalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jadwal update
   */
  export type JadwalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * The data needed to update a Jadwal.
     */
    data: XOR<JadwalUpdateInput, JadwalUncheckedUpdateInput>
    /**
     * Choose, which Jadwal to update.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal updateMany
   */
  export type JadwalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jadwals.
     */
    data: XOR<JadwalUpdateManyMutationInput, JadwalUncheckedUpdateManyInput>
    /**
     * Filter which Jadwals to update
     */
    where?: JadwalWhereInput
    /**
     * Limit how many Jadwals to update.
     */
    limit?: number
  }

  /**
   * Jadwal upsert
   */
  export type JadwalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * The filter to search for the Jadwal to update in case it exists.
     */
    where: JadwalWhereUniqueInput
    /**
     * In case the Jadwal found by the `where` argument doesn't exist, create a new Jadwal with this data.
     */
    create: XOR<JadwalCreateInput, JadwalUncheckedCreateInput>
    /**
     * In case the Jadwal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JadwalUpdateInput, JadwalUncheckedUpdateInput>
  }

  /**
   * Jadwal delete
   */
  export type JadwalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Filter which Jadwal to delete.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal deleteMany
   */
  export type JadwalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jadwals to delete
     */
    where?: JadwalWhereInput
    /**
     * Limit how many Jadwals to delete.
     */
    limit?: number
  }

  /**
   * Jadwal without action
   */
  export type JadwalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
  }


  /**
   * Model DataPendaftar
   */

  export type AggregateDataPendaftar = {
    _count: DataPendaftarCountAggregateOutputType | null
    _avg: DataPendaftarAvgAggregateOutputType | null
    _sum: DataPendaftarSumAggregateOutputType | null
    _min: DataPendaftarMinAggregateOutputType | null
    _max: DataPendaftarMaxAggregateOutputType | null
  }

  export type DataPendaftarAvgAggregateOutputType = {
    id: number | null
  }

  export type DataPendaftarSumAggregateOutputType = {
    id: number | null
  }

  export type DataPendaftarMinAggregateOutputType = {
    id: number | null
    institusi: string | null
    alamat: string | null
    telepon: string | null
    fax: string | null
    email: string | null
    namaPeserta: string | null
    telPeserta: string | null
    emailPeserta: string | null
    pelatihan: string | null
  }

  export type DataPendaftarMaxAggregateOutputType = {
    id: number | null
    institusi: string | null
    alamat: string | null
    telepon: string | null
    fax: string | null
    email: string | null
    namaPeserta: string | null
    telPeserta: string | null
    emailPeserta: string | null
    pelatihan: string | null
  }

  export type DataPendaftarCountAggregateOutputType = {
    id: number
    institusi: number
    alamat: number
    telepon: number
    fax: number
    email: number
    namaPeserta: number
    telPeserta: number
    emailPeserta: number
    pelatihan: number
    _all: number
  }


  export type DataPendaftarAvgAggregateInputType = {
    id?: true
  }

  export type DataPendaftarSumAggregateInputType = {
    id?: true
  }

  export type DataPendaftarMinAggregateInputType = {
    id?: true
    institusi?: true
    alamat?: true
    telepon?: true
    fax?: true
    email?: true
    namaPeserta?: true
    telPeserta?: true
    emailPeserta?: true
    pelatihan?: true
  }

  export type DataPendaftarMaxAggregateInputType = {
    id?: true
    institusi?: true
    alamat?: true
    telepon?: true
    fax?: true
    email?: true
    namaPeserta?: true
    telPeserta?: true
    emailPeserta?: true
    pelatihan?: true
  }

  export type DataPendaftarCountAggregateInputType = {
    id?: true
    institusi?: true
    alamat?: true
    telepon?: true
    fax?: true
    email?: true
    namaPeserta?: true
    telPeserta?: true
    emailPeserta?: true
    pelatihan?: true
    _all?: true
  }

  export type DataPendaftarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataPendaftar to aggregate.
     */
    where?: DataPendaftarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPendaftars to fetch.
     */
    orderBy?: DataPendaftarOrderByWithRelationInput | DataPendaftarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataPendaftarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPendaftars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPendaftars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataPendaftars
    **/
    _count?: true | DataPendaftarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataPendaftarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataPendaftarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataPendaftarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataPendaftarMaxAggregateInputType
  }

  export type GetDataPendaftarAggregateType<T extends DataPendaftarAggregateArgs> = {
        [P in keyof T & keyof AggregateDataPendaftar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataPendaftar[P]>
      : GetScalarType<T[P], AggregateDataPendaftar[P]>
  }




  export type DataPendaftarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataPendaftarWhereInput
    orderBy?: DataPendaftarOrderByWithAggregationInput | DataPendaftarOrderByWithAggregationInput[]
    by: DataPendaftarScalarFieldEnum[] | DataPendaftarScalarFieldEnum
    having?: DataPendaftarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataPendaftarCountAggregateInputType | true
    _avg?: DataPendaftarAvgAggregateInputType
    _sum?: DataPendaftarSumAggregateInputType
    _min?: DataPendaftarMinAggregateInputType
    _max?: DataPendaftarMaxAggregateInputType
  }

  export type DataPendaftarGroupByOutputType = {
    id: number
    institusi: string
    alamat: string
    telepon: string
    fax: string
    email: string
    namaPeserta: string
    telPeserta: string
    emailPeserta: string
    pelatihan: string
    _count: DataPendaftarCountAggregateOutputType | null
    _avg: DataPendaftarAvgAggregateOutputType | null
    _sum: DataPendaftarSumAggregateOutputType | null
    _min: DataPendaftarMinAggregateOutputType | null
    _max: DataPendaftarMaxAggregateOutputType | null
  }

  type GetDataPendaftarGroupByPayload<T extends DataPendaftarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataPendaftarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataPendaftarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataPendaftarGroupByOutputType[P]>
            : GetScalarType<T[P], DataPendaftarGroupByOutputType[P]>
        }
      >
    >


  export type DataPendaftarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institusi?: boolean
    alamat?: boolean
    telepon?: boolean
    fax?: boolean
    email?: boolean
    namaPeserta?: boolean
    telPeserta?: boolean
    emailPeserta?: boolean
    pelatihan?: boolean
  }, ExtArgs["result"]["dataPendaftar"]>



  export type DataPendaftarSelectScalar = {
    id?: boolean
    institusi?: boolean
    alamat?: boolean
    telepon?: boolean
    fax?: boolean
    email?: boolean
    namaPeserta?: boolean
    telPeserta?: boolean
    emailPeserta?: boolean
    pelatihan?: boolean
  }

  export type DataPendaftarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "institusi" | "alamat" | "telepon" | "fax" | "email" | "namaPeserta" | "telPeserta" | "emailPeserta" | "pelatihan", ExtArgs["result"]["dataPendaftar"]>

  export type $DataPendaftarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataPendaftar"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      institusi: string
      alamat: string
      telepon: string
      fax: string
      email: string
      namaPeserta: string
      telPeserta: string
      emailPeserta: string
      pelatihan: string
    }, ExtArgs["result"]["dataPendaftar"]>
    composites: {}
  }

  type DataPendaftarGetPayload<S extends boolean | null | undefined | DataPendaftarDefaultArgs> = $Result.GetResult<Prisma.$DataPendaftarPayload, S>

  type DataPendaftarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataPendaftarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataPendaftarCountAggregateInputType | true
    }

  export interface DataPendaftarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataPendaftar'], meta: { name: 'DataPendaftar' } }
    /**
     * Find zero or one DataPendaftar that matches the filter.
     * @param {DataPendaftarFindUniqueArgs} args - Arguments to find a DataPendaftar
     * @example
     * // Get one DataPendaftar
     * const dataPendaftar = await prisma.dataPendaftar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataPendaftarFindUniqueArgs>(args: SelectSubset<T, DataPendaftarFindUniqueArgs<ExtArgs>>): Prisma__DataPendaftarClient<$Result.GetResult<Prisma.$DataPendaftarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataPendaftar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataPendaftarFindUniqueOrThrowArgs} args - Arguments to find a DataPendaftar
     * @example
     * // Get one DataPendaftar
     * const dataPendaftar = await prisma.dataPendaftar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataPendaftarFindUniqueOrThrowArgs>(args: SelectSubset<T, DataPendaftarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataPendaftarClient<$Result.GetResult<Prisma.$DataPendaftarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataPendaftar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPendaftarFindFirstArgs} args - Arguments to find a DataPendaftar
     * @example
     * // Get one DataPendaftar
     * const dataPendaftar = await prisma.dataPendaftar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataPendaftarFindFirstArgs>(args?: SelectSubset<T, DataPendaftarFindFirstArgs<ExtArgs>>): Prisma__DataPendaftarClient<$Result.GetResult<Prisma.$DataPendaftarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataPendaftar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPendaftarFindFirstOrThrowArgs} args - Arguments to find a DataPendaftar
     * @example
     * // Get one DataPendaftar
     * const dataPendaftar = await prisma.dataPendaftar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataPendaftarFindFirstOrThrowArgs>(args?: SelectSubset<T, DataPendaftarFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataPendaftarClient<$Result.GetResult<Prisma.$DataPendaftarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataPendaftars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPendaftarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataPendaftars
     * const dataPendaftars = await prisma.dataPendaftar.findMany()
     * 
     * // Get first 10 DataPendaftars
     * const dataPendaftars = await prisma.dataPendaftar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataPendaftarWithIdOnly = await prisma.dataPendaftar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataPendaftarFindManyArgs>(args?: SelectSubset<T, DataPendaftarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPendaftarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataPendaftar.
     * @param {DataPendaftarCreateArgs} args - Arguments to create a DataPendaftar.
     * @example
     * // Create one DataPendaftar
     * const DataPendaftar = await prisma.dataPendaftar.create({
     *   data: {
     *     // ... data to create a DataPendaftar
     *   }
     * })
     * 
     */
    create<T extends DataPendaftarCreateArgs>(args: SelectSubset<T, DataPendaftarCreateArgs<ExtArgs>>): Prisma__DataPendaftarClient<$Result.GetResult<Prisma.$DataPendaftarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataPendaftars.
     * @param {DataPendaftarCreateManyArgs} args - Arguments to create many DataPendaftars.
     * @example
     * // Create many DataPendaftars
     * const dataPendaftar = await prisma.dataPendaftar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataPendaftarCreateManyArgs>(args?: SelectSubset<T, DataPendaftarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DataPendaftar.
     * @param {DataPendaftarDeleteArgs} args - Arguments to delete one DataPendaftar.
     * @example
     * // Delete one DataPendaftar
     * const DataPendaftar = await prisma.dataPendaftar.delete({
     *   where: {
     *     // ... filter to delete one DataPendaftar
     *   }
     * })
     * 
     */
    delete<T extends DataPendaftarDeleteArgs>(args: SelectSubset<T, DataPendaftarDeleteArgs<ExtArgs>>): Prisma__DataPendaftarClient<$Result.GetResult<Prisma.$DataPendaftarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataPendaftar.
     * @param {DataPendaftarUpdateArgs} args - Arguments to update one DataPendaftar.
     * @example
     * // Update one DataPendaftar
     * const dataPendaftar = await prisma.dataPendaftar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataPendaftarUpdateArgs>(args: SelectSubset<T, DataPendaftarUpdateArgs<ExtArgs>>): Prisma__DataPendaftarClient<$Result.GetResult<Prisma.$DataPendaftarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataPendaftars.
     * @param {DataPendaftarDeleteManyArgs} args - Arguments to filter DataPendaftars to delete.
     * @example
     * // Delete a few DataPendaftars
     * const { count } = await prisma.dataPendaftar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataPendaftarDeleteManyArgs>(args?: SelectSubset<T, DataPendaftarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataPendaftars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPendaftarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataPendaftars
     * const dataPendaftar = await prisma.dataPendaftar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataPendaftarUpdateManyArgs>(args: SelectSubset<T, DataPendaftarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataPendaftar.
     * @param {DataPendaftarUpsertArgs} args - Arguments to update or create a DataPendaftar.
     * @example
     * // Update or create a DataPendaftar
     * const dataPendaftar = await prisma.dataPendaftar.upsert({
     *   create: {
     *     // ... data to create a DataPendaftar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataPendaftar we want to update
     *   }
     * })
     */
    upsert<T extends DataPendaftarUpsertArgs>(args: SelectSubset<T, DataPendaftarUpsertArgs<ExtArgs>>): Prisma__DataPendaftarClient<$Result.GetResult<Prisma.$DataPendaftarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataPendaftars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPendaftarCountArgs} args - Arguments to filter DataPendaftars to count.
     * @example
     * // Count the number of DataPendaftars
     * const count = await prisma.dataPendaftar.count({
     *   where: {
     *     // ... the filter for the DataPendaftars we want to count
     *   }
     * })
    **/
    count<T extends DataPendaftarCountArgs>(
      args?: Subset<T, DataPendaftarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataPendaftarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataPendaftar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPendaftarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataPendaftarAggregateArgs>(args: Subset<T, DataPendaftarAggregateArgs>): Prisma.PrismaPromise<GetDataPendaftarAggregateType<T>>

    /**
     * Group by DataPendaftar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPendaftarGroupByArgs} args - Group by arguments.
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
      T extends DataPendaftarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataPendaftarGroupByArgs['orderBy'] }
        : { orderBy?: DataPendaftarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DataPendaftarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataPendaftarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataPendaftar model
   */
  readonly fields: DataPendaftarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataPendaftar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataPendaftarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DataPendaftar model
   */
  interface DataPendaftarFieldRefs {
    readonly id: FieldRef<"DataPendaftar", 'Int'>
    readonly institusi: FieldRef<"DataPendaftar", 'String'>
    readonly alamat: FieldRef<"DataPendaftar", 'String'>
    readonly telepon: FieldRef<"DataPendaftar", 'String'>
    readonly fax: FieldRef<"DataPendaftar", 'String'>
    readonly email: FieldRef<"DataPendaftar", 'String'>
    readonly namaPeserta: FieldRef<"DataPendaftar", 'String'>
    readonly telPeserta: FieldRef<"DataPendaftar", 'String'>
    readonly emailPeserta: FieldRef<"DataPendaftar", 'String'>
    readonly pelatihan: FieldRef<"DataPendaftar", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DataPendaftar findUnique
   */
  export type DataPendaftarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendaftar
     */
    select?: DataPendaftarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendaftar
     */
    omit?: DataPendaftarOmit<ExtArgs> | null
    /**
     * Filter, which DataPendaftar to fetch.
     */
    where: DataPendaftarWhereUniqueInput
  }

  /**
   * DataPendaftar findUniqueOrThrow
   */
  export type DataPendaftarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendaftar
     */
    select?: DataPendaftarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendaftar
     */
    omit?: DataPendaftarOmit<ExtArgs> | null
    /**
     * Filter, which DataPendaftar to fetch.
     */
    where: DataPendaftarWhereUniqueInput
  }

  /**
   * DataPendaftar findFirst
   */
  export type DataPendaftarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendaftar
     */
    select?: DataPendaftarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendaftar
     */
    omit?: DataPendaftarOmit<ExtArgs> | null
    /**
     * Filter, which DataPendaftar to fetch.
     */
    where?: DataPendaftarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPendaftars to fetch.
     */
    orderBy?: DataPendaftarOrderByWithRelationInput | DataPendaftarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataPendaftars.
     */
    cursor?: DataPendaftarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPendaftars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPendaftars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataPendaftars.
     */
    distinct?: DataPendaftarScalarFieldEnum | DataPendaftarScalarFieldEnum[]
  }

  /**
   * DataPendaftar findFirstOrThrow
   */
  export type DataPendaftarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendaftar
     */
    select?: DataPendaftarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendaftar
     */
    omit?: DataPendaftarOmit<ExtArgs> | null
    /**
     * Filter, which DataPendaftar to fetch.
     */
    where?: DataPendaftarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPendaftars to fetch.
     */
    orderBy?: DataPendaftarOrderByWithRelationInput | DataPendaftarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataPendaftars.
     */
    cursor?: DataPendaftarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPendaftars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPendaftars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataPendaftars.
     */
    distinct?: DataPendaftarScalarFieldEnum | DataPendaftarScalarFieldEnum[]
  }

  /**
   * DataPendaftar findMany
   */
  export type DataPendaftarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendaftar
     */
    select?: DataPendaftarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendaftar
     */
    omit?: DataPendaftarOmit<ExtArgs> | null
    /**
     * Filter, which DataPendaftars to fetch.
     */
    where?: DataPendaftarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPendaftars to fetch.
     */
    orderBy?: DataPendaftarOrderByWithRelationInput | DataPendaftarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataPendaftars.
     */
    cursor?: DataPendaftarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPendaftars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPendaftars.
     */
    skip?: number
    distinct?: DataPendaftarScalarFieldEnum | DataPendaftarScalarFieldEnum[]
  }

  /**
   * DataPendaftar create
   */
  export type DataPendaftarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendaftar
     */
    select?: DataPendaftarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendaftar
     */
    omit?: DataPendaftarOmit<ExtArgs> | null
    /**
     * The data needed to create a DataPendaftar.
     */
    data: XOR<DataPendaftarCreateInput, DataPendaftarUncheckedCreateInput>
  }

  /**
   * DataPendaftar createMany
   */
  export type DataPendaftarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataPendaftars.
     */
    data: DataPendaftarCreateManyInput | DataPendaftarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataPendaftar update
   */
  export type DataPendaftarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendaftar
     */
    select?: DataPendaftarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendaftar
     */
    omit?: DataPendaftarOmit<ExtArgs> | null
    /**
     * The data needed to update a DataPendaftar.
     */
    data: XOR<DataPendaftarUpdateInput, DataPendaftarUncheckedUpdateInput>
    /**
     * Choose, which DataPendaftar to update.
     */
    where: DataPendaftarWhereUniqueInput
  }

  /**
   * DataPendaftar updateMany
   */
  export type DataPendaftarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataPendaftars.
     */
    data: XOR<DataPendaftarUpdateManyMutationInput, DataPendaftarUncheckedUpdateManyInput>
    /**
     * Filter which DataPendaftars to update
     */
    where?: DataPendaftarWhereInput
    /**
     * Limit how many DataPendaftars to update.
     */
    limit?: number
  }

  /**
   * DataPendaftar upsert
   */
  export type DataPendaftarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendaftar
     */
    select?: DataPendaftarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendaftar
     */
    omit?: DataPendaftarOmit<ExtArgs> | null
    /**
     * The filter to search for the DataPendaftar to update in case it exists.
     */
    where: DataPendaftarWhereUniqueInput
    /**
     * In case the DataPendaftar found by the `where` argument doesn't exist, create a new DataPendaftar with this data.
     */
    create: XOR<DataPendaftarCreateInput, DataPendaftarUncheckedCreateInput>
    /**
     * In case the DataPendaftar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataPendaftarUpdateInput, DataPendaftarUncheckedUpdateInput>
  }

  /**
   * DataPendaftar delete
   */
  export type DataPendaftarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendaftar
     */
    select?: DataPendaftarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendaftar
     */
    omit?: DataPendaftarOmit<ExtArgs> | null
    /**
     * Filter which DataPendaftar to delete.
     */
    where: DataPendaftarWhereUniqueInput
  }

  /**
   * DataPendaftar deleteMany
   */
  export type DataPendaftarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataPendaftars to delete
     */
    where?: DataPendaftarWhereInput
    /**
     * Limit how many DataPendaftars to delete.
     */
    limit?: number
  }

  /**
   * DataPendaftar without action
   */
  export type DataPendaftarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendaftar
     */
    select?: DataPendaftarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendaftar
     */
    omit?: DataPendaftarOmit<ExtArgs> | null
  }


  /**
   * Model kategori_pelatihan
   */

  export type AggregateKategori_pelatihan = {
    _count: Kategori_pelatihanCountAggregateOutputType | null
    _avg: Kategori_pelatihanAvgAggregateOutputType | null
    _sum: Kategori_pelatihanSumAggregateOutputType | null
    _min: Kategori_pelatihanMinAggregateOutputType | null
    _max: Kategori_pelatihanMaxAggregateOutputType | null
  }

  export type Kategori_pelatihanAvgAggregateOutputType = {
    id_kategori: number | null
  }

  export type Kategori_pelatihanSumAggregateOutputType = {
    id_kategori: number | null
  }

  export type Kategori_pelatihanMinAggregateOutputType = {
    id_kategori: number | null
    nama_kategori: string | null
  }

  export type Kategori_pelatihanMaxAggregateOutputType = {
    id_kategori: number | null
    nama_kategori: string | null
  }

  export type Kategori_pelatihanCountAggregateOutputType = {
    id_kategori: number
    nama_kategori: number
    _all: number
  }


  export type Kategori_pelatihanAvgAggregateInputType = {
    id_kategori?: true
  }

  export type Kategori_pelatihanSumAggregateInputType = {
    id_kategori?: true
  }

  export type Kategori_pelatihanMinAggregateInputType = {
    id_kategori?: true
    nama_kategori?: true
  }

  export type Kategori_pelatihanMaxAggregateInputType = {
    id_kategori?: true
    nama_kategori?: true
  }

  export type Kategori_pelatihanCountAggregateInputType = {
    id_kategori?: true
    nama_kategori?: true
    _all?: true
  }

  export type Kategori_pelatihanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kategori_pelatihan to aggregate.
     */
    where?: kategori_pelatihanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kategori_pelatihans to fetch.
     */
    orderBy?: kategori_pelatihanOrderByWithRelationInput | kategori_pelatihanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kategori_pelatihanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kategori_pelatihans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kategori_pelatihans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kategori_pelatihans
    **/
    _count?: true | Kategori_pelatihanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Kategori_pelatihanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Kategori_pelatihanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Kategori_pelatihanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Kategori_pelatihanMaxAggregateInputType
  }

  export type GetKategori_pelatihanAggregateType<T extends Kategori_pelatihanAggregateArgs> = {
        [P in keyof T & keyof AggregateKategori_pelatihan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKategori_pelatihan[P]>
      : GetScalarType<T[P], AggregateKategori_pelatihan[P]>
  }




  export type kategori_pelatihanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kategori_pelatihanWhereInput
    orderBy?: kategori_pelatihanOrderByWithAggregationInput | kategori_pelatihanOrderByWithAggregationInput[]
    by: Kategori_pelatihanScalarFieldEnum[] | Kategori_pelatihanScalarFieldEnum
    having?: kategori_pelatihanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Kategori_pelatihanCountAggregateInputType | true
    _avg?: Kategori_pelatihanAvgAggregateInputType
    _sum?: Kategori_pelatihanSumAggregateInputType
    _min?: Kategori_pelatihanMinAggregateInputType
    _max?: Kategori_pelatihanMaxAggregateInputType
  }

  export type Kategori_pelatihanGroupByOutputType = {
    id_kategori: number
    nama_kategori: string
    _count: Kategori_pelatihanCountAggregateOutputType | null
    _avg: Kategori_pelatihanAvgAggregateOutputType | null
    _sum: Kategori_pelatihanSumAggregateOutputType | null
    _min: Kategori_pelatihanMinAggregateOutputType | null
    _max: Kategori_pelatihanMaxAggregateOutputType | null
  }

  type GetKategori_pelatihanGroupByPayload<T extends kategori_pelatihanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Kategori_pelatihanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Kategori_pelatihanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Kategori_pelatihanGroupByOutputType[P]>
            : GetScalarType<T[P], Kategori_pelatihanGroupByOutputType[P]>
        }
      >
    >


  export type kategori_pelatihanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kategori?: boolean
    nama_kategori?: boolean
    data?: boolean | kategori_pelatihan$dataArgs<ExtArgs>
    _count?: boolean | Kategori_pelatihanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kategori_pelatihan"]>



  export type kategori_pelatihanSelectScalar = {
    id_kategori?: boolean
    nama_kategori?: boolean
  }

  export type kategori_pelatihanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_kategori" | "nama_kategori", ExtArgs["result"]["kategori_pelatihan"]>
  export type kategori_pelatihanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data?: boolean | kategori_pelatihan$dataArgs<ExtArgs>
    _count?: boolean | Kategori_pelatihanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $kategori_pelatihanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kategori_pelatihan"
    objects: {
      data: Prisma.$data_pelatihanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_kategori: number
      nama_kategori: string
    }, ExtArgs["result"]["kategori_pelatihan"]>
    composites: {}
  }

  type kategori_pelatihanGetPayload<S extends boolean | null | undefined | kategori_pelatihanDefaultArgs> = $Result.GetResult<Prisma.$kategori_pelatihanPayload, S>

  type kategori_pelatihanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<kategori_pelatihanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Kategori_pelatihanCountAggregateInputType | true
    }

  export interface kategori_pelatihanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kategori_pelatihan'], meta: { name: 'kategori_pelatihan' } }
    /**
     * Find zero or one Kategori_pelatihan that matches the filter.
     * @param {kategori_pelatihanFindUniqueArgs} args - Arguments to find a Kategori_pelatihan
     * @example
     * // Get one Kategori_pelatihan
     * const kategori_pelatihan = await prisma.kategori_pelatihan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends kategori_pelatihanFindUniqueArgs>(args: SelectSubset<T, kategori_pelatihanFindUniqueArgs<ExtArgs>>): Prisma__kategori_pelatihanClient<$Result.GetResult<Prisma.$kategori_pelatihanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kategori_pelatihan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {kategori_pelatihanFindUniqueOrThrowArgs} args - Arguments to find a Kategori_pelatihan
     * @example
     * // Get one Kategori_pelatihan
     * const kategori_pelatihan = await prisma.kategori_pelatihan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends kategori_pelatihanFindUniqueOrThrowArgs>(args: SelectSubset<T, kategori_pelatihanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__kategori_pelatihanClient<$Result.GetResult<Prisma.$kategori_pelatihanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori_pelatihan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategori_pelatihanFindFirstArgs} args - Arguments to find a Kategori_pelatihan
     * @example
     * // Get one Kategori_pelatihan
     * const kategori_pelatihan = await prisma.kategori_pelatihan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends kategori_pelatihanFindFirstArgs>(args?: SelectSubset<T, kategori_pelatihanFindFirstArgs<ExtArgs>>): Prisma__kategori_pelatihanClient<$Result.GetResult<Prisma.$kategori_pelatihanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori_pelatihan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategori_pelatihanFindFirstOrThrowArgs} args - Arguments to find a Kategori_pelatihan
     * @example
     * // Get one Kategori_pelatihan
     * const kategori_pelatihan = await prisma.kategori_pelatihan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends kategori_pelatihanFindFirstOrThrowArgs>(args?: SelectSubset<T, kategori_pelatihanFindFirstOrThrowArgs<ExtArgs>>): Prisma__kategori_pelatihanClient<$Result.GetResult<Prisma.$kategori_pelatihanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kategori_pelatihans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategori_pelatihanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kategori_pelatihans
     * const kategori_pelatihans = await prisma.kategori_pelatihan.findMany()
     * 
     * // Get first 10 Kategori_pelatihans
     * const kategori_pelatihans = await prisma.kategori_pelatihan.findMany({ take: 10 })
     * 
     * // Only select the `id_kategori`
     * const kategori_pelatihanWithId_kategoriOnly = await prisma.kategori_pelatihan.findMany({ select: { id_kategori: true } })
     * 
     */
    findMany<T extends kategori_pelatihanFindManyArgs>(args?: SelectSubset<T, kategori_pelatihanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kategori_pelatihanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kategori_pelatihan.
     * @param {kategori_pelatihanCreateArgs} args - Arguments to create a Kategori_pelatihan.
     * @example
     * // Create one Kategori_pelatihan
     * const Kategori_pelatihan = await prisma.kategori_pelatihan.create({
     *   data: {
     *     // ... data to create a Kategori_pelatihan
     *   }
     * })
     * 
     */
    create<T extends kategori_pelatihanCreateArgs>(args: SelectSubset<T, kategori_pelatihanCreateArgs<ExtArgs>>): Prisma__kategori_pelatihanClient<$Result.GetResult<Prisma.$kategori_pelatihanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kategori_pelatihans.
     * @param {kategori_pelatihanCreateManyArgs} args - Arguments to create many Kategori_pelatihans.
     * @example
     * // Create many Kategori_pelatihans
     * const kategori_pelatihan = await prisma.kategori_pelatihan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends kategori_pelatihanCreateManyArgs>(args?: SelectSubset<T, kategori_pelatihanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kategori_pelatihan.
     * @param {kategori_pelatihanDeleteArgs} args - Arguments to delete one Kategori_pelatihan.
     * @example
     * // Delete one Kategori_pelatihan
     * const Kategori_pelatihan = await prisma.kategori_pelatihan.delete({
     *   where: {
     *     // ... filter to delete one Kategori_pelatihan
     *   }
     * })
     * 
     */
    delete<T extends kategori_pelatihanDeleteArgs>(args: SelectSubset<T, kategori_pelatihanDeleteArgs<ExtArgs>>): Prisma__kategori_pelatihanClient<$Result.GetResult<Prisma.$kategori_pelatihanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kategori_pelatihan.
     * @param {kategori_pelatihanUpdateArgs} args - Arguments to update one Kategori_pelatihan.
     * @example
     * // Update one Kategori_pelatihan
     * const kategori_pelatihan = await prisma.kategori_pelatihan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends kategori_pelatihanUpdateArgs>(args: SelectSubset<T, kategori_pelatihanUpdateArgs<ExtArgs>>): Prisma__kategori_pelatihanClient<$Result.GetResult<Prisma.$kategori_pelatihanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kategori_pelatihans.
     * @param {kategori_pelatihanDeleteManyArgs} args - Arguments to filter Kategori_pelatihans to delete.
     * @example
     * // Delete a few Kategori_pelatihans
     * const { count } = await prisma.kategori_pelatihan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends kategori_pelatihanDeleteManyArgs>(args?: SelectSubset<T, kategori_pelatihanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategori_pelatihans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategori_pelatihanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kategori_pelatihans
     * const kategori_pelatihan = await prisma.kategori_pelatihan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends kategori_pelatihanUpdateManyArgs>(args: SelectSubset<T, kategori_pelatihanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kategori_pelatihan.
     * @param {kategori_pelatihanUpsertArgs} args - Arguments to update or create a Kategori_pelatihan.
     * @example
     * // Update or create a Kategori_pelatihan
     * const kategori_pelatihan = await prisma.kategori_pelatihan.upsert({
     *   create: {
     *     // ... data to create a Kategori_pelatihan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kategori_pelatihan we want to update
     *   }
     * })
     */
    upsert<T extends kategori_pelatihanUpsertArgs>(args: SelectSubset<T, kategori_pelatihanUpsertArgs<ExtArgs>>): Prisma__kategori_pelatihanClient<$Result.GetResult<Prisma.$kategori_pelatihanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kategori_pelatihans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategori_pelatihanCountArgs} args - Arguments to filter Kategori_pelatihans to count.
     * @example
     * // Count the number of Kategori_pelatihans
     * const count = await prisma.kategori_pelatihan.count({
     *   where: {
     *     // ... the filter for the Kategori_pelatihans we want to count
     *   }
     * })
    **/
    count<T extends kategori_pelatihanCountArgs>(
      args?: Subset<T, kategori_pelatihanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Kategori_pelatihanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kategori_pelatihan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Kategori_pelatihanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Kategori_pelatihanAggregateArgs>(args: Subset<T, Kategori_pelatihanAggregateArgs>): Prisma.PrismaPromise<GetKategori_pelatihanAggregateType<T>>

    /**
     * Group by Kategori_pelatihan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategori_pelatihanGroupByArgs} args - Group by arguments.
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
      T extends kategori_pelatihanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kategori_pelatihanGroupByArgs['orderBy'] }
        : { orderBy?: kategori_pelatihanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, kategori_pelatihanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKategori_pelatihanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kategori_pelatihan model
   */
  readonly fields: kategori_pelatihanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kategori_pelatihan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kategori_pelatihanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    data<T extends kategori_pelatihan$dataArgs<ExtArgs> = {}>(args?: Subset<T, kategori_pelatihan$dataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$data_pelatihanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the kategori_pelatihan model
   */
  interface kategori_pelatihanFieldRefs {
    readonly id_kategori: FieldRef<"kategori_pelatihan", 'Int'>
    readonly nama_kategori: FieldRef<"kategori_pelatihan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * kategori_pelatihan findUnique
   */
  export type kategori_pelatihanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori_pelatihan
     */
    select?: kategori_pelatihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori_pelatihan
     */
    omit?: kategori_pelatihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategori_pelatihanInclude<ExtArgs> | null
    /**
     * Filter, which kategori_pelatihan to fetch.
     */
    where: kategori_pelatihanWhereUniqueInput
  }

  /**
   * kategori_pelatihan findUniqueOrThrow
   */
  export type kategori_pelatihanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori_pelatihan
     */
    select?: kategori_pelatihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori_pelatihan
     */
    omit?: kategori_pelatihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategori_pelatihanInclude<ExtArgs> | null
    /**
     * Filter, which kategori_pelatihan to fetch.
     */
    where: kategori_pelatihanWhereUniqueInput
  }

  /**
   * kategori_pelatihan findFirst
   */
  export type kategori_pelatihanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori_pelatihan
     */
    select?: kategori_pelatihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori_pelatihan
     */
    omit?: kategori_pelatihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategori_pelatihanInclude<ExtArgs> | null
    /**
     * Filter, which kategori_pelatihan to fetch.
     */
    where?: kategori_pelatihanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kategori_pelatihans to fetch.
     */
    orderBy?: kategori_pelatihanOrderByWithRelationInput | kategori_pelatihanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kategori_pelatihans.
     */
    cursor?: kategori_pelatihanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kategori_pelatihans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kategori_pelatihans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kategori_pelatihans.
     */
    distinct?: Kategori_pelatihanScalarFieldEnum | Kategori_pelatihanScalarFieldEnum[]
  }

  /**
   * kategori_pelatihan findFirstOrThrow
   */
  export type kategori_pelatihanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori_pelatihan
     */
    select?: kategori_pelatihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori_pelatihan
     */
    omit?: kategori_pelatihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategori_pelatihanInclude<ExtArgs> | null
    /**
     * Filter, which kategori_pelatihan to fetch.
     */
    where?: kategori_pelatihanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kategori_pelatihans to fetch.
     */
    orderBy?: kategori_pelatihanOrderByWithRelationInput | kategori_pelatihanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kategori_pelatihans.
     */
    cursor?: kategori_pelatihanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kategori_pelatihans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kategori_pelatihans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kategori_pelatihans.
     */
    distinct?: Kategori_pelatihanScalarFieldEnum | Kategori_pelatihanScalarFieldEnum[]
  }

  /**
   * kategori_pelatihan findMany
   */
  export type kategori_pelatihanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori_pelatihan
     */
    select?: kategori_pelatihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori_pelatihan
     */
    omit?: kategori_pelatihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategori_pelatihanInclude<ExtArgs> | null
    /**
     * Filter, which kategori_pelatihans to fetch.
     */
    where?: kategori_pelatihanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kategori_pelatihans to fetch.
     */
    orderBy?: kategori_pelatihanOrderByWithRelationInput | kategori_pelatihanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kategori_pelatihans.
     */
    cursor?: kategori_pelatihanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kategori_pelatihans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kategori_pelatihans.
     */
    skip?: number
    distinct?: Kategori_pelatihanScalarFieldEnum | Kategori_pelatihanScalarFieldEnum[]
  }

  /**
   * kategori_pelatihan create
   */
  export type kategori_pelatihanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori_pelatihan
     */
    select?: kategori_pelatihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori_pelatihan
     */
    omit?: kategori_pelatihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategori_pelatihanInclude<ExtArgs> | null
    /**
     * The data needed to create a kategori_pelatihan.
     */
    data: XOR<kategori_pelatihanCreateInput, kategori_pelatihanUncheckedCreateInput>
  }

  /**
   * kategori_pelatihan createMany
   */
  export type kategori_pelatihanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kategori_pelatihans.
     */
    data: kategori_pelatihanCreateManyInput | kategori_pelatihanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kategori_pelatihan update
   */
  export type kategori_pelatihanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori_pelatihan
     */
    select?: kategori_pelatihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori_pelatihan
     */
    omit?: kategori_pelatihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategori_pelatihanInclude<ExtArgs> | null
    /**
     * The data needed to update a kategori_pelatihan.
     */
    data: XOR<kategori_pelatihanUpdateInput, kategori_pelatihanUncheckedUpdateInput>
    /**
     * Choose, which kategori_pelatihan to update.
     */
    where: kategori_pelatihanWhereUniqueInput
  }

  /**
   * kategori_pelatihan updateMany
   */
  export type kategori_pelatihanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kategori_pelatihans.
     */
    data: XOR<kategori_pelatihanUpdateManyMutationInput, kategori_pelatihanUncheckedUpdateManyInput>
    /**
     * Filter which kategori_pelatihans to update
     */
    where?: kategori_pelatihanWhereInput
    /**
     * Limit how many kategori_pelatihans to update.
     */
    limit?: number
  }

  /**
   * kategori_pelatihan upsert
   */
  export type kategori_pelatihanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori_pelatihan
     */
    select?: kategori_pelatihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori_pelatihan
     */
    omit?: kategori_pelatihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategori_pelatihanInclude<ExtArgs> | null
    /**
     * The filter to search for the kategori_pelatihan to update in case it exists.
     */
    where: kategori_pelatihanWhereUniqueInput
    /**
     * In case the kategori_pelatihan found by the `where` argument doesn't exist, create a new kategori_pelatihan with this data.
     */
    create: XOR<kategori_pelatihanCreateInput, kategori_pelatihanUncheckedCreateInput>
    /**
     * In case the kategori_pelatihan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kategori_pelatihanUpdateInput, kategori_pelatihanUncheckedUpdateInput>
  }

  /**
   * kategori_pelatihan delete
   */
  export type kategori_pelatihanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori_pelatihan
     */
    select?: kategori_pelatihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori_pelatihan
     */
    omit?: kategori_pelatihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategori_pelatihanInclude<ExtArgs> | null
    /**
     * Filter which kategori_pelatihan to delete.
     */
    where: kategori_pelatihanWhereUniqueInput
  }

  /**
   * kategori_pelatihan deleteMany
   */
  export type kategori_pelatihanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kategori_pelatihans to delete
     */
    where?: kategori_pelatihanWhereInput
    /**
     * Limit how many kategori_pelatihans to delete.
     */
    limit?: number
  }

  /**
   * kategori_pelatihan.data
   */
  export type kategori_pelatihan$dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_pelatihan
     */
    select?: data_pelatihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_pelatihan
     */
    omit?: data_pelatihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_pelatihanInclude<ExtArgs> | null
    where?: data_pelatihanWhereInput
    orderBy?: data_pelatihanOrderByWithRelationInput | data_pelatihanOrderByWithRelationInput[]
    cursor?: data_pelatihanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Data_pelatihanScalarFieldEnum | Data_pelatihanScalarFieldEnum[]
  }

  /**
   * kategori_pelatihan without action
   */
  export type kategori_pelatihanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori_pelatihan
     */
    select?: kategori_pelatihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori_pelatihan
     */
    omit?: kategori_pelatihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategori_pelatihanInclude<ExtArgs> | null
  }


  /**
   * Model data_pelatihan
   */

  export type AggregateData_pelatihan = {
    _count: Data_pelatihanCountAggregateOutputType | null
    _avg: Data_pelatihanAvgAggregateOutputType | null
    _sum: Data_pelatihanSumAggregateOutputType | null
    _min: Data_pelatihanMinAggregateOutputType | null
    _max: Data_pelatihanMaxAggregateOutputType | null
  }

  export type Data_pelatihanAvgAggregateOutputType = {
    id_pelatihan: number | null
    id_kategori: number | null
  }

  export type Data_pelatihanSumAggregateOutputType = {
    id_pelatihan: number | null
    id_kategori: number | null
  }

  export type Data_pelatihanMinAggregateOutputType = {
    id_pelatihan: number | null
    nama_pelatihan: string | null
    tujuan: string | null
    persyaratan: string | null
    materi_pembelajaran: string | null
    instruktur: string | null
    sertifikasi: string | null
    metode_pembelajaran: string | null
    biaya: string | null
    fasilitas: string | null
    contact: string | null
    nama_kategori: string | null
    id_kategori: number | null
  }

  export type Data_pelatihanMaxAggregateOutputType = {
    id_pelatihan: number | null
    nama_pelatihan: string | null
    tujuan: string | null
    persyaratan: string | null
    materi_pembelajaran: string | null
    instruktur: string | null
    sertifikasi: string | null
    metode_pembelajaran: string | null
    biaya: string | null
    fasilitas: string | null
    contact: string | null
    nama_kategori: string | null
    id_kategori: number | null
  }

  export type Data_pelatihanCountAggregateOutputType = {
    id_pelatihan: number
    nama_pelatihan: number
    tujuan: number
    persyaratan: number
    materi_pembelajaran: number
    instruktur: number
    sertifikasi: number
    metode_pembelajaran: number
    biaya: number
    fasilitas: number
    contact: number
    nama_kategori: number
    id_kategori: number
    _all: number
  }


  export type Data_pelatihanAvgAggregateInputType = {
    id_pelatihan?: true
    id_kategori?: true
  }

  export type Data_pelatihanSumAggregateInputType = {
    id_pelatihan?: true
    id_kategori?: true
  }

  export type Data_pelatihanMinAggregateInputType = {
    id_pelatihan?: true
    nama_pelatihan?: true
    tujuan?: true
    persyaratan?: true
    materi_pembelajaran?: true
    instruktur?: true
    sertifikasi?: true
    metode_pembelajaran?: true
    biaya?: true
    fasilitas?: true
    contact?: true
    nama_kategori?: true
    id_kategori?: true
  }

  export type Data_pelatihanMaxAggregateInputType = {
    id_pelatihan?: true
    nama_pelatihan?: true
    tujuan?: true
    persyaratan?: true
    materi_pembelajaran?: true
    instruktur?: true
    sertifikasi?: true
    metode_pembelajaran?: true
    biaya?: true
    fasilitas?: true
    contact?: true
    nama_kategori?: true
    id_kategori?: true
  }

  export type Data_pelatihanCountAggregateInputType = {
    id_pelatihan?: true
    nama_pelatihan?: true
    tujuan?: true
    persyaratan?: true
    materi_pembelajaran?: true
    instruktur?: true
    sertifikasi?: true
    metode_pembelajaran?: true
    biaya?: true
    fasilitas?: true
    contact?: true
    nama_kategori?: true
    id_kategori?: true
    _all?: true
  }

  export type Data_pelatihanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which data_pelatihan to aggregate.
     */
    where?: data_pelatihanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data_pelatihans to fetch.
     */
    orderBy?: data_pelatihanOrderByWithRelationInput | data_pelatihanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: data_pelatihanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data_pelatihans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data_pelatihans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned data_pelatihans
    **/
    _count?: true | Data_pelatihanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Data_pelatihanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Data_pelatihanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Data_pelatihanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Data_pelatihanMaxAggregateInputType
  }

  export type GetData_pelatihanAggregateType<T extends Data_pelatihanAggregateArgs> = {
        [P in keyof T & keyof AggregateData_pelatihan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateData_pelatihan[P]>
      : GetScalarType<T[P], AggregateData_pelatihan[P]>
  }




  export type data_pelatihanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: data_pelatihanWhereInput
    orderBy?: data_pelatihanOrderByWithAggregationInput | data_pelatihanOrderByWithAggregationInput[]
    by: Data_pelatihanScalarFieldEnum[] | Data_pelatihanScalarFieldEnum
    having?: data_pelatihanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Data_pelatihanCountAggregateInputType | true
    _avg?: Data_pelatihanAvgAggregateInputType
    _sum?: Data_pelatihanSumAggregateInputType
    _min?: Data_pelatihanMinAggregateInputType
    _max?: Data_pelatihanMaxAggregateInputType
  }

  export type Data_pelatihanGroupByOutputType = {
    id_pelatihan: number
    nama_pelatihan: string | null
    tujuan: string
    persyaratan: string
    materi_pembelajaran: string
    instruktur: string
    sertifikasi: string
    metode_pembelajaran: string
    biaya: string
    fasilitas: string
    contact: string
    nama_kategori: string
    id_kategori: number
    _count: Data_pelatihanCountAggregateOutputType | null
    _avg: Data_pelatihanAvgAggregateOutputType | null
    _sum: Data_pelatihanSumAggregateOutputType | null
    _min: Data_pelatihanMinAggregateOutputType | null
    _max: Data_pelatihanMaxAggregateOutputType | null
  }

  type GetData_pelatihanGroupByPayload<T extends data_pelatihanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Data_pelatihanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Data_pelatihanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Data_pelatihanGroupByOutputType[P]>
            : GetScalarType<T[P], Data_pelatihanGroupByOutputType[P]>
        }
      >
    >


  export type data_pelatihanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pelatihan?: boolean
    nama_pelatihan?: boolean
    tujuan?: boolean
    persyaratan?: boolean
    materi_pembelajaran?: boolean
    instruktur?: boolean
    sertifikasi?: boolean
    metode_pembelajaran?: boolean
    biaya?: boolean
    fasilitas?: boolean
    contact?: boolean
    nama_kategori?: boolean
    id_kategori?: boolean
    kategori?: boolean | kategori_pelatihanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["data_pelatihan"]>



  export type data_pelatihanSelectScalar = {
    id_pelatihan?: boolean
    nama_pelatihan?: boolean
    tujuan?: boolean
    persyaratan?: boolean
    materi_pembelajaran?: boolean
    instruktur?: boolean
    sertifikasi?: boolean
    metode_pembelajaran?: boolean
    biaya?: boolean
    fasilitas?: boolean
    contact?: boolean
    nama_kategori?: boolean
    id_kategori?: boolean
  }

  export type data_pelatihanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pelatihan" | "nama_pelatihan" | "tujuan" | "persyaratan" | "materi_pembelajaran" | "instruktur" | "sertifikasi" | "metode_pembelajaran" | "biaya" | "fasilitas" | "contact" | "nama_kategori" | "id_kategori", ExtArgs["result"]["data_pelatihan"]>
  export type data_pelatihanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | kategori_pelatihanDefaultArgs<ExtArgs>
  }

  export type $data_pelatihanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "data_pelatihan"
    objects: {
      kategori: Prisma.$kategori_pelatihanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pelatihan: number
      nama_pelatihan: string | null
      tujuan: string
      persyaratan: string
      materi_pembelajaran: string
      instruktur: string
      sertifikasi: string
      metode_pembelajaran: string
      biaya: string
      fasilitas: string
      contact: string
      nama_kategori: string
      id_kategori: number
    }, ExtArgs["result"]["data_pelatihan"]>
    composites: {}
  }

  type data_pelatihanGetPayload<S extends boolean | null | undefined | data_pelatihanDefaultArgs> = $Result.GetResult<Prisma.$data_pelatihanPayload, S>

  type data_pelatihanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<data_pelatihanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Data_pelatihanCountAggregateInputType | true
    }

  export interface data_pelatihanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['data_pelatihan'], meta: { name: 'data_pelatihan' } }
    /**
     * Find zero or one Data_pelatihan that matches the filter.
     * @param {data_pelatihanFindUniqueArgs} args - Arguments to find a Data_pelatihan
     * @example
     * // Get one Data_pelatihan
     * const data_pelatihan = await prisma.data_pelatihan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends data_pelatihanFindUniqueArgs>(args: SelectSubset<T, data_pelatihanFindUniqueArgs<ExtArgs>>): Prisma__data_pelatihanClient<$Result.GetResult<Prisma.$data_pelatihanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Data_pelatihan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {data_pelatihanFindUniqueOrThrowArgs} args - Arguments to find a Data_pelatihan
     * @example
     * // Get one Data_pelatihan
     * const data_pelatihan = await prisma.data_pelatihan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends data_pelatihanFindUniqueOrThrowArgs>(args: SelectSubset<T, data_pelatihanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__data_pelatihanClient<$Result.GetResult<Prisma.$data_pelatihanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Data_pelatihan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_pelatihanFindFirstArgs} args - Arguments to find a Data_pelatihan
     * @example
     * // Get one Data_pelatihan
     * const data_pelatihan = await prisma.data_pelatihan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends data_pelatihanFindFirstArgs>(args?: SelectSubset<T, data_pelatihanFindFirstArgs<ExtArgs>>): Prisma__data_pelatihanClient<$Result.GetResult<Prisma.$data_pelatihanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Data_pelatihan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_pelatihanFindFirstOrThrowArgs} args - Arguments to find a Data_pelatihan
     * @example
     * // Get one Data_pelatihan
     * const data_pelatihan = await prisma.data_pelatihan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends data_pelatihanFindFirstOrThrowArgs>(args?: SelectSubset<T, data_pelatihanFindFirstOrThrowArgs<ExtArgs>>): Prisma__data_pelatihanClient<$Result.GetResult<Prisma.$data_pelatihanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Data_pelatihans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_pelatihanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Data_pelatihans
     * const data_pelatihans = await prisma.data_pelatihan.findMany()
     * 
     * // Get first 10 Data_pelatihans
     * const data_pelatihans = await prisma.data_pelatihan.findMany({ take: 10 })
     * 
     * // Only select the `id_pelatihan`
     * const data_pelatihanWithId_pelatihanOnly = await prisma.data_pelatihan.findMany({ select: { id_pelatihan: true } })
     * 
     */
    findMany<T extends data_pelatihanFindManyArgs>(args?: SelectSubset<T, data_pelatihanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$data_pelatihanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Data_pelatihan.
     * @param {data_pelatihanCreateArgs} args - Arguments to create a Data_pelatihan.
     * @example
     * // Create one Data_pelatihan
     * const Data_pelatihan = await prisma.data_pelatihan.create({
     *   data: {
     *     // ... data to create a Data_pelatihan
     *   }
     * })
     * 
     */
    create<T extends data_pelatihanCreateArgs>(args: SelectSubset<T, data_pelatihanCreateArgs<ExtArgs>>): Prisma__data_pelatihanClient<$Result.GetResult<Prisma.$data_pelatihanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Data_pelatihans.
     * @param {data_pelatihanCreateManyArgs} args - Arguments to create many Data_pelatihans.
     * @example
     * // Create many Data_pelatihans
     * const data_pelatihan = await prisma.data_pelatihan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends data_pelatihanCreateManyArgs>(args?: SelectSubset<T, data_pelatihanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Data_pelatihan.
     * @param {data_pelatihanDeleteArgs} args - Arguments to delete one Data_pelatihan.
     * @example
     * // Delete one Data_pelatihan
     * const Data_pelatihan = await prisma.data_pelatihan.delete({
     *   where: {
     *     // ... filter to delete one Data_pelatihan
     *   }
     * })
     * 
     */
    delete<T extends data_pelatihanDeleteArgs>(args: SelectSubset<T, data_pelatihanDeleteArgs<ExtArgs>>): Prisma__data_pelatihanClient<$Result.GetResult<Prisma.$data_pelatihanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Data_pelatihan.
     * @param {data_pelatihanUpdateArgs} args - Arguments to update one Data_pelatihan.
     * @example
     * // Update one Data_pelatihan
     * const data_pelatihan = await prisma.data_pelatihan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends data_pelatihanUpdateArgs>(args: SelectSubset<T, data_pelatihanUpdateArgs<ExtArgs>>): Prisma__data_pelatihanClient<$Result.GetResult<Prisma.$data_pelatihanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Data_pelatihans.
     * @param {data_pelatihanDeleteManyArgs} args - Arguments to filter Data_pelatihans to delete.
     * @example
     * // Delete a few Data_pelatihans
     * const { count } = await prisma.data_pelatihan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends data_pelatihanDeleteManyArgs>(args?: SelectSubset<T, data_pelatihanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Data_pelatihans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_pelatihanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Data_pelatihans
     * const data_pelatihan = await prisma.data_pelatihan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends data_pelatihanUpdateManyArgs>(args: SelectSubset<T, data_pelatihanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Data_pelatihan.
     * @param {data_pelatihanUpsertArgs} args - Arguments to update or create a Data_pelatihan.
     * @example
     * // Update or create a Data_pelatihan
     * const data_pelatihan = await prisma.data_pelatihan.upsert({
     *   create: {
     *     // ... data to create a Data_pelatihan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Data_pelatihan we want to update
     *   }
     * })
     */
    upsert<T extends data_pelatihanUpsertArgs>(args: SelectSubset<T, data_pelatihanUpsertArgs<ExtArgs>>): Prisma__data_pelatihanClient<$Result.GetResult<Prisma.$data_pelatihanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Data_pelatihans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_pelatihanCountArgs} args - Arguments to filter Data_pelatihans to count.
     * @example
     * // Count the number of Data_pelatihans
     * const count = await prisma.data_pelatihan.count({
     *   where: {
     *     // ... the filter for the Data_pelatihans we want to count
     *   }
     * })
    **/
    count<T extends data_pelatihanCountArgs>(
      args?: Subset<T, data_pelatihanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Data_pelatihanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Data_pelatihan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Data_pelatihanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Data_pelatihanAggregateArgs>(args: Subset<T, Data_pelatihanAggregateArgs>): Prisma.PrismaPromise<GetData_pelatihanAggregateType<T>>

    /**
     * Group by Data_pelatihan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_pelatihanGroupByArgs} args - Group by arguments.
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
      T extends data_pelatihanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: data_pelatihanGroupByArgs['orderBy'] }
        : { orderBy?: data_pelatihanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, data_pelatihanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetData_pelatihanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the data_pelatihan model
   */
  readonly fields: data_pelatihanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for data_pelatihan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__data_pelatihanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kategori<T extends kategori_pelatihanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, kategori_pelatihanDefaultArgs<ExtArgs>>): Prisma__kategori_pelatihanClient<$Result.GetResult<Prisma.$kategori_pelatihanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the data_pelatihan model
   */
  interface data_pelatihanFieldRefs {
    readonly id_pelatihan: FieldRef<"data_pelatihan", 'Int'>
    readonly nama_pelatihan: FieldRef<"data_pelatihan", 'String'>
    readonly tujuan: FieldRef<"data_pelatihan", 'String'>
    readonly persyaratan: FieldRef<"data_pelatihan", 'String'>
    readonly materi_pembelajaran: FieldRef<"data_pelatihan", 'String'>
    readonly instruktur: FieldRef<"data_pelatihan", 'String'>
    readonly sertifikasi: FieldRef<"data_pelatihan", 'String'>
    readonly metode_pembelajaran: FieldRef<"data_pelatihan", 'String'>
    readonly biaya: FieldRef<"data_pelatihan", 'String'>
    readonly fasilitas: FieldRef<"data_pelatihan", 'String'>
    readonly contact: FieldRef<"data_pelatihan", 'String'>
    readonly nama_kategori: FieldRef<"data_pelatihan", 'String'>
    readonly id_kategori: FieldRef<"data_pelatihan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * data_pelatihan findUnique
   */
  export type data_pelatihanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_pelatihan
     */
    select?: data_pelatihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_pelatihan
     */
    omit?: data_pelatihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_pelatihanInclude<ExtArgs> | null
    /**
     * Filter, which data_pelatihan to fetch.
     */
    where: data_pelatihanWhereUniqueInput
  }

  /**
   * data_pelatihan findUniqueOrThrow
   */
  export type data_pelatihanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_pelatihan
     */
    select?: data_pelatihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_pelatihan
     */
    omit?: data_pelatihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_pelatihanInclude<ExtArgs> | null
    /**
     * Filter, which data_pelatihan to fetch.
     */
    where: data_pelatihanWhereUniqueInput
  }

  /**
   * data_pelatihan findFirst
   */
  export type data_pelatihanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_pelatihan
     */
    select?: data_pelatihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_pelatihan
     */
    omit?: data_pelatihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_pelatihanInclude<ExtArgs> | null
    /**
     * Filter, which data_pelatihan to fetch.
     */
    where?: data_pelatihanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data_pelatihans to fetch.
     */
    orderBy?: data_pelatihanOrderByWithRelationInput | data_pelatihanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for data_pelatihans.
     */
    cursor?: data_pelatihanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data_pelatihans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data_pelatihans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of data_pelatihans.
     */
    distinct?: Data_pelatihanScalarFieldEnum | Data_pelatihanScalarFieldEnum[]
  }

  /**
   * data_pelatihan findFirstOrThrow
   */
  export type data_pelatihanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_pelatihan
     */
    select?: data_pelatihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_pelatihan
     */
    omit?: data_pelatihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_pelatihanInclude<ExtArgs> | null
    /**
     * Filter, which data_pelatihan to fetch.
     */
    where?: data_pelatihanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data_pelatihans to fetch.
     */
    orderBy?: data_pelatihanOrderByWithRelationInput | data_pelatihanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for data_pelatihans.
     */
    cursor?: data_pelatihanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data_pelatihans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data_pelatihans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of data_pelatihans.
     */
    distinct?: Data_pelatihanScalarFieldEnum | Data_pelatihanScalarFieldEnum[]
  }

  /**
   * data_pelatihan findMany
   */
  export type data_pelatihanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_pelatihan
     */
    select?: data_pelatihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_pelatihan
     */
    omit?: data_pelatihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_pelatihanInclude<ExtArgs> | null
    /**
     * Filter, which data_pelatihans to fetch.
     */
    where?: data_pelatihanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data_pelatihans to fetch.
     */
    orderBy?: data_pelatihanOrderByWithRelationInput | data_pelatihanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing data_pelatihans.
     */
    cursor?: data_pelatihanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data_pelatihans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data_pelatihans.
     */
    skip?: number
    distinct?: Data_pelatihanScalarFieldEnum | Data_pelatihanScalarFieldEnum[]
  }

  /**
   * data_pelatihan create
   */
  export type data_pelatihanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_pelatihan
     */
    select?: data_pelatihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_pelatihan
     */
    omit?: data_pelatihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_pelatihanInclude<ExtArgs> | null
    /**
     * The data needed to create a data_pelatihan.
     */
    data: XOR<data_pelatihanCreateInput, data_pelatihanUncheckedCreateInput>
  }

  /**
   * data_pelatihan createMany
   */
  export type data_pelatihanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many data_pelatihans.
     */
    data: data_pelatihanCreateManyInput | data_pelatihanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * data_pelatihan update
   */
  export type data_pelatihanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_pelatihan
     */
    select?: data_pelatihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_pelatihan
     */
    omit?: data_pelatihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_pelatihanInclude<ExtArgs> | null
    /**
     * The data needed to update a data_pelatihan.
     */
    data: XOR<data_pelatihanUpdateInput, data_pelatihanUncheckedUpdateInput>
    /**
     * Choose, which data_pelatihan to update.
     */
    where: data_pelatihanWhereUniqueInput
  }

  /**
   * data_pelatihan updateMany
   */
  export type data_pelatihanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update data_pelatihans.
     */
    data: XOR<data_pelatihanUpdateManyMutationInput, data_pelatihanUncheckedUpdateManyInput>
    /**
     * Filter which data_pelatihans to update
     */
    where?: data_pelatihanWhereInput
    /**
     * Limit how many data_pelatihans to update.
     */
    limit?: number
  }

  /**
   * data_pelatihan upsert
   */
  export type data_pelatihanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_pelatihan
     */
    select?: data_pelatihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_pelatihan
     */
    omit?: data_pelatihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_pelatihanInclude<ExtArgs> | null
    /**
     * The filter to search for the data_pelatihan to update in case it exists.
     */
    where: data_pelatihanWhereUniqueInput
    /**
     * In case the data_pelatihan found by the `where` argument doesn't exist, create a new data_pelatihan with this data.
     */
    create: XOR<data_pelatihanCreateInput, data_pelatihanUncheckedCreateInput>
    /**
     * In case the data_pelatihan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<data_pelatihanUpdateInput, data_pelatihanUncheckedUpdateInput>
  }

  /**
   * data_pelatihan delete
   */
  export type data_pelatihanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_pelatihan
     */
    select?: data_pelatihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_pelatihan
     */
    omit?: data_pelatihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_pelatihanInclude<ExtArgs> | null
    /**
     * Filter which data_pelatihan to delete.
     */
    where: data_pelatihanWhereUniqueInput
  }

  /**
   * data_pelatihan deleteMany
   */
  export type data_pelatihanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which data_pelatihans to delete
     */
    where?: data_pelatihanWhereInput
    /**
     * Limit how many data_pelatihans to delete.
     */
    limit?: number
  }

  /**
   * data_pelatihan without action
   */
  export type data_pelatihanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_pelatihan
     */
    select?: data_pelatihanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_pelatihan
     */
    omit?: data_pelatihanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_pelatihanInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role',
    akses: 'akses'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const JadwalScalarFieldEnum: {
    id: 'id',
    bidang: 'bidang',
    nama: 'nama',
    harga: 'harga',
    jmlHari: 'jmlHari',
    bulan: 'bulan',
    tanggal: 'tanggal'
  };

  export type JadwalScalarFieldEnum = (typeof JadwalScalarFieldEnum)[keyof typeof JadwalScalarFieldEnum]


  export const DataPendaftarScalarFieldEnum: {
    id: 'id',
    institusi: 'institusi',
    alamat: 'alamat',
    telepon: 'telepon',
    fax: 'fax',
    email: 'email',
    namaPeserta: 'namaPeserta',
    telPeserta: 'telPeserta',
    emailPeserta: 'emailPeserta',
    pelatihan: 'pelatihan'
  };

  export type DataPendaftarScalarFieldEnum = (typeof DataPendaftarScalarFieldEnum)[keyof typeof DataPendaftarScalarFieldEnum]


  export const Kategori_pelatihanScalarFieldEnum: {
    id_kategori: 'id_kategori',
    nama_kategori: 'nama_kategori'
  };

  export type Kategori_pelatihanScalarFieldEnum = (typeof Kategori_pelatihanScalarFieldEnum)[keyof typeof Kategori_pelatihanScalarFieldEnum]


  export const Data_pelatihanScalarFieldEnum: {
    id_pelatihan: 'id_pelatihan',
    nama_pelatihan: 'nama_pelatihan',
    tujuan: 'tujuan',
    persyaratan: 'persyaratan',
    materi_pembelajaran: 'materi_pembelajaran',
    instruktur: 'instruktur',
    sertifikasi: 'sertifikasi',
    metode_pembelajaran: 'metode_pembelajaran',
    biaya: 'biaya',
    fasilitas: 'fasilitas',
    contact: 'contact',
    nama_kategori: 'nama_kategori',
    id_kategori: 'id_kategori'
  };

  export type Data_pelatihanScalarFieldEnum = (typeof Data_pelatihanScalarFieldEnum)[keyof typeof Data_pelatihanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const AdminOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password',
    role: 'role'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JadwalOrderByRelevanceFieldEnum: {
    bidang: 'bidang',
    nama: 'nama',
    bulan: 'bulan',
    tanggal: 'tanggal'
  };

  export type JadwalOrderByRelevanceFieldEnum = (typeof JadwalOrderByRelevanceFieldEnum)[keyof typeof JadwalOrderByRelevanceFieldEnum]


  export const DataPendaftarOrderByRelevanceFieldEnum: {
    institusi: 'institusi',
    alamat: 'alamat',
    telepon: 'telepon',
    fax: 'fax',
    email: 'email',
    namaPeserta: 'namaPeserta',
    telPeserta: 'telPeserta',
    emailPeserta: 'emailPeserta',
    pelatihan: 'pelatihan'
  };

  export type DataPendaftarOrderByRelevanceFieldEnum = (typeof DataPendaftarOrderByRelevanceFieldEnum)[keyof typeof DataPendaftarOrderByRelevanceFieldEnum]


  export const kategori_pelatihanOrderByRelevanceFieldEnum: {
    nama_kategori: 'nama_kategori'
  };

  export type kategori_pelatihanOrderByRelevanceFieldEnum = (typeof kategori_pelatihanOrderByRelevanceFieldEnum)[keyof typeof kategori_pelatihanOrderByRelevanceFieldEnum]


  export const data_pelatihanOrderByRelevanceFieldEnum: {
    nama_pelatihan: 'nama_pelatihan',
    tujuan: 'tujuan',
    persyaratan: 'persyaratan',
    materi_pembelajaran: 'materi_pembelajaran',
    instruktur: 'instruktur',
    sertifikasi: 'sertifikasi',
    metode_pembelajaran: 'metode_pembelajaran',
    biaya: 'biaya',
    fasilitas: 'fasilitas',
    contact: 'contact',
    nama_kategori: 'nama_kategori'
  };

  export type data_pelatihanOrderByRelevanceFieldEnum = (typeof data_pelatihanOrderByRelevanceFieldEnum)[keyof typeof data_pelatihanOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    username?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    role?: StringFilter<"Admin"> | string
    akses?: BoolFilter<"Admin"> | boolean
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    akses?: SortOrder
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    role?: StringFilter<"Admin"> | string
    akses?: BoolFilter<"Admin"> | boolean
  }, "id" | "username">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    akses?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    username?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    role?: StringWithAggregatesFilter<"Admin"> | string
    akses?: BoolWithAggregatesFilter<"Admin"> | boolean
  }

  export type JadwalWhereInput = {
    AND?: JadwalWhereInput | JadwalWhereInput[]
    OR?: JadwalWhereInput[]
    NOT?: JadwalWhereInput | JadwalWhereInput[]
    id?: IntFilter<"Jadwal"> | number
    bidang?: StringFilter<"Jadwal"> | string
    nama?: StringFilter<"Jadwal"> | string
    harga?: IntFilter<"Jadwal"> | number
    jmlHari?: IntFilter<"Jadwal"> | number
    bulan?: StringNullableFilter<"Jadwal"> | string | null
    tanggal?: StringNullableFilter<"Jadwal"> | string | null
  }

  export type JadwalOrderByWithRelationInput = {
    id?: SortOrder
    bidang?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    jmlHari?: SortOrder
    bulan?: SortOrderInput | SortOrder
    tanggal?: SortOrderInput | SortOrder
    _relevance?: JadwalOrderByRelevanceInput
  }

  export type JadwalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JadwalWhereInput | JadwalWhereInput[]
    OR?: JadwalWhereInput[]
    NOT?: JadwalWhereInput | JadwalWhereInput[]
    bidang?: StringFilter<"Jadwal"> | string
    nama?: StringFilter<"Jadwal"> | string
    harga?: IntFilter<"Jadwal"> | number
    jmlHari?: IntFilter<"Jadwal"> | number
    bulan?: StringNullableFilter<"Jadwal"> | string | null
    tanggal?: StringNullableFilter<"Jadwal"> | string | null
  }, "id">

  export type JadwalOrderByWithAggregationInput = {
    id?: SortOrder
    bidang?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    jmlHari?: SortOrder
    bulan?: SortOrderInput | SortOrder
    tanggal?: SortOrderInput | SortOrder
    _count?: JadwalCountOrderByAggregateInput
    _avg?: JadwalAvgOrderByAggregateInput
    _max?: JadwalMaxOrderByAggregateInput
    _min?: JadwalMinOrderByAggregateInput
    _sum?: JadwalSumOrderByAggregateInput
  }

  export type JadwalScalarWhereWithAggregatesInput = {
    AND?: JadwalScalarWhereWithAggregatesInput | JadwalScalarWhereWithAggregatesInput[]
    OR?: JadwalScalarWhereWithAggregatesInput[]
    NOT?: JadwalScalarWhereWithAggregatesInput | JadwalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Jadwal"> | number
    bidang?: StringWithAggregatesFilter<"Jadwal"> | string
    nama?: StringWithAggregatesFilter<"Jadwal"> | string
    harga?: IntWithAggregatesFilter<"Jadwal"> | number
    jmlHari?: IntWithAggregatesFilter<"Jadwal"> | number
    bulan?: StringNullableWithAggregatesFilter<"Jadwal"> | string | null
    tanggal?: StringNullableWithAggregatesFilter<"Jadwal"> | string | null
  }

  export type DataPendaftarWhereInput = {
    AND?: DataPendaftarWhereInput | DataPendaftarWhereInput[]
    OR?: DataPendaftarWhereInput[]
    NOT?: DataPendaftarWhereInput | DataPendaftarWhereInput[]
    id?: IntFilter<"DataPendaftar"> | number
    institusi?: StringFilter<"DataPendaftar"> | string
    alamat?: StringFilter<"DataPendaftar"> | string
    telepon?: StringFilter<"DataPendaftar"> | string
    fax?: StringFilter<"DataPendaftar"> | string
    email?: StringFilter<"DataPendaftar"> | string
    namaPeserta?: StringFilter<"DataPendaftar"> | string
    telPeserta?: StringFilter<"DataPendaftar"> | string
    emailPeserta?: StringFilter<"DataPendaftar"> | string
    pelatihan?: StringFilter<"DataPendaftar"> | string
  }

  export type DataPendaftarOrderByWithRelationInput = {
    id?: SortOrder
    institusi?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    fax?: SortOrder
    email?: SortOrder
    namaPeserta?: SortOrder
    telPeserta?: SortOrder
    emailPeserta?: SortOrder
    pelatihan?: SortOrder
    _relevance?: DataPendaftarOrderByRelevanceInput
  }

  export type DataPendaftarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DataPendaftarWhereInput | DataPendaftarWhereInput[]
    OR?: DataPendaftarWhereInput[]
    NOT?: DataPendaftarWhereInput | DataPendaftarWhereInput[]
    institusi?: StringFilter<"DataPendaftar"> | string
    alamat?: StringFilter<"DataPendaftar"> | string
    telepon?: StringFilter<"DataPendaftar"> | string
    fax?: StringFilter<"DataPendaftar"> | string
    email?: StringFilter<"DataPendaftar"> | string
    namaPeserta?: StringFilter<"DataPendaftar"> | string
    telPeserta?: StringFilter<"DataPendaftar"> | string
    emailPeserta?: StringFilter<"DataPendaftar"> | string
    pelatihan?: StringFilter<"DataPendaftar"> | string
  }, "id">

  export type DataPendaftarOrderByWithAggregationInput = {
    id?: SortOrder
    institusi?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    fax?: SortOrder
    email?: SortOrder
    namaPeserta?: SortOrder
    telPeserta?: SortOrder
    emailPeserta?: SortOrder
    pelatihan?: SortOrder
    _count?: DataPendaftarCountOrderByAggregateInput
    _avg?: DataPendaftarAvgOrderByAggregateInput
    _max?: DataPendaftarMaxOrderByAggregateInput
    _min?: DataPendaftarMinOrderByAggregateInput
    _sum?: DataPendaftarSumOrderByAggregateInput
  }

  export type DataPendaftarScalarWhereWithAggregatesInput = {
    AND?: DataPendaftarScalarWhereWithAggregatesInput | DataPendaftarScalarWhereWithAggregatesInput[]
    OR?: DataPendaftarScalarWhereWithAggregatesInput[]
    NOT?: DataPendaftarScalarWhereWithAggregatesInput | DataPendaftarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DataPendaftar"> | number
    institusi?: StringWithAggregatesFilter<"DataPendaftar"> | string
    alamat?: StringWithAggregatesFilter<"DataPendaftar"> | string
    telepon?: StringWithAggregatesFilter<"DataPendaftar"> | string
    fax?: StringWithAggregatesFilter<"DataPendaftar"> | string
    email?: StringWithAggregatesFilter<"DataPendaftar"> | string
    namaPeserta?: StringWithAggregatesFilter<"DataPendaftar"> | string
    telPeserta?: StringWithAggregatesFilter<"DataPendaftar"> | string
    emailPeserta?: StringWithAggregatesFilter<"DataPendaftar"> | string
    pelatihan?: StringWithAggregatesFilter<"DataPendaftar"> | string
  }

  export type kategori_pelatihanWhereInput = {
    AND?: kategori_pelatihanWhereInput | kategori_pelatihanWhereInput[]
    OR?: kategori_pelatihanWhereInput[]
    NOT?: kategori_pelatihanWhereInput | kategori_pelatihanWhereInput[]
    id_kategori?: IntFilter<"kategori_pelatihan"> | number
    nama_kategori?: StringFilter<"kategori_pelatihan"> | string
    data?: Data_pelatihanListRelationFilter
  }

  export type kategori_pelatihanOrderByWithRelationInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
    data?: data_pelatihanOrderByRelationAggregateInput
    _relevance?: kategori_pelatihanOrderByRelevanceInput
  }

  export type kategori_pelatihanWhereUniqueInput = Prisma.AtLeast<{
    id_kategori?: number
    AND?: kategori_pelatihanWhereInput | kategori_pelatihanWhereInput[]
    OR?: kategori_pelatihanWhereInput[]
    NOT?: kategori_pelatihanWhereInput | kategori_pelatihanWhereInput[]
    nama_kategori?: StringFilter<"kategori_pelatihan"> | string
    data?: Data_pelatihanListRelationFilter
  }, "id_kategori">

  export type kategori_pelatihanOrderByWithAggregationInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
    _count?: kategori_pelatihanCountOrderByAggregateInput
    _avg?: kategori_pelatihanAvgOrderByAggregateInput
    _max?: kategori_pelatihanMaxOrderByAggregateInput
    _min?: kategori_pelatihanMinOrderByAggregateInput
    _sum?: kategori_pelatihanSumOrderByAggregateInput
  }

  export type kategori_pelatihanScalarWhereWithAggregatesInput = {
    AND?: kategori_pelatihanScalarWhereWithAggregatesInput | kategori_pelatihanScalarWhereWithAggregatesInput[]
    OR?: kategori_pelatihanScalarWhereWithAggregatesInput[]
    NOT?: kategori_pelatihanScalarWhereWithAggregatesInput | kategori_pelatihanScalarWhereWithAggregatesInput[]
    id_kategori?: IntWithAggregatesFilter<"kategori_pelatihan"> | number
    nama_kategori?: StringWithAggregatesFilter<"kategori_pelatihan"> | string
  }

  export type data_pelatihanWhereInput = {
    AND?: data_pelatihanWhereInput | data_pelatihanWhereInput[]
    OR?: data_pelatihanWhereInput[]
    NOT?: data_pelatihanWhereInput | data_pelatihanWhereInput[]
    id_pelatihan?: IntFilter<"data_pelatihan"> | number
    nama_pelatihan?: StringNullableFilter<"data_pelatihan"> | string | null
    tujuan?: StringFilter<"data_pelatihan"> | string
    persyaratan?: StringFilter<"data_pelatihan"> | string
    materi_pembelajaran?: StringFilter<"data_pelatihan"> | string
    instruktur?: StringFilter<"data_pelatihan"> | string
    sertifikasi?: StringFilter<"data_pelatihan"> | string
    metode_pembelajaran?: StringFilter<"data_pelatihan"> | string
    biaya?: StringFilter<"data_pelatihan"> | string
    fasilitas?: StringFilter<"data_pelatihan"> | string
    contact?: StringFilter<"data_pelatihan"> | string
    nama_kategori?: StringFilter<"data_pelatihan"> | string
    id_kategori?: IntFilter<"data_pelatihan"> | number
    kategori?: XOR<Kategori_pelatihanScalarRelationFilter, kategori_pelatihanWhereInput>
  }

  export type data_pelatihanOrderByWithRelationInput = {
    id_pelatihan?: SortOrder
    nama_pelatihan?: SortOrderInput | SortOrder
    tujuan?: SortOrder
    persyaratan?: SortOrder
    materi_pembelajaran?: SortOrder
    instruktur?: SortOrder
    sertifikasi?: SortOrder
    metode_pembelajaran?: SortOrder
    biaya?: SortOrder
    fasilitas?: SortOrder
    contact?: SortOrder
    nama_kategori?: SortOrder
    id_kategori?: SortOrder
    kategori?: kategori_pelatihanOrderByWithRelationInput
    _relevance?: data_pelatihanOrderByRelevanceInput
  }

  export type data_pelatihanWhereUniqueInput = Prisma.AtLeast<{
    id_pelatihan?: number
    AND?: data_pelatihanWhereInput | data_pelatihanWhereInput[]
    OR?: data_pelatihanWhereInput[]
    NOT?: data_pelatihanWhereInput | data_pelatihanWhereInput[]
    nama_pelatihan?: StringNullableFilter<"data_pelatihan"> | string | null
    tujuan?: StringFilter<"data_pelatihan"> | string
    persyaratan?: StringFilter<"data_pelatihan"> | string
    materi_pembelajaran?: StringFilter<"data_pelatihan"> | string
    instruktur?: StringFilter<"data_pelatihan"> | string
    sertifikasi?: StringFilter<"data_pelatihan"> | string
    metode_pembelajaran?: StringFilter<"data_pelatihan"> | string
    biaya?: StringFilter<"data_pelatihan"> | string
    fasilitas?: StringFilter<"data_pelatihan"> | string
    contact?: StringFilter<"data_pelatihan"> | string
    nama_kategori?: StringFilter<"data_pelatihan"> | string
    id_kategori?: IntFilter<"data_pelatihan"> | number
    kategori?: XOR<Kategori_pelatihanScalarRelationFilter, kategori_pelatihanWhereInput>
  }, "id_pelatihan">

  export type data_pelatihanOrderByWithAggregationInput = {
    id_pelatihan?: SortOrder
    nama_pelatihan?: SortOrderInput | SortOrder
    tujuan?: SortOrder
    persyaratan?: SortOrder
    materi_pembelajaran?: SortOrder
    instruktur?: SortOrder
    sertifikasi?: SortOrder
    metode_pembelajaran?: SortOrder
    biaya?: SortOrder
    fasilitas?: SortOrder
    contact?: SortOrder
    nama_kategori?: SortOrder
    id_kategori?: SortOrder
    _count?: data_pelatihanCountOrderByAggregateInput
    _avg?: data_pelatihanAvgOrderByAggregateInput
    _max?: data_pelatihanMaxOrderByAggregateInput
    _min?: data_pelatihanMinOrderByAggregateInput
    _sum?: data_pelatihanSumOrderByAggregateInput
  }

  export type data_pelatihanScalarWhereWithAggregatesInput = {
    AND?: data_pelatihanScalarWhereWithAggregatesInput | data_pelatihanScalarWhereWithAggregatesInput[]
    OR?: data_pelatihanScalarWhereWithAggregatesInput[]
    NOT?: data_pelatihanScalarWhereWithAggregatesInput | data_pelatihanScalarWhereWithAggregatesInput[]
    id_pelatihan?: IntWithAggregatesFilter<"data_pelatihan"> | number
    nama_pelatihan?: StringNullableWithAggregatesFilter<"data_pelatihan"> | string | null
    tujuan?: StringWithAggregatesFilter<"data_pelatihan"> | string
    persyaratan?: StringWithAggregatesFilter<"data_pelatihan"> | string
    materi_pembelajaran?: StringWithAggregatesFilter<"data_pelatihan"> | string
    instruktur?: StringWithAggregatesFilter<"data_pelatihan"> | string
    sertifikasi?: StringWithAggregatesFilter<"data_pelatihan"> | string
    metode_pembelajaran?: StringWithAggregatesFilter<"data_pelatihan"> | string
    biaya?: StringWithAggregatesFilter<"data_pelatihan"> | string
    fasilitas?: StringWithAggregatesFilter<"data_pelatihan"> | string
    contact?: StringWithAggregatesFilter<"data_pelatihan"> | string
    nama_kategori?: StringWithAggregatesFilter<"data_pelatihan"> | string
    id_kategori?: IntWithAggregatesFilter<"data_pelatihan"> | number
  }

  export type AdminCreateInput = {
    username: string
    password: string
    role?: string
    akses?: boolean
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    role?: string
    akses?: boolean
  }

  export type AdminUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    akses?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    akses?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdminCreateManyInput = {
    id?: number
    username: string
    password: string
    role?: string
    akses?: boolean
  }

  export type AdminUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    akses?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    akses?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JadwalCreateInput = {
    bidang: string
    nama: string
    harga: number
    jmlHari: number
    bulan?: string | null
    tanggal?: string | null
  }

  export type JadwalUncheckedCreateInput = {
    id?: number
    bidang: string
    nama: string
    harga: number
    jmlHari: number
    bulan?: string | null
    tanggal?: string | null
  }

  export type JadwalUpdateInput = {
    bidang?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    jmlHari?: IntFieldUpdateOperationsInput | number
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JadwalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bidang?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    jmlHari?: IntFieldUpdateOperationsInput | number
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JadwalCreateManyInput = {
    id?: number
    bidang: string
    nama: string
    harga: number
    jmlHari: number
    bulan?: string | null
    tanggal?: string | null
  }

  export type JadwalUpdateManyMutationInput = {
    bidang?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    jmlHari?: IntFieldUpdateOperationsInput | number
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JadwalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bidang?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    jmlHari?: IntFieldUpdateOperationsInput | number
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DataPendaftarCreateInput = {
    institusi: string
    alamat: string
    telepon: string
    fax: string
    email: string
    namaPeserta: string
    telPeserta: string
    emailPeserta: string
    pelatihan: string
  }

  export type DataPendaftarUncheckedCreateInput = {
    id?: number
    institusi: string
    alamat: string
    telepon: string
    fax: string
    email: string
    namaPeserta: string
    telPeserta: string
    emailPeserta: string
    pelatihan: string
  }

  export type DataPendaftarUpdateInput = {
    institusi?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    namaPeserta?: StringFieldUpdateOperationsInput | string
    telPeserta?: StringFieldUpdateOperationsInput | string
    emailPeserta?: StringFieldUpdateOperationsInput | string
    pelatihan?: StringFieldUpdateOperationsInput | string
  }

  export type DataPendaftarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    institusi?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    namaPeserta?: StringFieldUpdateOperationsInput | string
    telPeserta?: StringFieldUpdateOperationsInput | string
    emailPeserta?: StringFieldUpdateOperationsInput | string
    pelatihan?: StringFieldUpdateOperationsInput | string
  }

  export type DataPendaftarCreateManyInput = {
    id?: number
    institusi: string
    alamat: string
    telepon: string
    fax: string
    email: string
    namaPeserta: string
    telPeserta: string
    emailPeserta: string
    pelatihan: string
  }

  export type DataPendaftarUpdateManyMutationInput = {
    institusi?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    namaPeserta?: StringFieldUpdateOperationsInput | string
    telPeserta?: StringFieldUpdateOperationsInput | string
    emailPeserta?: StringFieldUpdateOperationsInput | string
    pelatihan?: StringFieldUpdateOperationsInput | string
  }

  export type DataPendaftarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    institusi?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    fax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    namaPeserta?: StringFieldUpdateOperationsInput | string
    telPeserta?: StringFieldUpdateOperationsInput | string
    emailPeserta?: StringFieldUpdateOperationsInput | string
    pelatihan?: StringFieldUpdateOperationsInput | string
  }

  export type kategori_pelatihanCreateInput = {
    nama_kategori: string
    data?: data_pelatihanCreateNestedManyWithoutKategoriInput
  }

  export type kategori_pelatihanUncheckedCreateInput = {
    id_kategori?: number
    nama_kategori: string
    data?: data_pelatihanUncheckedCreateNestedManyWithoutKategoriInput
  }

  export type kategori_pelatihanUpdateInput = {
    nama_kategori?: StringFieldUpdateOperationsInput | string
    data?: data_pelatihanUpdateManyWithoutKategoriNestedInput
  }

  export type kategori_pelatihanUncheckedUpdateInput = {
    id_kategori?: IntFieldUpdateOperationsInput | number
    nama_kategori?: StringFieldUpdateOperationsInput | string
    data?: data_pelatihanUncheckedUpdateManyWithoutKategoriNestedInput
  }

  export type kategori_pelatihanCreateManyInput = {
    id_kategori?: number
    nama_kategori: string
  }

  export type kategori_pelatihanUpdateManyMutationInput = {
    nama_kategori?: StringFieldUpdateOperationsInput | string
  }

  export type kategori_pelatihanUncheckedUpdateManyInput = {
    id_kategori?: IntFieldUpdateOperationsInput | number
    nama_kategori?: StringFieldUpdateOperationsInput | string
  }

  export type data_pelatihanCreateInput = {
    nama_pelatihan?: string | null
    tujuan: string
    persyaratan: string
    materi_pembelajaran: string
    instruktur: string
    sertifikasi: string
    metode_pembelajaran: string
    biaya: string
    fasilitas: string
    contact: string
    nama_kategori: string
    kategori: kategori_pelatihanCreateNestedOneWithoutDataInput
  }

  export type data_pelatihanUncheckedCreateInput = {
    id_pelatihan?: number
    nama_pelatihan?: string | null
    tujuan: string
    persyaratan: string
    materi_pembelajaran: string
    instruktur: string
    sertifikasi: string
    metode_pembelajaran: string
    biaya: string
    fasilitas: string
    contact: string
    nama_kategori: string
    id_kategori: number
  }

  export type data_pelatihanUpdateInput = {
    nama_pelatihan?: NullableStringFieldUpdateOperationsInput | string | null
    tujuan?: StringFieldUpdateOperationsInput | string
    persyaratan?: StringFieldUpdateOperationsInput | string
    materi_pembelajaran?: StringFieldUpdateOperationsInput | string
    instruktur?: StringFieldUpdateOperationsInput | string
    sertifikasi?: StringFieldUpdateOperationsInput | string
    metode_pembelajaran?: StringFieldUpdateOperationsInput | string
    biaya?: StringFieldUpdateOperationsInput | string
    fasilitas?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    nama_kategori?: StringFieldUpdateOperationsInput | string
    kategori?: kategori_pelatihanUpdateOneRequiredWithoutDataNestedInput
  }

  export type data_pelatihanUncheckedUpdateInput = {
    id_pelatihan?: IntFieldUpdateOperationsInput | number
    nama_pelatihan?: NullableStringFieldUpdateOperationsInput | string | null
    tujuan?: StringFieldUpdateOperationsInput | string
    persyaratan?: StringFieldUpdateOperationsInput | string
    materi_pembelajaran?: StringFieldUpdateOperationsInput | string
    instruktur?: StringFieldUpdateOperationsInput | string
    sertifikasi?: StringFieldUpdateOperationsInput | string
    metode_pembelajaran?: StringFieldUpdateOperationsInput | string
    biaya?: StringFieldUpdateOperationsInput | string
    fasilitas?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    nama_kategori?: StringFieldUpdateOperationsInput | string
    id_kategori?: IntFieldUpdateOperationsInput | number
  }

  export type data_pelatihanCreateManyInput = {
    id_pelatihan?: number
    nama_pelatihan?: string | null
    tujuan: string
    persyaratan: string
    materi_pembelajaran: string
    instruktur: string
    sertifikasi: string
    metode_pembelajaran: string
    biaya: string
    fasilitas: string
    contact: string
    nama_kategori: string
    id_kategori: number
  }

  export type data_pelatihanUpdateManyMutationInput = {
    nama_pelatihan?: NullableStringFieldUpdateOperationsInput | string | null
    tujuan?: StringFieldUpdateOperationsInput | string
    persyaratan?: StringFieldUpdateOperationsInput | string
    materi_pembelajaran?: StringFieldUpdateOperationsInput | string
    instruktur?: StringFieldUpdateOperationsInput | string
    sertifikasi?: StringFieldUpdateOperationsInput | string
    metode_pembelajaran?: StringFieldUpdateOperationsInput | string
    biaya?: StringFieldUpdateOperationsInput | string
    fasilitas?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    nama_kategori?: StringFieldUpdateOperationsInput | string
  }

  export type data_pelatihanUncheckedUpdateManyInput = {
    id_pelatihan?: IntFieldUpdateOperationsInput | number
    nama_pelatihan?: NullableStringFieldUpdateOperationsInput | string | null
    tujuan?: StringFieldUpdateOperationsInput | string
    persyaratan?: StringFieldUpdateOperationsInput | string
    materi_pembelajaran?: StringFieldUpdateOperationsInput | string
    instruktur?: StringFieldUpdateOperationsInput | string
    sertifikasi?: StringFieldUpdateOperationsInput | string
    metode_pembelajaran?: StringFieldUpdateOperationsInput | string
    biaya?: StringFieldUpdateOperationsInput | string
    fasilitas?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    nama_kategori?: StringFieldUpdateOperationsInput | string
    id_kategori?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    akses?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    akses?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    akses?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JadwalOrderByRelevanceInput = {
    fields: JadwalOrderByRelevanceFieldEnum | JadwalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JadwalCountOrderByAggregateInput = {
    id?: SortOrder
    bidang?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    jmlHari?: SortOrder
    bulan?: SortOrder
    tanggal?: SortOrder
  }

  export type JadwalAvgOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    jmlHari?: SortOrder
  }

  export type JadwalMaxOrderByAggregateInput = {
    id?: SortOrder
    bidang?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    jmlHari?: SortOrder
    bulan?: SortOrder
    tanggal?: SortOrder
  }

  export type JadwalMinOrderByAggregateInput = {
    id?: SortOrder
    bidang?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    jmlHari?: SortOrder
    bulan?: SortOrder
    tanggal?: SortOrder
  }

  export type JadwalSumOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    jmlHari?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DataPendaftarOrderByRelevanceInput = {
    fields: DataPendaftarOrderByRelevanceFieldEnum | DataPendaftarOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DataPendaftarCountOrderByAggregateInput = {
    id?: SortOrder
    institusi?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    fax?: SortOrder
    email?: SortOrder
    namaPeserta?: SortOrder
    telPeserta?: SortOrder
    emailPeserta?: SortOrder
    pelatihan?: SortOrder
  }

  export type DataPendaftarAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DataPendaftarMaxOrderByAggregateInput = {
    id?: SortOrder
    institusi?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    fax?: SortOrder
    email?: SortOrder
    namaPeserta?: SortOrder
    telPeserta?: SortOrder
    emailPeserta?: SortOrder
    pelatihan?: SortOrder
  }

  export type DataPendaftarMinOrderByAggregateInput = {
    id?: SortOrder
    institusi?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    fax?: SortOrder
    email?: SortOrder
    namaPeserta?: SortOrder
    telPeserta?: SortOrder
    emailPeserta?: SortOrder
    pelatihan?: SortOrder
  }

  export type DataPendaftarSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Data_pelatihanListRelationFilter = {
    every?: data_pelatihanWhereInput
    some?: data_pelatihanWhereInput
    none?: data_pelatihanWhereInput
  }

  export type data_pelatihanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type kategori_pelatihanOrderByRelevanceInput = {
    fields: kategori_pelatihanOrderByRelevanceFieldEnum | kategori_pelatihanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type kategori_pelatihanCountOrderByAggregateInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
  }

  export type kategori_pelatihanAvgOrderByAggregateInput = {
    id_kategori?: SortOrder
  }

  export type kategori_pelatihanMaxOrderByAggregateInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
  }

  export type kategori_pelatihanMinOrderByAggregateInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
  }

  export type kategori_pelatihanSumOrderByAggregateInput = {
    id_kategori?: SortOrder
  }

  export type Kategori_pelatihanScalarRelationFilter = {
    is?: kategori_pelatihanWhereInput
    isNot?: kategori_pelatihanWhereInput
  }

  export type data_pelatihanOrderByRelevanceInput = {
    fields: data_pelatihanOrderByRelevanceFieldEnum | data_pelatihanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type data_pelatihanCountOrderByAggregateInput = {
    id_pelatihan?: SortOrder
    nama_pelatihan?: SortOrder
    tujuan?: SortOrder
    persyaratan?: SortOrder
    materi_pembelajaran?: SortOrder
    instruktur?: SortOrder
    sertifikasi?: SortOrder
    metode_pembelajaran?: SortOrder
    biaya?: SortOrder
    fasilitas?: SortOrder
    contact?: SortOrder
    nama_kategori?: SortOrder
    id_kategori?: SortOrder
  }

  export type data_pelatihanAvgOrderByAggregateInput = {
    id_pelatihan?: SortOrder
    id_kategori?: SortOrder
  }

  export type data_pelatihanMaxOrderByAggregateInput = {
    id_pelatihan?: SortOrder
    nama_pelatihan?: SortOrder
    tujuan?: SortOrder
    persyaratan?: SortOrder
    materi_pembelajaran?: SortOrder
    instruktur?: SortOrder
    sertifikasi?: SortOrder
    metode_pembelajaran?: SortOrder
    biaya?: SortOrder
    fasilitas?: SortOrder
    contact?: SortOrder
    nama_kategori?: SortOrder
    id_kategori?: SortOrder
  }

  export type data_pelatihanMinOrderByAggregateInput = {
    id_pelatihan?: SortOrder
    nama_pelatihan?: SortOrder
    tujuan?: SortOrder
    persyaratan?: SortOrder
    materi_pembelajaran?: SortOrder
    instruktur?: SortOrder
    sertifikasi?: SortOrder
    metode_pembelajaran?: SortOrder
    biaya?: SortOrder
    fasilitas?: SortOrder
    contact?: SortOrder
    nama_kategori?: SortOrder
    id_kategori?: SortOrder
  }

  export type data_pelatihanSumOrderByAggregateInput = {
    id_pelatihan?: SortOrder
    id_kategori?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type data_pelatihanCreateNestedManyWithoutKategoriInput = {
    create?: XOR<data_pelatihanCreateWithoutKategoriInput, data_pelatihanUncheckedCreateWithoutKategoriInput> | data_pelatihanCreateWithoutKategoriInput[] | data_pelatihanUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: data_pelatihanCreateOrConnectWithoutKategoriInput | data_pelatihanCreateOrConnectWithoutKategoriInput[]
    createMany?: data_pelatihanCreateManyKategoriInputEnvelope
    connect?: data_pelatihanWhereUniqueInput | data_pelatihanWhereUniqueInput[]
  }

  export type data_pelatihanUncheckedCreateNestedManyWithoutKategoriInput = {
    create?: XOR<data_pelatihanCreateWithoutKategoriInput, data_pelatihanUncheckedCreateWithoutKategoriInput> | data_pelatihanCreateWithoutKategoriInput[] | data_pelatihanUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: data_pelatihanCreateOrConnectWithoutKategoriInput | data_pelatihanCreateOrConnectWithoutKategoriInput[]
    createMany?: data_pelatihanCreateManyKategoriInputEnvelope
    connect?: data_pelatihanWhereUniqueInput | data_pelatihanWhereUniqueInput[]
  }

  export type data_pelatihanUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<data_pelatihanCreateWithoutKategoriInput, data_pelatihanUncheckedCreateWithoutKategoriInput> | data_pelatihanCreateWithoutKategoriInput[] | data_pelatihanUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: data_pelatihanCreateOrConnectWithoutKategoriInput | data_pelatihanCreateOrConnectWithoutKategoriInput[]
    upsert?: data_pelatihanUpsertWithWhereUniqueWithoutKategoriInput | data_pelatihanUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: data_pelatihanCreateManyKategoriInputEnvelope
    set?: data_pelatihanWhereUniqueInput | data_pelatihanWhereUniqueInput[]
    disconnect?: data_pelatihanWhereUniqueInput | data_pelatihanWhereUniqueInput[]
    delete?: data_pelatihanWhereUniqueInput | data_pelatihanWhereUniqueInput[]
    connect?: data_pelatihanWhereUniqueInput | data_pelatihanWhereUniqueInput[]
    update?: data_pelatihanUpdateWithWhereUniqueWithoutKategoriInput | data_pelatihanUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: data_pelatihanUpdateManyWithWhereWithoutKategoriInput | data_pelatihanUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: data_pelatihanScalarWhereInput | data_pelatihanScalarWhereInput[]
  }

  export type data_pelatihanUncheckedUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<data_pelatihanCreateWithoutKategoriInput, data_pelatihanUncheckedCreateWithoutKategoriInput> | data_pelatihanCreateWithoutKategoriInput[] | data_pelatihanUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: data_pelatihanCreateOrConnectWithoutKategoriInput | data_pelatihanCreateOrConnectWithoutKategoriInput[]
    upsert?: data_pelatihanUpsertWithWhereUniqueWithoutKategoriInput | data_pelatihanUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: data_pelatihanCreateManyKategoriInputEnvelope
    set?: data_pelatihanWhereUniqueInput | data_pelatihanWhereUniqueInput[]
    disconnect?: data_pelatihanWhereUniqueInput | data_pelatihanWhereUniqueInput[]
    delete?: data_pelatihanWhereUniqueInput | data_pelatihanWhereUniqueInput[]
    connect?: data_pelatihanWhereUniqueInput | data_pelatihanWhereUniqueInput[]
    update?: data_pelatihanUpdateWithWhereUniqueWithoutKategoriInput | data_pelatihanUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: data_pelatihanUpdateManyWithWhereWithoutKategoriInput | data_pelatihanUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: data_pelatihanScalarWhereInput | data_pelatihanScalarWhereInput[]
  }

  export type kategori_pelatihanCreateNestedOneWithoutDataInput = {
    create?: XOR<kategori_pelatihanCreateWithoutDataInput, kategori_pelatihanUncheckedCreateWithoutDataInput>
    connectOrCreate?: kategori_pelatihanCreateOrConnectWithoutDataInput
    connect?: kategori_pelatihanWhereUniqueInput
  }

  export type kategori_pelatihanUpdateOneRequiredWithoutDataNestedInput = {
    create?: XOR<kategori_pelatihanCreateWithoutDataInput, kategori_pelatihanUncheckedCreateWithoutDataInput>
    connectOrCreate?: kategori_pelatihanCreateOrConnectWithoutDataInput
    upsert?: kategori_pelatihanUpsertWithoutDataInput
    connect?: kategori_pelatihanWhereUniqueInput
    update?: XOR<XOR<kategori_pelatihanUpdateToOneWithWhereWithoutDataInput, kategori_pelatihanUpdateWithoutDataInput>, kategori_pelatihanUncheckedUpdateWithoutDataInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type data_pelatihanCreateWithoutKategoriInput = {
    nama_pelatihan?: string | null
    tujuan: string
    persyaratan: string
    materi_pembelajaran: string
    instruktur: string
    sertifikasi: string
    metode_pembelajaran: string
    biaya: string
    fasilitas: string
    contact: string
    nama_kategori: string
  }

  export type data_pelatihanUncheckedCreateWithoutKategoriInput = {
    id_pelatihan?: number
    nama_pelatihan?: string | null
    tujuan: string
    persyaratan: string
    materi_pembelajaran: string
    instruktur: string
    sertifikasi: string
    metode_pembelajaran: string
    biaya: string
    fasilitas: string
    contact: string
    nama_kategori: string
  }

  export type data_pelatihanCreateOrConnectWithoutKategoriInput = {
    where: data_pelatihanWhereUniqueInput
    create: XOR<data_pelatihanCreateWithoutKategoriInput, data_pelatihanUncheckedCreateWithoutKategoriInput>
  }

  export type data_pelatihanCreateManyKategoriInputEnvelope = {
    data: data_pelatihanCreateManyKategoriInput | data_pelatihanCreateManyKategoriInput[]
    skipDuplicates?: boolean
  }

  export type data_pelatihanUpsertWithWhereUniqueWithoutKategoriInput = {
    where: data_pelatihanWhereUniqueInput
    update: XOR<data_pelatihanUpdateWithoutKategoriInput, data_pelatihanUncheckedUpdateWithoutKategoriInput>
    create: XOR<data_pelatihanCreateWithoutKategoriInput, data_pelatihanUncheckedCreateWithoutKategoriInput>
  }

  export type data_pelatihanUpdateWithWhereUniqueWithoutKategoriInput = {
    where: data_pelatihanWhereUniqueInput
    data: XOR<data_pelatihanUpdateWithoutKategoriInput, data_pelatihanUncheckedUpdateWithoutKategoriInput>
  }

  export type data_pelatihanUpdateManyWithWhereWithoutKategoriInput = {
    where: data_pelatihanScalarWhereInput
    data: XOR<data_pelatihanUpdateManyMutationInput, data_pelatihanUncheckedUpdateManyWithoutKategoriInput>
  }

  export type data_pelatihanScalarWhereInput = {
    AND?: data_pelatihanScalarWhereInput | data_pelatihanScalarWhereInput[]
    OR?: data_pelatihanScalarWhereInput[]
    NOT?: data_pelatihanScalarWhereInput | data_pelatihanScalarWhereInput[]
    id_pelatihan?: IntFilter<"data_pelatihan"> | number
    nama_pelatihan?: StringNullableFilter<"data_pelatihan"> | string | null
    tujuan?: StringFilter<"data_pelatihan"> | string
    persyaratan?: StringFilter<"data_pelatihan"> | string
    materi_pembelajaran?: StringFilter<"data_pelatihan"> | string
    instruktur?: StringFilter<"data_pelatihan"> | string
    sertifikasi?: StringFilter<"data_pelatihan"> | string
    metode_pembelajaran?: StringFilter<"data_pelatihan"> | string
    biaya?: StringFilter<"data_pelatihan"> | string
    fasilitas?: StringFilter<"data_pelatihan"> | string
    contact?: StringFilter<"data_pelatihan"> | string
    nama_kategori?: StringFilter<"data_pelatihan"> | string
    id_kategori?: IntFilter<"data_pelatihan"> | number
  }

  export type kategori_pelatihanCreateWithoutDataInput = {
    nama_kategori: string
  }

  export type kategori_pelatihanUncheckedCreateWithoutDataInput = {
    id_kategori?: number
    nama_kategori: string
  }

  export type kategori_pelatihanCreateOrConnectWithoutDataInput = {
    where: kategori_pelatihanWhereUniqueInput
    create: XOR<kategori_pelatihanCreateWithoutDataInput, kategori_pelatihanUncheckedCreateWithoutDataInput>
  }

  export type kategori_pelatihanUpsertWithoutDataInput = {
    update: XOR<kategori_pelatihanUpdateWithoutDataInput, kategori_pelatihanUncheckedUpdateWithoutDataInput>
    create: XOR<kategori_pelatihanCreateWithoutDataInput, kategori_pelatihanUncheckedCreateWithoutDataInput>
    where?: kategori_pelatihanWhereInput
  }

  export type kategori_pelatihanUpdateToOneWithWhereWithoutDataInput = {
    where?: kategori_pelatihanWhereInput
    data: XOR<kategori_pelatihanUpdateWithoutDataInput, kategori_pelatihanUncheckedUpdateWithoutDataInput>
  }

  export type kategori_pelatihanUpdateWithoutDataInput = {
    nama_kategori?: StringFieldUpdateOperationsInput | string
  }

  export type kategori_pelatihanUncheckedUpdateWithoutDataInput = {
    id_kategori?: IntFieldUpdateOperationsInput | number
    nama_kategori?: StringFieldUpdateOperationsInput | string
  }

  export type data_pelatihanCreateManyKategoriInput = {
    id_pelatihan?: number
    nama_pelatihan?: string | null
    tujuan: string
    persyaratan: string
    materi_pembelajaran: string
    instruktur: string
    sertifikasi: string
    metode_pembelajaran: string
    biaya: string
    fasilitas: string
    contact: string
    nama_kategori: string
  }

  export type data_pelatihanUpdateWithoutKategoriInput = {
    nama_pelatihan?: NullableStringFieldUpdateOperationsInput | string | null
    tujuan?: StringFieldUpdateOperationsInput | string
    persyaratan?: StringFieldUpdateOperationsInput | string
    materi_pembelajaran?: StringFieldUpdateOperationsInput | string
    instruktur?: StringFieldUpdateOperationsInput | string
    sertifikasi?: StringFieldUpdateOperationsInput | string
    metode_pembelajaran?: StringFieldUpdateOperationsInput | string
    biaya?: StringFieldUpdateOperationsInput | string
    fasilitas?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    nama_kategori?: StringFieldUpdateOperationsInput | string
  }

  export type data_pelatihanUncheckedUpdateWithoutKategoriInput = {
    id_pelatihan?: IntFieldUpdateOperationsInput | number
    nama_pelatihan?: NullableStringFieldUpdateOperationsInput | string | null
    tujuan?: StringFieldUpdateOperationsInput | string
    persyaratan?: StringFieldUpdateOperationsInput | string
    materi_pembelajaran?: StringFieldUpdateOperationsInput | string
    instruktur?: StringFieldUpdateOperationsInput | string
    sertifikasi?: StringFieldUpdateOperationsInput | string
    metode_pembelajaran?: StringFieldUpdateOperationsInput | string
    biaya?: StringFieldUpdateOperationsInput | string
    fasilitas?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    nama_kategori?: StringFieldUpdateOperationsInput | string
  }

  export type data_pelatihanUncheckedUpdateManyWithoutKategoriInput = {
    id_pelatihan?: IntFieldUpdateOperationsInput | number
    nama_pelatihan?: NullableStringFieldUpdateOperationsInput | string | null
    tujuan?: StringFieldUpdateOperationsInput | string
    persyaratan?: StringFieldUpdateOperationsInput | string
    materi_pembelajaran?: StringFieldUpdateOperationsInput | string
    instruktur?: StringFieldUpdateOperationsInput | string
    sertifikasi?: StringFieldUpdateOperationsInput | string
    metode_pembelajaran?: StringFieldUpdateOperationsInput | string
    biaya?: StringFieldUpdateOperationsInput | string
    fasilitas?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    nama_kategori?: StringFieldUpdateOperationsInput | string
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