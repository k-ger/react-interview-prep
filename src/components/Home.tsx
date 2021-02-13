import { Component } from "react";
import TopicPage from "./TopicPage";
import { Category, CategoryDescription, CategoryName } from "../common/models";
import Icon, { IconType } from "../icons/Icon";

interface IHomeProps {

}
interface IHomeState {
    categoryId: Category
}

class Home extends Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props)
        this.state = {
            categoryId: Category.DOTNET
        }
    }

    render() {
        return (
            <div>
                <div className="w-full">

                    <nav className="bg-gray-800 ">
                        <div className="max-w-7xl mx-auto px-2 py-2 sm:px-6 lg:px-8 sm:flex sm:justify-start">
                            <div className="flex items-center  whitespace-nowrap justify-center sm:justify-start">
                                <Icon iconType={IconType.Learn} className='w-6 pb-2 sm:pb-0 sm:w-8'></Icon>
                                <h1 className="text-white pr-0 pb-2 sm:pb-0 sm:mr-8 text-l sm:text-2xl font-bold sm:pr-4 cursor-default tracking-tighter ">
                                    interviewPrep
                                </h1>
                            </div>
                            <div className="flex space-x-4 flex-wrap items-center justify-center sm:items-stretch sm:justify-start">
                                <a href="#" className={this._getTabClassName(Category.DOTNET)} onClick={() => { this._selectTab(Category.DOTNET) }}>{CategoryName.get(Category.DOTNET)}</a>
                                <a href="#" className={this._getTabClassName(Category.ANGULAR)} onClick={() => { this._selectTab(Category.ANGULAR) }}>{CategoryName.get(Category.ANGULAR)}</a>
                                <a href="#" className={this._getTabClassName(Category.JSWEBDOM)} onClick={() => { this._selectTab(Category.JSWEBDOM) }}>{CategoryName.get(Category.JSWEBDOM)}</a>
                                <a href="#" className={this._getTabClassName(Category.SQL)} onClick={() => { this._selectTab(Category.SQL) }}>{CategoryName.get(Category.SQL)}</a>
                                <a href="#" className={this._getTabClassName(Category.GENERAL)} onClick={() => { this._selectTab(Category.GENERAL) }}>{CategoryName.get(Category.GENERAL)}</a>
                            </div>
                        </div>

                    </nav>

                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            <h1 className="text-l font-bold leading-tight text-gray-900">
                                {CategoryDescription.get(this.state.categoryId)}
                            </h1>
                        </div>
                    </header>
                </div>
                <main className="">
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <div className="px-4 py-6 sm:px-0">
                            <TopicPage categoryId={this.state.categoryId}></TopicPage>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    componentDidMount = () => {
        this.setState({ categoryId: Category.DOTNET })
    }

    private _getTabClassName = (tab: Category): string => {
        let classNameSelected = `bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap`;
        let className = `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap`;

        return (tab === this.state.categoryId) ? classNameSelected : className;
    }

    private _selectTab = (tab: Category) => {
        this.setState({
            categoryId: tab
        });
    }

}

export default Home;