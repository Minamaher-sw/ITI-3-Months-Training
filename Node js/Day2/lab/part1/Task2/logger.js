class logger {
    constructor(label){
        this.label =label ;
    }

    _getTimeStamp(){
        return new Date().toISOString();
    }
    _log(level , message){
        const timestamp = this._getTimeStamp();
        console.log(`[${timestamp}] [${level.toUpperCase()}] [${this.label}] ${message}`);
    }
    info(message){
        this._log("info" ,message)
    }
    warn(message){
        this._log("warn" ,message)
    }
    erro(message){
        this._log("error" ,message)
    }
}

export{
    logger
}