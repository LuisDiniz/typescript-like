export class Like {

    private _isSelected: boolean;

    constructor(private _likesCount: number){
        this._isSelected = false;
    }

    onClick = () => {
        this._isSelected = !this._isSelected;
        this._likesCount += (this._isSelected) ? +1 : -1;
    }

    get likesCount () {
        return this._likesCount;
    }

    get isSelected() {
        return this._isSelected;
    }

}