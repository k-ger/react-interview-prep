import { Component } from "react";
import TopicPage from "./TopicPage";
import { Category, CategoryDescription, CategoryName } from "../common/models";
import Icon, { IconType } from "../icons/Icon";
import FadeInContainer from "./FadeInContainer";
// import TextAnimationContainer from "./TextAnimationContainer";

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
            <FadeInContainer className="flex-auto">
                <div className="w-full">
                    <nav className="bg-gray-800">
                        <div className="max-w-7xl mx-auto px-2 py-2 sm:px-6 lg:px-8 sm:flex sm:justify-start">
                            <div className="flex items-center  whitespace-nowrap justify-center sm:justify-start">
                                <Icon iconType={IconType.Learn} className='w-6 pb-2 sm:pb-0 sm:w-8'></Icon>
                                <h1 className="text-white pr-0 pb-2 sm:pb-0 sm:mr-8 text-l sm:text-2xl font-bold sm:pr-4 cursor-default tracking-tighter ">
                                    interviewPrep
                                </h1>
                            </div>
                            <div className="flex space-x-4 flex-wrap items-center justify-center sm:items-stretch sm:justify-start">
                                <button type="button" className={this._getTabClassName(Category.DOTNET)} onClick={() => { this._selectTab(Category.DOTNET) }}>{CategoryName.get(Category.DOTNET)}</button>
                                <button type="button" className={this._getTabClassName(Category.ANGULAR)} onClick={() => { this._selectTab(Category.ANGULAR) }}>{CategoryName.get(Category.ANGULAR)}</button>
                                <button type="button" className={this._getTabClassName(Category.JSWEBDOM)} onClick={() => { this._selectTab(Category.JSWEBDOM) }}>{CategoryName.get(Category.JSWEBDOM)}</button>
                                <button type="button" className={this._getTabClassName(Category.SQL)} onClick={() => { this._selectTab(Category.SQL) }}>{CategoryName.get(Category.SQL)}</button>
                                <button type="button" className={this._getTabClassName(Category.GENERAL)} onClick={() => { this._selectTab(Category.GENERAL) }}>{CategoryName.get(Category.GENERAL)}</button>
                                <button type="button" className={this._getTabClassName(Category.RANDOM)} onClick={() => { this._selectTab(Category.RANDOM) }}>{CategoryName.get(Category.RANDOM)}</button>
                            </div>
                        </div>

                    </nav>

                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            <h1 className="text-l font-bold leading-tight text-gray-900">
                            {this._getCategoryDescription(this.state.categoryId)}
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
            </FadeInContainer>

        );
    }

    componentDidMount = () => {
        this.setState({ categoryId: Category.DOTNET })
    }

    private _getTabClassName = (tab: Category): string => {
        const classNameSelected = `bg-gray-600 text-white px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap focus:outline-none`;
        const className = `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap focus:outline-none`;

        return (tab === this.state.categoryId) ? classNameSelected : className;
    }

    private _getCategoryDescription = (categoryId: number) => {
        return (
            // <TextAnimationContainer text={CategoryDescription.get(categoryId)}></TextAnimationContainer>
            CategoryDescription.get(categoryId)
        );
    }

    private _selectTab = (tab: Category) => {
        this.setState({
            categoryId: tab
        });
    }

}

export default Home;