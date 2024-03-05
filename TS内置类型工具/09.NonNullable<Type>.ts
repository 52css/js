type PortNumber = string | number | null;
type ServerPortNum = NonNullable<PortNumber>

// type MyNonNullable<T> = T extends null | undefined ? never : T;
type MyNonNullable<T> = T & {};