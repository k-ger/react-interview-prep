import { Category, Link, Question } from "./models";

export default class DataService {
    
    static getLinks = ():Link[] => {
        let links = []; let id = 0;
        links.push(new Link(id++,
            "JavaScript Interview Questions and Answers",
            "https://www.geeksforgeeks.org/javascript-interview-questions-and-answers/",
            Category.JSWEBDOM
        ));
        links.push(new Link(id++,
            "Threading in C#",
            "http://www.albahari.com/threading/",
            Category.DOTNET
        ));
        links.push(new Link(id++,
            "Threading in C# - Part 2 - Basic Synchronization",
            "http://www.albahari.com/threading/part2.aspx",
            Category.DOTNET
        ));
        links.push(new Link(id++,
            "Git - Book",
            "https://git-scm.com/book/en/v2",
            Category.GENERAL
        ));
        links.push(new Link(id++,
            "The short course on how SQL Server really works",
            "https://searchsqlserver.techtarget.com/tip/The-short-course-on-how-SQL-Server-really-works",
            Category.SQL
        ));
        links.push(new Link(id++,
            "Tutorial – SessionStack Blog",
            "https://blog.sessionstack.com/tagged/tutorial",
            Category.GENERAL
        ));
        links.push(new Link(id++,
            "NoSQL Distilled.pdf",
            "https://bigdata-ir.com/wp-content/uploads/2017/04/NoSQL-Distilled.pdf",
            Category.SQL
        ));
        links.push(new Link(id++,
            "LeetCode Practice Problems",
            "https://leetcode.com/problemset/all/",
            Category.GENERAL
        ));
        links.push(new Link(id++,
            "TypeScript Deep Dive pdf",
            "https://react-etc.net/files/typescript-book/typescript.pdf",
            Category.ANGULAR
        ));
        links.push(new Link(id++,
            "InterviewBit - Angular Interview Questions",
            "https://www.interviewbit.com/angular-interview-questions/",
            Category.ANGULAR
        ));
        links.push(new Link(id++,
            "Database Concurrency pdf",
            "https://bobpusateri.blob.core.windows.net/shared/DemoData/IsolationLevelsDeck.pdf",
            Category.SQL
        ));
        links.push(new Link(id++,
            "TutorialsTeacher C#",
            "https://www.tutorialsteacher.com/csharp/csharp-tutorials",
            Category.DOTNET
        ));
        links.push(new Link(id++,
            "C# Version History",
            "https://www.tutorialsteacher.com/csharp/csharp-version-history",
            Category.DOTNET
        ));
        links.push(new Link(id++,
            "CS Level Up Series Introduction - DEV Community",
            "https://dev.to/jjb/cs-level-up-series-part-0-cco",
            Category.DOTNET
        ));
        links.push(new Link(id++,
            "Top Angular Interview Questions 2020",
            "https://www.edureka.co/blog/interview-questions/top-angularjs-interview-questions-2016/#Annotation-Decorator-Angular",
            Category.ANGULAR
        ));
        links.push(new Link(id++,
            "Distributed Locks - DZone Database",
            "https://dzone.com/articles/everything-i-know-about-distributed-locks",
            Category.SQL
        ));
        links.push(new Link(id++,
            "The 2020 Web Developer Roadmap",
            "https://levelup.gitconnected.com/the-2020-web-developer-roadmap-76503ddfb327",
            Category.GENERAL
        ));
        links.push(new Link(id++,
            "Angular - Introduction to components and templates",
            "https://angular.io/guide/architecture-components#pipes",
            Category.ANGULAR
        ));
        links.push(new Link(id++,
            "What's New in C# (MSDN)",
            "https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-6",
            Category.DOTNET
        ));
        links.push(new Link(id++,
            "(JavaScript): Understanding the Weird Parts - The First 3.5 Hours - YouTube",
            "https://www.youtube.com/watch?v=Bv_5Zv5c-Ts",
            Category.JSWEBDOM
        ));
        links.push(new Link(id++,
            "AngularConnect - YouTube",
            "https://www.youtube.com/channel/UCzrskTiT_ObAk3xBkVxMz5g/videos",
            Category.ANGULAR
        ));
        links.push(new Link(id++,
            "Concurrency model and the event loop - JavaScript | MDN",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop",
            Category.JSWEBDOM
        ));
        links.push(new Link(id++,
            "The JavaScript runtime env",
            "http://dolszewski.com/javascript/javascript-runtime-environment/",
            Category.JSWEBDOM
        ));
        links.push(new Link(id++,
            "Threads vs. Processes: A Look At How They Work Within Your Program",
            "https://www.backblaze.com/blog/whats-the-diff-programs-processes-and-threads/",
            Category.GENERAL
        ));
        links.push(new Link(id++,
            "Operating Systems: Three Easy Pieces",
            "http://pages.cs.wisc.edu/~remzi/OSTEP/",
            Category.GENERAL
        ));
        links.push(new Link(id++,
            "Angular Cheat Sheet",
            "https://angular.io/guide/cheatsheet",
            Category.ANGULAR
        ));
        links.push(new Link(id++,
            "SOLID Principles made easy – Hacker Noon",
            "https://hackernoon.com/solid-principles-made-easy-67b1246bcdf",
            Category.GENERAL
        ));
        links.push(new Link(id++,
            "Introduction to Test Driven Development (TDD)",
            "http://agiledata.org/essays/tdd.html",
            Category.GENERAL
        ));
        links.push(new Link(id++,
            "What are immutable objects? CareerCup",
            "http://www.careercup.com/question?id=15311740",
            Category.GENERAL
        ));
        links.push(new Link(id++,
            "MVVM-vs-MVP-vs-MVC.pdf",
            "https://students.cs.byu.edu/~cs340ta/spring2019/notes/08-MVC/MVVM-MVP-MVC/MVVM-vs-MVP-vs-MVC.pdf",
            Category.GENERAL
        ));
        links.push(new Link(id++,
            "Sorting Algorithms",
            "https://www.toptal.com/developers/sorting-algorithms",
            Category.GENERAL
        ));
        links.push(new Link(id++,
            "ASP.NET MVC Interview Questions with Answers",
            "https://www.codeproject.com/Articles/556995/ASP-NET-MVC-Interview-Questions-with-Answers",
            Category.DOTNET
        ));
        links.push(new Link(id++,
            "Angular Interview Questions (50)",
            `angular-questions.html`,
            Category.ANGULAR
        ));
        links.push(new Link(id++,
            "The System Design Primer",
            "https://github.com/donnemartin/system-design-primer/blob/master/README.md",
            Category.GENERAL
        ));
        links.push(new Link(id++,
            "InfoQ Youtube channel",
            "https://www.youtube.com/nctv/videos",
            Category.GENERAL
        ));
        // links.push(new Link(id++,
        //     "",
        //     "",
        //     1
        // ));
        return links;
    }

