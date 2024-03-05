type Greeting = "Hello, world";
type ShoutyGreeting = Uppercase<Greeting>; // "HELLO, WORLD"

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`;
type MainID = ASCIICacheKey<"my_app">; // "ID-MY_APP"

type MyUppercase<S extends string> = intrinsic;
