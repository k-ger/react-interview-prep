export class Link {
    private _id: number;
    private _displayName: string; 
    private _linkUrl: string; 
    private _categoryId: Category;

    constructor(id: number,displayName: string, linkUrl: string, categoryId: Category) {
        this._id = id;
        this._displayName = displayName;
        this._linkUrl = linkUrl;
        this._categoryId = categoryId;
    }

    id = () => this._id;
    name = () => this._displayName;
    url = () => this._linkUrl;
    catId = () => this._categoryId;
}

export class Question {
    private _id: number;
    private _showAnswer: boolean = false;
    private _question: string;
    private _answer: string; 
    private _categoryId: Category;

    constructor(id: number, question: string, answer: string, categoryId: Category) {
        this._id = id;
        this._question = question;
        this._answer = answer;
        this._categoryId = categoryId;
        // this.showAnswer = false;
    }

    id = () => this._id;
    q = () => this._question;
    a = () => this._answer;
    catId = (): Category => this._categoryId;
    isShowA = (): boolean => this._showAnswer;

    // isShowAnswer = this.showAnswer;
    toggleShowA = () => {
        this._showAnswer = !this._showAnswer;
    }
    hideAns = () => this._showAnswer = false;
    showAns = () => this._showAnswer = true;
}

export enum Category {
    DOTNET = 1,
    ANGULAR = 2,
    JSWEBDOM = 3,
    SQL = 4,
    GENERAL = 5,
    RANDOM = 6,

    //To add
    //Finance
    //React
    //Python
}

// export const Routes = new Map<number, string>([
//     [Category.DOTNET, '/'],
//     [Category.DOTNET, '/dotnet'],
//     [Category.ANGULAR, '/angular'],
//     [Category.JSWEBDOM, '/jswebdom'],
//     [Category.SQL, '/sql'],
//     [Category.GENERAL, '/general'],
//     [Category.RANDOM, '/random'],
// ]);

export const CategoryName = new Map<number, string>([
    [Category.DOTNET, 'C# .NET'],
    [Category.ANGULAR, 'Angular'],
    [Category.JSWEBDOM, 'JS, Web, DOM'],
    [Category.SQL, 'SQL Server'],
    [Category.GENERAL, 'General'],
    [Category.RANDOM, 'Random'],
]);
export const CategoryDescription = new Map<number, string>([
    [Category.DOTNET, 'C# .NET, Core'],
    [Category.ANGULAR, 'Angular'],
    [Category.JSWEBDOM, 'JS Web DOM Browser'],
    [Category.SQL, 'SQL and SQL Server, NoSQL'],
    [Category.GENERAL, 'OOP, Architecture, Source Control, Patterns, etc...'],
    [Category.RANDOM, 'Random Topic'],
]);