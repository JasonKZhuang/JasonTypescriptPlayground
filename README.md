# typescript-playground
[TypeScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours](https://www.youtube.com/watch?v=gieEQFIfgYc)  

## First step
 ```shell
npm i typescript -g # (npm install typescript for global)
 ```
 this is to initialize the typescript environment  
 ```shell
  tsc --init
```
## tsconfig.json file setting 
go to "rootDir", where change it to "rootDir": "./src",   which is the source directory  
go to "outDir": "./", where change it to "./build", which is the build directory
go to "noEmitOnError": true,  uncomment it, which means if there is any compile error, it will not emit the build.

## watching files
got to terminal, type 
```shell
tsc -w # this is for watching all typescript files in the folder
```

# Terminology
- Typescript is a statically typed language that means types are checked at compile time.
- JavaScript is a dynamically typed language that means types are checked at run time.

# For my convention, using Type to define a function
```typescript
type mathFunction = (a: number, b: number) => number;
```

# For my convention, using interface to define a class object
```typescript
interface Employee {
  id: number;
  name: string;
  dateOfBirth: Date;
  active: boolean;
  address: string;
  phones: string[];
  office: string | number;
}
```
# Type Assertions 