    static getQuestions = (): Question[] => {
        let questions = []; let id = 0;
        questions.push(new Question(id++,
            `Events and delegates.  What are they, what's the difference?  (very common question!)`,
            `Event: a notification that an action has occurred.  Delegate: a type-safe function pointer.  Event handlers are delegates.
            Event adds layer of abstraction and protection on the delegate instance. 
            This prevents 'clients' of the delegate from resetting the delegate and its invocation list; it only allows adding or removing.  
            No code from outside the class where event is declared can raise it.</br>
            Delegates support events.  They give your program a way to execute methods at run time without knowing which methods they are at compile time.`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `What structure or Type is Delegate?  What is it derived from? What inherits it?`,
            `System.Object > System.Delegate > System.MulticastDelegate`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `Stack and Heap.  What are they, what are they for, what's the difference between them?`,
            `Places in memory where an object can be stored. </br>
            - Objects allocated on the stack are available only inside of a stack frame (execution of a method), while objects allocated on the heap can be accessed from anywhere.
            <br> -Reference types (classes, interfaces, delegates) are always allocated on the heap.
            <br> -When you pass a reference object as a parameter or assign it to a variable, you're in fact passing its reference. The reference (not the referenced object) can be allocated both on the stack or on the heap.
            <br> -Value types (derived from System.ValueType, e.g. int, bool, char, enum and any struct) can be allocated on the heap or on the stack, depending on where they were declared.
            <br> -While the objects stored on the stack are gone when the containing stack frame is popped, memory used by objects stored on the heap needs to be freed up by the garbage collector.
            `,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `Task vs Thread.  What's the difference between them?`,
            `A task is an abstraction that represents an async opertaion. A task encapsulates the basic unit of execution.
            A thread is a "subset of a process" or a "path of execution through a process".  
            </br>A Task can create 1 or more threads. (Thread pool threads).
            </br>A task can return a result. There is no direct mechanism to return a result from a thread.
            Task supports cancellation through the use of cancellation tokens. Thread doesn't.`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `Write a singleton without using a lock.`,
            `<code>sealed class Singleton</br>
            {</br>
            &emsp;    private static readonly Singleton instance = new Singleton();</br>
            &emsp;    </br>
            &emsp;    static Singleton()</br>
            &emsp;    {</br>
            &emsp;    }</br>
            &emsp;    </br>
            &emsp;    private Singleton()</br>
            &emsp;    {</br>
            &emsp;    }</br>
            &emsp;    </br>
            &emsp;    public static Singleton Instance</br>
            &emsp;    {</br>
            &emsp;        get{ return instance;}</br>
            &emsp;    }</br>
            }</br></code>`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `What is Interlocked?`,
            `Class that allows Thread-safe incrementing/decrementing of a numerical field.`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `What causes GC to collect gen 1?`,
            `After GC performs collection of G0 and there is still not enough momory to create a new object, G1 will be collected, then G2.`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `When a struct is inside a class, where is memory allocated for it (stack or heap?)`,
            `Heap`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `How do you compare objects in C#?`,
            `There are 2 types of equality: <strong>value equality</strong> (equivalence) and <strong>reference equality</strong> (identity).
            </br></br><strong>Reference equality</strong> means that two object references refer to the same underlying object.  This applies only to reference types.
            Use <code>Object.ReferenceEquals(ob1, ob2)</code> to compare ref types.
            </br></br><strong>Value equality</strong> means that two objects contain the same value or values.  For primitives, use <code>==</code>.
            Can use ob1.Equals(ob2).  For ref types, need to implement following steps:
            </br></br>1. Override the virtual <code>Equals()</code> method.
            </br>2. Implement the <code>IEquatable</code> interface by providing a type-specific Equals method. This is where the actual equivalence comparison is performed.
            </br>3. Optional but recommended: Overload the <code>==</code> and <code>!=</code> operators.
            </br>4. Override <code>Object.GetHashCode</code> so that two objects that have value equality produce the same hash code.
            </br>5. Optional: To support definitions for "greater than" or "less than," implement the <code>IComparable</code> interface for your type, 
            and also overload the <code><=</code> and <code>>=</code> operators.
            `,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `Array, List and Dictionary: what are the advantages/disadvantages of each?  When do you use them?`,
            `Array: simplest, least overhead.  Use when the size is fixed, and you know the size ahead of time. Traverse by index, or forward one by one.
            List: more overhead than array.  Can insert/remove easier. Can scale with addition of new elements. Traverse by index, or forward one by one.
            Dictionary: generic HashTable.  Stores Key Value pairs.  Fast and efficient.  Duplicate keys forbidden.  Traverse by foreach or by key.  Order items were added in is not preserved,
            but that is needed, use OrderedDictionary.  If sort is important, use SortedDictionary.`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `When to use List or LinkedList?`,
            `Both retain order of insertion.  List optimized for fast lookup, LinkedList optimized for fast changes.
            If you remove the first item in a list 1M items long, then the remaining 999K will need to move over one.`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `HashTable vs Dictionary?`,
            `HashTable:</br>
            -   Loosely typed (non-generic) collection, this means it stores key-value pairs of any data types.</br>
            -   Thread safe. </br>
            -   Returns null if we try to find a key which does not exist.</br>
            -   Data retrieval is slower than dictionary because of boxing-unboxing.</br>
            </br>Dictionary: (generic version of HashTable</br>
            -   Generic collection. So it can store key-value pairs of specific data types.</br>
            -   Only public static members are thread safe</br>
            -   Throws an exception if we try to find a key which does not exist.</br>
            -   Data retrieval is faster than Hashtable.</br>
            `,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `What are Covariance and Contravariance?`,
            `<strong>Covariance:</strong> enables you to pass a derived type where a base type is expected.</br></br>
            <strong>Contravariance:</strong> is applied to parameters. Cotravariance allows a method with the parameter of a base class to be assigned to a delegate that expects the parameter of a derived class.`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `What's the difference between IEnumerable and IQueryable?`,
            `IQueryable extends IEnumerable.  Both IEnumerable and IQueryable can only move forward over a collection, can’t move backward or between the items.  
            </br>- IEnumerable Doesn’t support lazy loading, IQueryable does.
            </br>- IEnumerable is suitable for LINQ to Object and LINQ to XML queries.
            </br>- IQueryable is suitable for LINQ to SQL queries.
            </br>- IEnumerable is best to query data from in-memory collections like List, Array etc.`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `What is Yield in C#?`,
            `	Yield return is .NET syntax sugar to return an IEnumerable. Allows the creation of items as it is demanded.
            Iteration. It creates a state machine "under the covers" that remembers where you were on each additional cycle of the function and picks up from there.
            It helps to provide custom iteration without creating temp collections.
            It helps to do stateful iteration. `,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `Dispose vs Finalize!`,
            `Dispose method is for disposing objects in .NET. - releasing resources, prevent memory leaks.
            GC can reclaim or release only memory which is used by managed resources. (DB connection = not managed resource)</br>
            Finalize method also called destructor to the class. 
            Finalize method can not be called explicitly in the code. Only Garbage collector can call the Finalize when object become inaccessible. 
            One should not implement the Finalize method until it is absolutely necessary.`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `How to handle multi-threaded exceptions?`,
            `With tasks: 
            </br>- If await used, can use Try Catch Finally, as usual.  If not, AggregateException? Use handle() and flatten().  
            </br> If you use Task with ContinueWith, exceptions thrown will not escape the task; you have to instead inspect properties of the Task when it completes, 
            including the InnerExceptions property of the AggregateException that the completed Task exposes to you.`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `What's the difference between const and readonly?`,
            `A const field can only be initialized at the declaration of the field. A readonly field can be initialized either at the declaration or in a constructor. 
            Therefore, readonly fields can have different values depending on the constructor used. 
            Also, although a const field is a compile-time constant, the readonly field can be used for run-time constants, as in this line: <code>public static readonly uint l1 = (uint)DateTime.Now.Ticks;</code>
            </br>Const cannot be static, but readonly can.`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `What's the difference between var, dynamic and object?`,
            `Var forces compiler to infer the type.  Must be initialized to a value; Once the type is set, you may not set this var to another type. Dynamic -
             The compiler does not check the type of the dynamic type variable at compile time, 
            instead of this, the compiler assigns the type at run time. So you can set dynamic to another type after it is set to a certain type.</br></br>
            - Var is statically typed, dynamic is dynamically typed.</br>
            - Var cannot be used for properties, dynamic can.
            - Dynamic is basically the same as object, but there is no intellisense on it, and you can't write extension methods for it.`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `Managed code vs unmamaged.  Advantages and disadvantages of each?`,
            `Managed code is code executed under control of the CLR.  Benefits: can mix languages, better security (auto memory management, GC, exception handling), support version control.</br>
            Unmanaged code: executed outside the CLR, or directly by the OS. Provides low-level access to programmer, direct access to HW. Can be faster, but you need to manage memory yourself.`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `Can you lock on a value type?`,
            `No - because it's a stack variable and doesn't have a sync root record.`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `Why are strings immutable?`,
            `It provides automatic thread safety. no risk of a deadlock or any concurrency issues, since when you modify a string, you are really just creating a new object in memory.
            It makes strings behave like an intrinsic type in a simple, effective manner. It also allows for extra efficiencies at runtime 
            (such as allowing effective string interning to reduce resource usage), and has huge security advantages.`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `What's the difference between a Process and a Thread?`,
            `Threads run in shared memory space, Processes run in separate mem space.</br></br>
            Each Process is started with a single thread (main/primary thread) but can create additional threads from any of its threads.  
            Has its own virtual address space (managed heap).</br></br>
            A thread is a "subset of a process" or a "path of execution through a process".  
            All threads of a process share its virual address space and system resources, but each thread has own stack.`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `What is Volatile?`,
            `The volatile keyword indicates that a field might be modified by multiple threads that are executing at the same time. The compiler, the runtime system, 
            and even hardware may rearrange reads and writes to memory locations for performance reasons. Fields that are declared volatile are not subject to these optimizations. 
            Adding the volatile modifier ensures that all threads will observe volatile writes performed by any other thread in the order in which they were performed. 
            Can only be applied to fields of a class or struct. Local variables cannot be declared volatile. No doubles or longs!`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `.NET Core - what is it and how is it different from previous version?`,
            `.NET implementation that is:</br>
            - Cross platform: Can run on and be built on Mac, linux</br>
            - Free and fully open source</br>
            - General overall upgrade, language is faster</br>
            - Folder structure cleaner, dependency grouping</br>
            - Config file is JSON, not XML - easier to read/write.  Fallbacks.</br>
            - Before, the machine you deployed on needed to have .Net fw installed.  Now the .Net core fw is included in each build, (SDK) </br>
            &emsp;    this means that you can package and run core 2.2 next to core 3, for example.</br>
            - Winforms/WPF cannot be run cross-platform.</br>
            - Used for building cross-platform console apps and ASP.NET Core Web apps and cloud services.`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `.NET Framework vs .NET Standard?`,
            `.NET Framework:</br> a .NET implementation that</br> 
            - Runs only on Windows</br>
            - Not open source</br>
            - Used for building Windows desktop applications and ASP.NET Web apps running on IIS.</br>
            </br>
            .NET Standard:</br> a .NET implementation that is</br> 
            - Platform agnostic</br>
            - Open source</br>
            - Used for <strong>building libraries</strong> that can be referenced from all .NET implementations, such as .NET Framework, .NET Core and Xamarin.`,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `.NET 5 - what is it?`,
            `Announced May 2019 - A unification of .NET implementations.  (Framework, Core and Standard).  Came from the realization that maintaining similar parallel codebases for each was unnecessary.
            Paired with C# 9. 
            This unified version of .NET 5 will support all .NET application types: Xamarin, ASP.NET, IoT and desktop. Furthermore, it will leverage a single CoreFX/Base Class Library (BCL), 
            two separate runtimes and runtime code bases (because it’s really hard to single source two runtimes intended to be critically different), and a single tool chain (such as dotnet CLI). 
            The result will be uniformity across behaviors, APIs and developer experiences. 
            For example, rather than having three implementations of the System.* APIs, there will be a single set of libraries that run on each of the different platforms.
            `,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `What are tuples and what are they used for? Difference between tuple and ValueTuple?`,
            `Tuples are types that you define using a lightweight syntax. The advantages include a simpler syntax, rules for conversions based on number (referred to as cardinality) 
            and types of elements, and consistent rules for copies, equality tests, and assignments. As a tradeoff, tuples do not support some of the object-oriented idioms associated with inheritance.
            </br>Tuples make it much easier to work with designs that use data structures that store multiple elements but do not define behavior,
            as classes and structs do. It's easy and concise to use tuples for those types. You get all the benefits of static type checking, 
            without needing to author types using the more verbose class or struct syntax. Even so, they are most useful for utility methods that are private, or internal.
            </br>
            </br>System.ValueTuple is a value type (struct), while System.Tuple is a reference type (class). This is meaningful when talking about allocations and GC pressure.
            </br>ValueTuple isn't only a struct, it's a mutable one, and one has to be careful when using them as such. Think what happens when a class holds a System.ValueTuple as a field.
            </br>ValueTuple exposes its items via fields instead of properties.
             `,
            Category.DOTNET
        ));
        questions.push(new Question(id++,
            `What are some of the new features of C#?`,
            `C# 5:
            </br>- Async, await
    
            </br></br>C# 6:
            </br>- Static imports
            </br>- Exception filters
            </br>- Auto-property initializers
            </br>- Expression bodied members
            </br>- Null propagator
            </br>- String interpolation
            </br>- nameof operator
            </br>- Index initializers
            
            </br></br>C# 7:
            </br>Out variables
            </br>Tuples and deconstruction
            </br>Pattern matching (on generic types)
            </br>Local functions
            </br>Expanded expression bodied members
            </br>Ref locals and returns
            </br>async Main method
            </br>default literal expressions
            </br>Conditional ref expressions
            </br>The ref readonly modifier on method returns
            </br>The readonly struct declaration
            </br>The ref struct declaration
            </br>private protected access modifier
            </br>
            </br>You can access fixed fields without pinning.
            </br>You can reassign ref local variables.
            </br>You can use initializers on stackalloc arrays.
            </br>You can use fixed statements with any type that supports a pattern.
            </br>You can use additional generic constraints.
            </br>
            </br>You can test == and != with tuple types.
            </br>You can use expression variables in more locations.
            </br>You may attach attributes to the backing field of auto-implemented properties.
            </br>Method resolution when arguments differ by in has been improved.
            </br>Overload resolution now has fewer ambiguous cases.
    
            </br></br>C# 8:
            </br>Readonly members
            </br>Default interface methods
            </br>Pattern matching enhancements:
            </br>Switch expressions
            </br>Property patterns
            </br>Tuple patterns
            </br>Positional patterns
            </br>Using declarations
            </br>Static local functions
            </br>Disposable ref structs
            </br>Nullable reference types
            </br>Asynchronous streams
            </br>Indices and ranges
            </br>Null-coalescing assignment
            </br>Unmanaged constructed types
            </br>Stackalloc in nested expressions
            </br>Enhancement of interpolated verbatim strings`,
            Category.DOTNET
        ));
    
        //------Angular--------//
        questions.push(new Question(id++,
            `What's new in Angular?`,
            `<strong>Angular 9</strong>
            </br>1. Ivy: new renderer.  Opt-in in Angular 8, default in 9. Includes performance improvements, template type-checking improvements.
            </br>2. Support for TS 3.4.
            </br>3. Forms: FormArray.clear, markAllAsTouched.
            </br>4. Many more...</br></br>
            <strong>Angular 10</strong>
            </br>1. Strict project setup - enables strict mode in TS
            </br>2. Typescript 3.9
            </br>3. Many more performance enhancements and bug fixes...</br></br>
            <strong>Angular 11</strong>
            </br>1. TSLint support ends, ESLint now used
            </br>2. Typescript 4.0
            </br>3. Webpack 5
            
            `,
            Category.ANGULAR
        ));
        questions.push(new Question(id++,
            `Why use Angular instead of JQuery or even just JS?`,
            `Ease of development.  Tools like CLI offer significant productivity increase, the larger and more complex the app is.
            Create boilerplate code with one command.  Lots of configuration options, plugins and libraries available.
            Don't need to reinvent any wheels.
            `,
            Category.ANGULAR
        ));
        questions.push(new Question(id++,
            `What are directives? Different kinds?`,
            `Directives are implemented as HTML attributes.  A way to add new capability to an element's display. 
            Defined using @Directive decorator.  
            </br>- <strong>Structural</strong>: alter layout by adding, removing, or replacing elements in DOM. *ngIf, *ngFor...
            </br>- <strong>Attribute</strong>: alter the appearance of behavior of an existing element. *ngModel, *ngClass, *ngStyle...`,
            Category.ANGULAR
        ));
        questions.push(new Question(id++,
            `What are pipes?`,
            `Functions that transform an input into an output.  Let you declare display-value transformations in yout template HTML.
            Defined using @Pipe decorator.  Can chain pipes, and can pass args to them.
            </br>Built in pipes: date, currency, number...etc.`,
            Category.ANGULAR
        ));
        questions.push(new Question(id++,
            `What is ng-template and how is it used?`,
            `Angular element for rendering HTML. It is never displayed directly. In fact, before rendering the view, Angular replaces the ng-template and its contents with a comment.
            If there is no structural directive and you merely wrap some elements in a ng-template, those elements disappear. `,
            Category.ANGULAR
        ));
        questions.push(new Question(id++,
            `What are template expressions?`,
            `The .ts data you access in the HTML.  Whatever goes in the double moustache brackets, and any other way you use ts in the template.`,
            Category.ANGULAR
        ));
        questions.push(new Question(id++,
            `How do you handle errors in Angular?`,
            `Handle global errors with <code>ErrorHandler</code>.  Create an Injectable (service) class that implements <code>ErrorHandler</code>
            and handles the 2 kinds of errors: Client (JS) and Server (HTTPResponse).  To add it, add the following to RootModule: <code>providers: [{provide: ErrorHandler, useClass: GlobalErrorHandler}]</code>.
            You can check which kind of error it is by doing the following: <code>if(error instanceof HttpErrorResponse)</code>.
            You can use HTTPInterceptor to intercept responses and retry, transform, or handle them before passing them along to the global ErrorHandler service.`,
            Category.ANGULAR
        ));
        questions.push(new Question(id++,
            `What is an Angular Module?  How is it different from ES Module?`,
            `<strong>ES Modules</strong> organize code files, modularize code, promote code reuse.
            </br><strong>Angular Modules</strong> (ngModules) organize application, modularize application, promote application boundaries.`,
            Category.ANGULAR
        ));
        questions.push(new Question(id++,
            `What are the 2 different types of forms in Angular? Diffenrences?`,
            `Template-Driven and Reactive Forms:
            </br>- Template-driven forms make use of the "FormsModule", while reactive forms are based on "ReactiveFormsModule".
            </br>- Template-driven forms are asynchronous in nature, whereas Reactive forms are mostly synchronous.
            </br>- Template-driven forms use 2 way data binding, whereas Reactive forms do not.
            </br>- In a template-driven approach, most of the logic is driven from the template, whereas in reactive-driven approach, the logic resides mainly in the component or typescript code. 
            </br>- The Reactive approach removes the core validation logic from the template and hence makes the template code quite clean. 
            From a unit testing perspective, it is easier to write unit tests with Reactive forms, since the logic is contained inside our component. 
            `,
            Category.ANGULAR
        ));
        questions.push(new Question(id++,
            `How can you make a service not a singleton?`,
            `When you add a service to the providers array of an @NgModule, that service will be a singleton.  When you add it to the providers array of a @Component, it will not be a singleton.
            Non-singleton services can use the ngOnDestroy() hook.`,
            Category.ANGULAR
        ));
        // questions.push(new Question(id++,
        //     `?`,
        //     ``,
        //     Category.ANGULAR
        // ));
        
        //------JS/Web/DOM--------//
        questions.push(new Question(id++,
            `What are the different kinds of web services?`,
            `SOAP vs RESTful</br>
            RESTful Services are appropiate in these scenarios:</br>
                If you have limited bandwidth (Better performance and scalability)</br>
                If your operations are stateless: No information is preserved from one invocation to the next one, and each request is treated independently.</br>
                If your clients require caching.</br></br>
            While SOAP is the way to go when:</br>
                If you require asynchronous processing</br>
                If you need formal contract/Interfaces</br>
                If security is key, or for atomic transactions and reliable messages</br>
                If your service operations are stateful: For example, you store information/data on a request and use that stored data on the next one.
            </br>
            </br>- SOAP uses XML, while REST can use JSON, XML, RSS.  
            </br>- REST is stateless, SOAP can be stateless of stateful.  
            </br>- SOAP uses only HTTP POST.  REST uses many verbs (GET POST PUT DELETE...)
            </br></br>
            <a href="https://restfulapi.net/soap-vs-rest-apis/" target="_blank">More here..</a>
            `,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `How do you authenticate users? (What are the different types of authentication?)`,
            `Authentication = determining identity.  
            </br>Types:
            </br>- Basic authentication: challenge/response format. Server will request a secure resource from server, server will challenge client to authenticate,
            and client will request back with credentials to auth. 
            </br>- Digest authentication: Same as above, but server challenges by responding with a <strong>nonce</strong>. This is an arbitrary number that can only be used once.  
            Client sends a digest of the password - computed using hashing algo with a nonce that the server provides.
            </br>- Windows authentication: like basic/digest, but requires windows machine as web server.
            </br>- OpenID: decentralized authorization.  One login/pwd for many sites/applications. Client is redirected to external Identity provider.
            Provider receives clientId and client secret from server - they are used to id the site/application doing login request.
            Provider responds with a token at a Redirect URI. Token contains data (claims) to create identity cookie.
            </br>The developer of an app does not need to store (or manage) user logins/pwds.
            </br>- MFA: Multi-factor
            </br>- JWT: JSON Web Token`,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `What is Single Sign-on? (SSO)`,
            `Single sign-on (SSO) is a session and user authentication service that permits a user to use one set of login credentials -- 
            for example, a name and password -- to access multiple applications. SSO can be used by enterprises, smaller organizations and individuals to ease the management of various usernames and passwords.`,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `What is the lifecycle of a server side controller?  (ASP.NET MVC controller for example).`,
            `After the Web server receives a request, the request is routed via application middleware to the correct endpoint.  
            An instance of the appropriate controller is created, and the Action (method in controller) is executed.  
            Next, the result (ActionResult) is returned.  If the result is a View, it is run through the View Engine, and a View is returned as the Response.
            Each request is executed on a separate thread.`,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `What happens when 2 requests hit the API at the same time?  What happens when 2 threads try to lock on same object at the exact same time?`,
            `2 packets may arrive at the server at the same time but they will collide and not be read. Between the router and the Application, 
            it's not possible for 2 requests to be completely parallel (unless multiple servers?).  Each request will result in a new instance of the controller being created.
            2 threads cannot lock on the same object at the exact same time because each thread runs on a core/processor, and each has execution order.
            `,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `Scaling a web application.  How to do it?`,
            `Scale out web servers, use load balancer to distribute requests to them. Caching: can cache at browser level, application level, or db level. 
            DB can be scaled up or out as well.  If too much load on db, replicate. If too much data, shard.  Do both if needed.`,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `What is a single page application?`,
            `SPAs are all about serving an outstanding UX by trying to imitate a “natural” environment in the browser — no page reloads, no extra wait time. 
             It is just one web page that you visit which then loads all other content using JavaScript — which they heavily depend on.
             </br>SPA's are fast: most resources are only loaded once throughout the lifespan.
             </br>They are easy to develop, and debug. Then can cache local storage effectively.
             </br>Disadvantages: SEO optimization is tricky, inital download size is larger, so slow to load initially.  Requires JS to be enabled.  Less escure (XSS threat).  
             Browser history may not work if the URL doesn't change.`,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `What is CORS?`,
            `Cross Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any other origins (domain, scheme, or port) 
            than its own from which a browser should permit loading of resources. CORS relies on a mechanism by which browsers make a <strong>preflight</strong> request to the server hosting the cross-origin resource, 
            in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
            </br></br>
            For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. 
            This means that a web application using those APIs can only request resources from the <strong>same origin</strong> the application was loaded from unless the response from other origins includes the right CORS headers.
            </br></br>
            Server will respond with the following header indicating which clients can send it requests. <code>Access-Control-Allow-Origin:</code> 
            </br> The client's domain must be included in the list.  If not, the browser will error on the server's response.`,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `How does inheritance work in Javascript?`,
            `Prototypal Inheritance.</br>
            When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. 
            That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.
            </br>ES2015 introduced classes to JS.`,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `What is the difference between let, var and const in Javascript?`,
            `Let and const are block scoped and not hoisted. Var is function scoped, and will be hoisted.`,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `What is variable hoisting?  What gets hoisted and what doesn't?`,
            `Hoisting: initialized with <code>undefined</code> before the code is run.  This means they are accessible in their enclosing scope even before they are declared.
            Function declarations and <code>var</code> will get hoisted.`,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `What is a closure, how does it work?  What is variable scope?`,
            `A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
            In other words, a closure gives you access to an outer function’s scope from an inner function. 
            In JavaScript, closures are created every time a function is created, at function creation time.
            </br></br>The scope of a variable is controlled by the location of the variable declaration, and defines the part of the program where a particular variable is accessible.
            JavaScript has two scopes – global and local. Any variable declared outside of a function belongs to the global scope, and is therefore accessible from anywhere in your code. 
            Each function has its own scope, and any variable declared within that function is only accessible from that function and any nested functions. 
            Because local scope in JavaScript is created by functions, it’s also called function scope. When we put a function inside another function, then we create nested scope.
            `,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `What is a Promise?`,
            `Promises simplify deferred and asynchronous computations. A promise represents an operation that hasn't completed yet. 
            A design pattern for JS similar to callbacks.  A promise can only succeed or fail once.  Cannot switch from fail to success, or vice-versa.
            </br> If a promise has succeeded or failed and you later add a success/failure callback, the correct callback will be called, 
            event though the event took place earlier.`,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `What is the difference between observable and promises?`,
            `- Observable is a more powerful way of handling HTTP asynchronous requests. Whereas, A promise handles a single event when an asynchronous operation completes or fails.
            </br>- An observable is like a stream which allows passing zero or more events where the callback is called for each event. Whereas, A promise eventually calls the success or failed callback even when you don’t need the notification or the result it provides anymore.
            </br>- Observable works with multiple values for a particular time. Whereas, Promises works with and even returns a single value at a time.
            </br>- Observables can be canceled. Whereas, Promises cannot be canceled.
            </br>- Observable supports map, filter, reduce and similar operators. Whereas, Promises have more readable codes with try/catch and async/await.
            </br>- In observable, one operator ‘retry’ can be used to retry whenever needed. Whereas, Promises cannot be retried. A promise should have access to the original function that returned the promise in order to have a retry capability.
            `,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `Explain the event loop.`,
            `The Event Loop has one simple job — to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, 
            it will take the first event from the queue and will push it to the Call Stack, which effectively runs it. 
            Such an iteration is called a tick in the Event Loop. Each event is just a function callback.`,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `What are Web Components?`,
            `Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.`,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `What are Maps?  What are symbols?`,
            `The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
            The data type symbol is a primitive data type. Every symbol value returned from Symbol() is unique.  A symbol value may be used as an identifier for object properties; this is the data type's primary purpose.
            Use when you want to add “hidden” properties to objects that won’t be included when the object is serialized.`,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `What is a blob?`,
            `The Blob object represents a blob, which is a file-like object of immutable, raw data; 
            they can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data.`,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `What is the Browser Object Model (BOM)?`,
            `The Window Object. The window object is supported by all browsers. It represents the browser's window.
            All global JavaScript objects, functions, and variables automatically become members of the window object.
            Global variables are properties of the window object. Global functions are methods of the window object.
            Even the document object (of the HTML DOM) is a property of the window object: `,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `CSS vs SCSS vs SASS vs LESS`,
            `<strong>CSS</strong>CSS: Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.
            Cascading refers to the algorithm that defines how to combine property values originating from different sources. Children elements typically inherit parent's properties.
            If property assigned multiple times (with same specificity) the last one will be used.
            </br></br>
            <strong>SCSS</strong>: Sassy CSS - an extension of the syntax of CSS (superset of CSS). Every valid CSS stylesheet is a valid SCSS file with the same meaning. Files using this syntax have the <code>.scss</code> extension.
            Uses brackets, indentation not required.
            </br></br>
            <strong>SASS</strong>: Syntactically Awesome Style Sheets. (Older, more popular). A stylesheet language that’s compiled to CSS that lets you use features like variables, nesting, mixins, loops, inheritance and others which may not exist in CSS yet.
            CSS <i>preprocessor</i> (actual language is SassScript) that is interpreted or complied into CSS. Files using this syntax have the <code>.sass</code> extension. Indentation required, doesn't use brackets.
            </br></br>
            <strong>LESS</strong>: (Leaner Style Sheets) (Newer, less popular). is a backwards-compatible language extension for CSS. Built with JS. Similar to SASS.  
            Some differences include: LESS gives users the opportunity to only activate mixins when specific situations occur.`,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `How does Bootstrap Work?`,
            `Bootstrap is a massive collection of reusable and versatile pieces of code which are written in CSS, HTML and JavaScript.
            Bootstrap has three primary files:
            </br>
            </br><strong>bootstrap.js</strong> which is a jQuery/JavaScript framework.
            </br><strong>bootstrap.css</strong> which is a CSS framework
            </br><strong>glyphicons</strong> which is a set of icon fonts
            </br></br>
            jQuery, which is quite widely used and very popular JavaScript library, is required for Bootstrap to function. It adds cross browser compatibility and simplifies JavaScript.
            `,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `How does Node Work?`,
            `The Node.js run-time environment includes everything you need to execute a program written in JavaScript. Came from desire to execute JS not in a broswer.
            It is a JS runtime built on Chrome’s V8 JS engine.
            Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
            `,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `How does NPM Work? What is the difference between a package and a module?`,
            `NPM (Node package manager) has packages you can use in your apps to make your development faster and efficient.
            npm can install packages in local or global mode. Use <code>-g</code> for global install. In local mode, it installs the package in a node_modules folder in your parent working directory. 
            This location is owned by the current user. 
            </br></br>A <strong>package</strong> is a file or directory that is described by a <code>package.json</code>. 
            </br>A <strong>module</strong> is any file or directory that can be loaded by Node.js' <code>require()</code>.
            </br></br>Generally, npm packages that are used in Node.js program are loaded with <code>require()</code>, making them modules. 
            However, there's no requirement that an npm package be a module! 
            Almost all npm packages contain many modules within them (because every file they load with <code>require()</code> is a module).
            In the context of a Node program, the module is also the thing that was loaded from a file.
            </br></br>NPX - npx is a tool for executing packages without installing them. It comes bundled with npm.`,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `What is Tree shaking?`,
            `Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.
            It relies on the import and export statements in ES2015 to detect if code modules are exported and imported for use between JavaScript files. `,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `What is currying and what is it for?`,
            `Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c)
            </br>You write a "curry function", and use it to curry other functions.  Allows for creation of partial functions that can be called using the remaining params:
            </br></br><code>function curry(f) { // curry(f) does the currying transform
            </br>&emsp;    return function(a) {
            </br>&emsp;&emsp;      return function(b) {
            </br>&emsp;&emsp;&emsp;       return f(a, b);
            </br>&emsp;&emsp;      };
            </br>&emsp;   };
            </br>}
            </br>
            </code>`,
            Category.JSWEBDOM
        ));
        questions.push(new Question(id++,
            `What do .apply() .call() .assign() .create() do?`,
            `.apply() is often used to chain constructors for an object. Can also use it to append array to another.  apply(arr1, arr2)
            </br>While the syntax of this function is almost identical to that of call(), the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.
            </br><code>
            </br>Function.prototype.construct = function(aArgs) {
            </br>&emsp; let oNew = Object.create(this.prototype);
            </br>&emsp; this.apply(oNew, aArgs);
            </br>&emsp; return oNew;
            </br>};
            </code>
            </br></br>Object.assign() copies all enumerable own properties from one or more source objects to a target object. It returns the target object. 
            It can be used to clone an object (shallow).
            </br></br>
            </br>Object.create() creates a new object, using an existing object as the prototype of the newly created object.
            `,
            Category.JSWEBDOM
        ));
    
        //------SQL--------//
        questions.push(new Question(id++,
            `What is NOSQL? Difference between relational and non-relational db? Which is faster?`,
            `NoSQL = Not Only SQL</br>
            - NoSQL db don't use SQL, they use query language.  </br>
            - Data is stored in collections (in place of tables), and documents (in place of rows).</br>
            - Operate without schema (dynamic schema)- helpful when data is non-uniform.</br>
            - Created from the need to run on clusters - to support scaling (out).  RDBMS are not designed to run efficiently on clusters.</br>
            - Denormalized data, vs normalized in RDBMS.</br>
            - No Joins, as opposed to RDBMS.</br>
            - Recommended use is when your data is changing frequently and growing quickly.</br>
            </br>
            Comparing performance depends highly on what operation(s) you are performing, as the answer can vary widely.
            `,
            Category.SQL
        ));
        questions.push(new Question(id++, 
            `Indices. What types are there? What's the difference between them?  Where are they stored?  (Common question) Seek vs scan.`,
            `Clustered, non-clustered.</br>
            Clustered index: can only have 1 max per table.  It is the physical order in which rows are stored on pages. Doesn't require additional disk space. Faster.</br>
            Non-Clustered index: can have many. Stored separately from data.  Index has pointers to storage location of data. Slower because of lookup.</br>
            Indices are stored on disk.</br></br>
            Seek vs Scan: </br>
            - Table scan means go thru table row by row (slowest). 
            - Index scan means go thru index row by row (slower) - (faster than table scan bc index is sorted and query optimizer knows where to stop).
            - Index Seek means move through tree (fast).
            `,
            Category.SQL
        ));
        questions.push(new Question(id++,
            `Troubleshooting.  Your queries are slow.  How do you go about diagnosing/fixing? (Common question)`,
            `Lots of answers. Profiler, look at execution plan, reports, low ram/disk space...</br>
            Look at reports -> All Blocking Transactions, Top Transactions by ___.  You can find the process id and kill it unsing <code>KILL {processId}</code>`,
            Category.SQL
        ));
        questions.push(new Question(id++,
            `Primary Key vs Foreign Key.  How to implement one to many relationship? (Foreign Key)  How to implement many to many?`,
            `(3rd table - lookup table: 2 FK's)`,
            Category.SQL
        ));
        questions.push(new Question(id++,
            `Difference between a temp table and a table variable?`,
            `- Temp tables can be modified (ALTER CREATE DELETE), table variables cannot.  Table variables cannot be dropped explicitly, only automatically.
            </br>- Temp tables not allowed to be defined in UDFs, table variables allowed.
            </br>- Temp tables support indeces, table variables only support a PK or unique Key, no other indeces.
            </br>- Scope of temp table is in the proc it was created in, and children procs of that proc.  Table variable scope is
            the batch or proc it was declared in.
            `,
            Category.SQL
        ));
        questions.push(new Question(id++,
            `You have 2 Tables: Mothers and Children.  Write a query to return the names of all the mothers that have 2 or more boys.`,
            `Join M and C on MotherId, group by MotherId, where gender = boy having count > 1.  If need M.name, can join back to M to get name.`,
            Category.SQL
        ));
        questions.push(new Question(id++,
            `You have a table with daily stock prices.  Columns are: ID, Date, Ticker, Price.  Write a query to return the price of each available stock on the last day
            of each month.  Keep in mind prices are available only on trading days.`,
            `You will need to group by ticker, year, and month, and get the max date.  Then join back to table to get the price.
            Can be done using MAX, or RANK.  Knowing Windowing functions (RANK, LAG, LEAD) is important, and gets asked frequently (for SQL Server position).`,
            Category.SQL
        ));
        questions.push(new Question(id++,
            `RANK vs DENSE RANK vs ROW_NUMBER - what's the difference?`,
            `RANK: 12225, DENSE_RANK: 12223, ROW_NUMBER: 12345`,
            Category.SQL
        ));
        questions.push(new Question(id++,
            `What are cursors? What are the disadvantages of cursors? How can you avoid cursors?`,
            `Cursors allow row-by-row processing of the result sets. Rows are fetched from memory one at a time, vs set-based operations where
            all the rows are fetched into memory and then digested.
            </br>Alternatives would be While loop (no objects created in memory, but still slow), or UDF.  Can try to use joins, depending on the logic may or may not be suitable.
            Joins will not perform well if the result of the join is too big for memory.  Possibly windowing functions.`,
            Category.SQL
        ));
        questions.push(new Question(id++,
            `What are CTEs?`,
            `Common Table Expression: CTE is a disposable view hence no statistics are stored and you can't create Indexes either. 
            It is just like a sub query. Can be called recursively. 
            `,
            Category.SQL
        ));
        questions.push(new Question(id++,
            `What are Statistics, and how are they useful?`,
            `SQL Server statistics are essential for the query optimizer to prepare an optimized and cost-effective execution plan. 
            These statistics provide distribution of column values to the query optimizer, and it helps SQL Server to estimate the number of rows (also known as cardinality). 
            The query optimizer should be updated regularly. Improper statistics might mislead query optimizer to choose costly operators such as index scan over index 
            seek and it might cause high CPU, memory and IO issues in SQL Server. We might also face blocking, deadlocks that eventually causes trouble to the underlying queries, resources. 
            </br>Update manually with <code>sp_update</code>
            `,
            Category.SQL
        ));
        questions.push(new Question(id++,
            `What is Read Committed? Serializable?`,
            `Sql server Transaction Isolation Level.  Read Committed (default setting) means that no dirty reads guaranteed, but no other guarantees.
            Rows locked only while reading, and released after each is read.</br></br>
            Serializable is the most strict and safest, but worst performing Isolation Level.  Guarantees no dirty, nonrepeatable, or phantom reads.
            Locks cover entire range of rows and first row outside it.  If a query is repeated within the same transaction, results will be the same.`,
            Category.SQL
        ));
        questions.push(new Question(id++,
            `What are some examples when an existing index won't be used?`,
            `- When composite index and WHERE clause doesn't contain the first col of the index.</br>
            - When index on VARCHAR and col is compared to a string starting with '% or '_'. 
            </br>Ex: <code>WHERE val LIKE '%asdf%'</code>`,
            Category.SQL
        ));
        questions.push(new Question(id++,
            `What is an ORM?  What are the advantages?`,
            `ORM = Object Relational Mapping: a design paradigm that lets you query the db in object-oriented way.  
            Typically a library that abstracts the db.
            </br>Advantages: 
            </br>- You write your data model in only one place, and it's easier to update, maintain, and reuse the code.
            </br>- Lets you use your middle tier language the way you're used to.
            </br>- A lot of stuff is done automatically, from database handling to I18N.
            </br>Disdvantages: 
            </br>- Large size of library.
            </br>- Learning curve, initial setup is very involved.
            `,
            Category.SQL
        ));
        questions.push(new Question(id++,
            `What are 4 types of NOSQL databases?`,
            `- Wide-Column: Cassandra (FB), HBase
            </br>- Document: MongoDB, CouchDB
            </br>- Key Value Store: Redis, Dynamo (AMZN)
            </br>- Graph: Neo4j`,
            Category.SQL
        ));
        // questions.push(new Question(id++,
        //     ``,
        //     `?`,
        //     4
        // ));
    
        //------Other--------//
        questions.push(new Question(id++,
            `How do you handle errors in your code/application?`,
            `C#:
            </br>
            </br>- Use try/catch/finally blocks to recover from errors or release resources
            </br>- Handle common conditions without throwing exceptions
            </br>- Design classes so that exceptions can be avoided
            </br>- Throw exceptions instead of returning an error code
            </br>- Use the predefined .NET exception types
            </br>- End exception class names with the word Exception
            </br>- Include three constructors in custom exception classes (no params/default, string message, string message and inner Exception)
            </br>- Ensure that exception data is available when code executes remotely
            </br>- Include a localized string message in every exception
            </br>- In custom exceptions, provide additional properties as needed
            </br>- Place throw statements so that the stack trace will be helpful
            </br>- Use exception builder methods
            </br>- Restore state when methods don't complete due to exceptions`,
            Category.GENERAL
        ));
        questions.push(new Question(id++,
            `Source control: what are some branching strategies?`,
            `- <strong>Trunk-based Development (No Branching):</strong> Trunk-based development means all developers work on the same branch, and when changes are tested and ready, 
            a release branch is made, and release done from that branch. Release branch soon deleted after superseded by next one.</br></br>
            - <strong>Release Branching:</strong> Release branching refers to the idea that a release is contained within a branch. When a team starts working on a new release, 
            a branch is created (e.g., “1.1 development branch” or “Release 2.1”), and all work done until the next release is stored in this branch.</br></br>
            - <strong>Feature Branching:</strong> Feature branches, which are often coupled with feature flags or toggles that enable and disable a feature within the product, 
            are used to collect a series of user stories that can be merged into a master and deployed as one complete feature.</br></br>
            - <strong>Story or Task Branching:</strong> Story or task branching directly connects a user story to changes in source code. It’s the lowest level of branching, 
            and each issue implemented has its own branch, which is typically associated with some user story ID.</br>`,
            Category.GENERAL
        ));
        questions.push(new Question(id++,
            `S.O.L.I.D. Principles - explain them.`,
            `1. Single-responsibility Principle: A class should have one and only one reason to change, meaning that a class should have only one job.
            </br>2. Open-closed Principle: Objects or entities should be open for extension, but closed for modification.
            </br>3. Liskov substitution principle: Every subclass/derived class should be substitutable for their base/parent class.
            </br>4. Interface segregation principle: A client should never be forced to implement an interface that it doesn't use or clients shouldn't be forced to depend on methods they do not use.
            </br>5. Dependency Inversion principle: Entities must depend on abstractions not on concretions. 
            It states that the high level module must not depend on the low level module, but they should depend on abstractions.
            `,
            Category.GENERAL
        ));
        questions.push(new Question(id++,
            `What's the difference between MVC and MVVM? (this is frequently asked)?`,
            `Software Architecture patterns. </br>
            </br>Model View Controller
            </br>Model: shape of data and business logic.
            </br>View: user interface. Displays view of model to user and enables them to modify the data.
            </br>Controller: handles user's requests: renders the appropriate view as a response.
            </br>
            </br>Model View ViewModel 
            </br>VM sits between Model and View. It uses data-binding with the View. (2-way communication). 
            Changes in View are auto-reflected in VM, and VM can respond to them by getting data (Model). View's datacontext is ViewModel.
            </br>Model should be dumb - just representation of data.
            </br>
            </br>MVP - Model View Presenter: like MVVM, but user updates to the View are handled programmatically, not by data binding.
            `,
            Category.GENERAL
        ));
        questions.push(new Question(id++,
            `TDD - what are the principles?`,
            `Test Driven Development: test-first development where you write a test before you write just enough production code to fulfill that test.  
            TDD defines requirements (specs) before you write the code. TDD is an Agile design technique.</br></br>
            Steps:</br>
            The first step is to quickly add a test, basically just enough code to fail. </br>
            Next you run your tests, often the complete test suite although for sake of speed you may decide to run only a subset, 
            to ensure that the new test does in fact fail. </br>
            You then update your functional code to make it pass the new tests. </br>
            The fourth step is to run your tests again. </br>
            If they fail you need to update your functional code and retest. Once the tests pass the next step is to start over 
            (you may first need to refactor any duplication out of your design as needed, turning TFD into TDD).
            `,
            Category.GENERAL
        ));
        questions.push(new Question(id++,
            `What are the main benefits of TDD?`,
            `- Faster feedback.  Find bugs faster.  Also: less time spent finding/fixing bugs, TDD tells you if your last change broke something or not.`,
            Category.GENERAL
        ));    
        questions.push(new Question(id++,
            `What is BDD?`,
            `Behavior-driven development - an Agile software development process that emerged from TDD. 
            BDD specifies that tests of any unit of software should be specified in terms of the desired behavior of the unit.
            BDD specifies that business analysts and developers should collaborate in this area and should specify behavior in terms of user stories, 
            which are each explicitly written down in a dedicated document. Each User Story should, in some way, follow the following structure:
            </br>
            </br><strong>Title</strong>
            </br>&emsp;    An explicit title.
            </br></br>
            <strong>Narrative</strong>
            </br>&emsp;    A short introductory section with the following structure:
            </br>
            </br>&emsp;-    As a: the person or role who will benefit from the feature;
            </br>&emsp;-    I want: the feature;
            </br>&emsp;-    so that: the benefit or value of the feature.
            </br></br>
            <strong>Acceptance criteria</strong>
            </br>&emsp;    A description of each specific scenario of the narrative with the following structure:
            </br>
            </br>&emsp;-    Given: the initial context at the beginning of the scenario, in one or more clauses;
            </br>&emsp;-    When: the event that triggers the scenario;
            </br>&emsp;-    Then: the expected outcome, in one or more clauses.
            `,
            Category.GENERAL
        ));    
        questions.push(new Question(id++,
            `What is dependency injection?  What are the benefits?`,
            `A pattern where one object supplies the dependencies of another.  Typically the dependency is passed to the constructor of the object that depends on it.
            The dependency is typically used as a service.
            </br>Benefits: makes testing easier.  Decouples construction of dependency from construction of dependent.`,
            Category.GENERAL
        ));    
        questions.push(new Question(id++,
            `What are Microservices?`,
            `The microservice architectural style is an approach to developing a single application as a suite of <strong>multiple small services</strong>, 
            each running <strong>in its own process</strong> and communicating with lightweight mechanisms, often an HTTP resource API. 
            These services are <strong>built around business capabilities</strong> and <strong>independently deployable</strong> by fully <strong>automated deployment</strong> machinery. 
            There is a bare minimum of centralized management of these services, which may be written in different programming languages and use different data storage technologies. `,
            Category.GENERAL
        ));    
        questions.push(new Question(id++,
            `SOA - what is it?`,
            `Service-oriented architecture (SOA) is a style of software design where services are provided to the other components by application components, through a communication protocol over a network.
            </br>Benefits: Create reusable code, promote interaction, support scalability, reduce costs.
            `,
            Category.GENERAL
        ));    
        questions.push(new Question(id++,
            `What is Functional Programming?`,
            `Functional programming (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects. 
            Functional programming is declarative rather than imperative, and application state flows through pure functions. 
            Contrast with object oriented programming, where application state is usually shared and colocated with methods in objects.
            Pure functions, Function composition, Avoid shared state, Avoid mutating state, Avoid side effects.`,
            Category.GENERAL
        ));
        questions.push(new Question(id++,
            `What is CI? CD?`,
            `Continuous Integration: a practice that focuses on making/preparing a release easier.  Merge changes back to master branch as often as possible.
            Create automated build and unit tests triggererd by merging into master branch.  Automatic testing lets you know if new bugs introduced. 
            Benefits: less bugs make it into prod, frees up QA for other tasks.
            </br></br>Continuous Delivery: an extension of CI to make sure you can release new changes to your customers quickly in a sustainable way.
            Automate release process to deploy with a single click. 
            Benefits: release more often, accelerating the feedback loop w/users.
            </br></br>Continuous Deployment: one step further: every change that passesall stages of prod pipeline released - no human interaction.
            Benefits: develop faster since there is no need to pause for release. Releases are less risky since smaller incremental changes.`,
            Category.GENERAL
        ));
        questions.push(new Question(id++,
            `What are containers? VMs? What's the difference?`,
            `VM provides an abstract machine that uses device drivers targeting the abstract machine, while a container provides an abstract OS.
            Applications running in a container environment share an underlying operating system, while VM systems can run different operating systems. 
            Typically a VM will host multiple applications whose mix may change over time versus a container that will normally have a single application. 
            However, it’s possible to have a fixed set of applications in a single container.`,
            Category.GENERAL
        ));
        questions.push(new Question(id++,
            `What is a load balancer?  Server farm?`,
            `Load balancing is defined as the methodical and efficient distribution of network or application traffic across multiple servers in a server farm. 
            Each load balancer sits between client devices and backend servers, receiving and then distributing incoming requests to any available server capable of fulfilling them.
            A server farm is a set of many servers interconnected together and housed within the same physical facility. 
            A server farm provides the combined computing power of many servers by simultaneously executing one or more applications or services.`,
            Category.GENERAL
        ));
        questions.push(new Question(id++,
            `What are functional requirements vs non-functional?`,
            `Functional refers to system behavior: specific operations that the system can perform.  APIs. 
            </br>Non-functional: more abstract, e.g. Fast, fault-tolerant, secure.`,
            Category.GENERAL
        ));
        questions.push(new Question(id++,
            `What is a data warehouse?`,
            `A data warehouse is a system that pulls together data from many different sources within an organization for reporting and analysis. 
            The reports created from complex queries within a data warehouse are used to make business decisions.`,
            Category.GENERAL
        ));
        questions.push(new Question(id++,
            `gRPC - what is it and how is it different from REST?`,
            `gRPC is a popular open source Remote Procedure Call framework.  RPC Frameworks make it easier for apps to talk to each other.
            </br>- built on HTTP/2
            </br>- Protobuf - a serialization technology and language-neutral contract language.</br></br>
            gRPC:
            </br>- Contract first (proto file).  Both endpoints need to have the proto file that defines the contract.
            </br>- Content is binary. (Serialized with Protobuf). Designed for high performance. HTTP/2.
            </br>- Designed to hide complexity of multiple apps communicating.
            </br>- Best for performance, developer productivity.
            </br></br>
            REST:
            </br>- Content First (URL, Method, JSON), focus on readability and formatting.
            </br>- Text-based HTTP/1.1 and JSON. (Human readable).
            </br>- Widest audience - every computer is able to use HTTP/1.1 and JSON.
            `,
            Category.GENERAL
        ));
        questions.push(new Question(id++,
            `What is MapReduce?`,
            `Map-reduce is a data processing paradigm for condensing large volumes of data (multi-terabyte data-sets) into useful aggregated results 
            in-parallel on large clusters (thousands of nodes) of commodity hardware in a reliable, fault-tolerant manner. 
            A MapReduce program is composed of a map procedure, which performs filtering and sorting (such as sorting students by first name into queues, 
            one queue for each name), and a reduce method, which performs a summary operation (such as counting the number of students in each queue, yielding name frequencies).
            </br></br>
            Origin: Hadoop MapReduce.`,
            Category.GENERAL
        ));
        questions.push(new Question(id++,
            `What is Elastic Search and  how does it work?`,
            `At its core, you can think of Elasticsearch as a server that can process JSON requests and give you back JSON data.
            Elasticsearch is a distributed, open-source search and analytics engine. 
            It allows you to store, search, and analyze huge volumes of data quickly and in near real-time and give back answers in milliseconds.
            It stores data in documents - a document can be more than just text, it can be structured data in JSON. It uses an <strong>inverted index</strong> - 
            it doesn’t store strings directly but instead splits each document up to individual search terms 
            (i.e. each word) then maps each search term to the documents those search terms occur within. `,
            Category.GENERAL
        ));
        // questions.push(new Question(id++,
        //     ``,
        //     ``,
        //     Category.GENERAL
        // ));
        
        
        return questions;
    }

    static getSandboxes = (): Link[] => {
        let links = []; let id = 0;
        links.push(new Link(id++,
            ".NET Fiddle",
            "https://dotnetfiddle.net/",
            1
        ));
        links.push(new Link(id++,
            "Stack Blitz Angular",
            "https://stackblitz.com/edit/angular-lbrctn",
            2
        ));
        links.push(new Link(id++,
            "JS Fiddle",
            "https://jsfiddle.net/",
            3
        ));
        links.push(new Link(id++,
            "SQL Fiddle",
            "http://sqlfiddle.com/",
            4
        ));
        return links;
    }
    
}