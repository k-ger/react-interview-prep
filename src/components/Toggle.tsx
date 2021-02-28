import { Component } from "react";

interface IToggleProps {
    onText: string;
    offText: string;
    change: (isShow: boolean) => void;
}
interface IToggleState {
    isChecked: boolean
}

export class Toggle extends Component<IToggleProps, IToggleState> {
    private _onText: string = 'On';
    private _offText: string = 'Off';

    constructor(props: IToggleProps) {
        super(props);
        this.state = {
            isChecked: false
        }
    }

    render() {
        return (
            <div className="mt-2">
                <div className="relative inline-block w-8 mr-2 align-middle select-none">
                    <input type="checkbox" name="toggle" id="toggle" checked={this.state.isChecked} className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer focus:outline-none" onChange={this.toggleClicked} />
                    <label htmlFor="toggle" className="toggle-label block overflow-hidden h-4 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
                <label htmlFor="toggle" className="text-xs text-gray-700">{this.state.isChecked ? (this.props.onText ?? this._onText) : (this.props.offText ?? this._offText)}</label>
            </div>
        );
    }

    toggleClicked = () => {
        this.setState({ isChecked: !this.state.isChecked });
        setTimeout(() => {
            this.props.change(this.state.isChecked);
        });
    }

    getDisplayText = () => {
        return this.state.isChecked ? (this.props.onText ?? this._onText) : (this.props.offText ?? this._offText);
    }
}

export default Toggle;