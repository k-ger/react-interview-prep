import { Component } from "react";
import DataService from "../common/data.service";
import { Category, Link, Question } from "../common/models";
import Toggle from "./Toggle";
import Icon, { IconType } from "../icons/Icon";
import FadeInContainer from "./FadeInContainer";

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

    render() {
        return (
            <div className="bg-white shadow overflow-hidden rounded-md sm:rounded-lg">
                <div className="bg-indigo-900 flex sm:block justify-center px-4 sm:px-6">
                    <div className="sm:ml-10 space-x-12 sm:space-x-12 flex">
                        <button type="button" className={this._getTabClassName(TopicTab.QUESTIONS)} onClick={() => { this._selectTab(TopicTab.QUESTIONS) }}>
                            <Icon iconType={IconType.Badge} className={this._getTabIconClassName(TopicTab.QUESTIONS)}></Icon>
                            Questions
                        </button>
                        <button type="button" className={this._getTabClassName(TopicTab.LINKS)} onClick={() => { this._selectTab(TopicTab.LINKS) }}>
                            <Icon iconType={IconType.Link} className={this._getTabIconClassName(TopicTab.LINKS)}></Icon>
                            Links
                        </button>
                        <button type="button" className={this._getTabClassName(TopicTab.SANDBOX)} onClick={() => { this._selectTab(TopicTab.SANDBOX) }}>
                            <Icon iconType={IconType.Code} className={this._getTabIconClassName(TopicTab.SANDBOX)}></Icon>
                            Sandbox
                        </button>
                    </div>
                </div>
                <div className="">
                    {this.state.activeTab === TopicTab.QUESTIONS ?
                        <div className="mx-4 py-1">
                            <Toggle offText={'Show All'} onText={'Hide All'} change={this.toggleAll}></Toggle>
                        </div>
                        : ''}
                    <dl className="expandables-container">
                        {this.state.activeTab === TopicTab.QUESTIONS ? this._getQuestions() : ''}
                        {this.state.activeTab === TopicTab.LINKS ? this._getLinks() : ''}
                        {this.state.activeTab === TopicTab.SANDBOX ? this._getSandbox() : ''}
                    </dl>
                </div>
            </div>
        );
    }

    componentDidMount = () => {
        this._setCategory();
    }

    componentDidUpdate(prevProps: ITopicPageProps) {
        if (this.props.categoryId !== prevProps.categoryId) {
            this._selectTab(TopicTab.QUESTIONS);
            this._setCategory();
        }
    }

    private _setCategory() {
        this.setState({
            questions: this._allQuestions.filter(x => x.catId() === this.props.categoryId),
            links: this._allLinks.filter(x => x.catId() === this.props.categoryId),
            sandboxes: this._allSandboxes.filter(x => x.catId() === this.props.categoryId),
        });
    }

    private _getQuestions() {
        if (this.state.questions && this.state.questions.length) {
            return this.state.questions.map((q) => {
                return (
                    <div key={q.id()} className="px-4 py-5 cursor-pointer hover:bg-gray-100 m-2 shadow" onClick={() => { this._toggleShowAnswer(q) }}>
                        <FadeInContainer>
                            <div className="text-sm text-gray-600 pb-1" style={{fontWeight: (q.a() ? 500 : 900) }} dangerouslySetInnerHTML={{ __html: q.q() }}>
                            </div>
                        </FadeInContainer>
                        {q.isShowA() ?
                            <FadeInContainer>
                                <div className="shadow-inner p-2 pl-4 mt-1 ml-4 text-sm text-indigo-900 bg-gray-100 border-l-4 border-indigo-600 overflow-x-hidden" dangerouslySetInnerHTML={{ __html: q.a() }}>
                                </div>
                            </FadeInContainer>
                            : 
                        ''}
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
        if (this.state.links && this.state.links.length) {
            return this.state.links.map((l) => {
                return (
                    <div key={l.id()} className="shadow">
                        <FadeInContainer>
                            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 m-2">
                                <div className="text-sm font-medium text-gray-600 pb-1">
                                    {l.name()}
                                </div>
                                <div className="shadow-inner p-2 pl-4 mt-1 ml-4 sm:ml-0 text-sm text-indigo-900 cursor-pointer hover:bg-gray-100 sm:mt-0 sm:col-span-2 bg-gray-100 border-l-4 border-indigo-600 overflow-x-hidden">
                                    <a className="hover:underline" href={l.url()}>{l.url()}</a>
                                </div>
                            </div>
                        </FadeInContainer>
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
        if (this.state.sandboxes && this.state.sandboxes.length) {
            return this.state.sandboxes.map((s) => {
                return (
                    <div key={s.id()} className="shadow">
                        <FadeInContainer>
                            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 m-2">
                                <div className="text-sm font-medium text-gray-600 pb-1">
                                    {s.name()}
                                </div>
                                <div className="shadow-inner p-2 pl-4 mt-1 ml-4 sm:ml-0 text-sm text-indigo-900 cursor-pointer hover:bg-gray-100 sm:mt-0 sm:col-span-2 bg-gray-100 border-l-4 border-indigo-600 overflow-x-hidden">
                                    <a className="hover:underline" href={s.url()}>{s.url()}</a>
                                </div>
                            </div>
                        </FadeInContainer>
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
        let classNameSelected = `flex flex-col sm:flex-row items-center font-medium text-gray-300 py-2 sm:py-3 border-b-2 border-gray-200 focus:outline-none`;
        let className = `flex flex-col sm:flex-row items-center font-medium text-gray-500 hover:text-gray-400 py-2 sm:py-3 border-b-2 border-transparent focus:outline-none`;

        return (tab === this.state.activeTab) ? classNameSelected : className;
    }

    private _getTabIconClassName = (tab: TopicTab): string => {
        let classNameSelected = `w-6 sm:w-5 sm:mr-2`;
        let className = `w-6 sm:w-5 sm:mr-2`;
        //they're the same for now
        return (tab === this.state.activeTab) ? classNameSelected : className;
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
        if (isShow) {
            questions.forEach(x => x.showAns());
            this.setState({ questions: questions });
        } else {
            questions.forEach(x => x.hideAns());
            this.setState({ questions: questions });
        }
    }

}

export default TopicPage;