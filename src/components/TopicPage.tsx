import { Component } from "react";
import DataService from "../common/data.service";
import { Category, Link, Question } from "../common/models";
import Toggle from "./Toggle";

interface ITopicPageProps {
    categoryId: Category
} 
interface ITopicPageState {
    questions: Question[];
    links: Link[];
    sandboxes: Link[];
    showAll: boolean;
    activeTab: TopicTab
}

enum TopicTab {
    QUESTIONS = 1,
    LINKS = 2,
    SANDBOX = 3
}

class TopicPage extends Component<ITopicPageProps, ITopicPageState> {
    private _allQuestions: Question[];
    private _allLinks: Link[];
    private _allSandboxes: Link[];

    constructor(props: ITopicPageProps) {
        super(props);
        this._allQuestions = DataService.getQuestions();
        this._allLinks = DataService.getLinks();
        this._allSandboxes = DataService.getSandboxes();
        this.state = {
            questions: [],
            links: [],
            sandboxes: [],
            showAll: false,
            activeTab: TopicTab.QUESTIONS
        }
    }

    render () {
        return (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="flex sm:block justify-center px-4 py-5 sm:px-6">
                    <div className="sm:ml-10 pr-4 space-x-8">
                        <a href="#" className={this._getTabClassName(TopicTab.QUESTIONS)} onClick={() => {this._selectTab(TopicTab.QUESTIONS)}}>Questions</a>
                        <a href="#" className={this._getTabClassName(TopicTab.LINKS)} onClick={() => {this._selectTab(TopicTab.LINKS)}}>Links</a>
                        <a href="#" className={this._getTabClassName(TopicTab.SANDBOX)} onClick={() => {this._selectTab(TopicTab.SANDBOX)}}>Sandbox</a>
                    </div>
                </div>
                <div className="border-t border-gray-200">
                    {this.state.activeTab == TopicTab.QUESTIONS ?
                    <div className="mx-4 py-1">
                        <Toggle offText={'Show All'} onText={'Hide All'} change={this.toggleAll}></Toggle>
                    </div>
                    : ''}
                    <dl>
                        {this.state.activeTab == TopicTab.QUESTIONS ? this._getQuestions() : ''}
                        {this.state.activeTab == TopicTab.LINKS ? this._getLinks() : ''}
                        {this.state.activeTab == TopicTab.SANDBOX ? this._getSandbox() : ''}
                    </dl>
                </div>
            </div>
        );
    }

    componentDidMount = () => {
        this._setCategory();
    }

    componentDidUpdate(prevProps: ITopicPageProps) {
        if(this.props.categoryId !== prevProps.categoryId) {
            this._selectTab(TopicTab.QUESTIONS);
            this._setCategory();
        }   
    }

    private _setCategory() {
        this.setState({
            questions: this._allQuestions.filter(x => x.catId() === this.props.categoryId),
            links: this._allLinks.filter(x => x.catId() == this.props.categoryId),
            sandboxes:  this._allSandboxes.filter(x => x.catId() == this.props.categoryId),
        });
    }

    private _getQuestions() {
        if(this.state.questions && this.state.questions.length) {
            return this.state.questions.map((q) => {
                return (
                    <div key={q.id()} className="px-4 py-5 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-6 cursor-pointer hover:bg-gray-100 m-2 shadow" onClick={() => {this._toggleShowAnswer(q)}}>
                        <div className="text-sm font-medium text-gray-600 pb-1"  dangerouslySetInnerHTML={{__html: q.q()}}>
                            {/* {q.q()} */}
                        </div>
                        {q.isShowA() ? 
                        <div className="shadow-inner p-2 pl-4 mt-1 ml-4 lg:ml-0 text-sm text-indigo-900 lg:mt-0 lg:col-span-2 bg-gray-100 border-l-4 border-indigo-600" dangerouslySetInnerHTML={{__html: q.a()}}>
                            
                        </div>
                        : ''}
                    </div>
                )
            });
            
        } else {
            return (
                <div>No questions found...</div>
            )
        }
    }

    private _getLinks() {
        if(this.state.links && this.state.links.length) {
            return this.state.links.map((l) => {
                return (
                    <div key={l.id()} className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 m-2 shadow">
                        <div className="text-sm font-medium text-gray-600 pb-1">
                            {l.name()}
                        </div>
                        <div className="shadow-inner p-2 pl-4 mt-1 ml-4 sm:ml-0 text-sm text-indigo-900 cursor-pointer hover:bg-gray-100 sm:mt-0 sm:col-span-2 bg-gray-100 border-l-4 border-indigo-600 ">
                            <a className="hover:underline" href={l.url()}>{l.url()}</a>
                        </div>
                    </div>
                )
            });
        } else {
            return (
                <div className="">No links found...</div>
            )
        }
    }

    private _getSandbox() {
        //TODO: get fiddles
        if(this.state.sandboxes && this.state.sandboxes.length) {
            return this.state.sandboxes.map((s) => {
                return (
                    <div key={s.id()} className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 m-2 shadow">
                        <div className="text-sm font-medium text-gray-600 pb-1">
                            {s.name()}
                        </div>
                        <div className="shadow-inner p-2 pl-4 mt-1 ml-4 sm:ml-0 text-sm text-indigo-900 cursor-pointer hover:bg-gray-100 sm:mt-0 sm:col-span-2 bg-gray-100 border-l-4 border-indigo-600">
                            <a className="hover:underline" href={s.url()}>{s.url()}</a>
                        </div>
                    </div>
                )
            });
        } else {
            return (
                <div className="p-4 text-center text-gray-400 sm:text-left">None found...</div>
            )
        }
    }

    private _getTabClassName = (tab: TopicTab): string => {
        let classNameSelected = `font-semibold text-indigo-600 hover:text-indigo-500`;
        let className = `font-medium text-gray-500 hover:text-gray-900`;

        return (tab == this.state.activeTab) ? classNameSelected : className;
    }

    private _selectTab = (tab: TopicTab) => {
        this.setState({
            activeTab: tab
        });
    }

    private _toggleShowAnswer = (q: Question) => {
        let questions = [...this.state.questions];
        let question = questions.find(x => x.id() === q.id());
        question?.toggleShowA();
        this.setState({
            questions: questions
        });
    }

    public toggleAll = (isShow: boolean) => {
        let questions = [...this.state.questions];
        if(isShow) {
            questions.forEach(x => x.showAns());
            this.setState({questions: questions});
        } else {
            questions.forEach(x => x.hideAns());
            this.setState({questions: questions});
        }
    }

}

export default TopicPage;