type Greeting = "Hello, world";
type QuietGreeting = Lowercase<Greeting>; //  "hello, world"

type ASCIICacheKey<Str extends string> = `id-${Lowercase<Str>}`;
type MainID = ASCIICacheKey<"MY_APP">; // "id-my_app"

type MyLowercase<S extends string> = intrinsic;
