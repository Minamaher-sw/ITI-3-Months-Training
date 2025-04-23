class GameStartegy{
    excute()
    {
        return "hi no strategy "
    }
}
class GameAttackStrategy extends GameStartegy {
    excute()
    {
        return "Attack Strategy";
    }
}

class GameDeenseStrategy extends GameStartegy{
    excute()
    {
        return "Defence Strategy";
    }
}
class GameBalanceStrategy extends GameStartegy{
    excute()
    {
        return "Balance Strategy";
    }
}


class TeamStrategy{
    constructor()
    {
        this.gameStrategy = null ;
    }
    setStrategy(strategyVersion )
    {
        this.gameStrategy = strategyVersion;
    }
    dispalyStartegy()
    {
        if(this.gameStrategy)
        {
            return this.gameStrategy.excute();
        }
    }
}

var attack = new GameAttackStrategy();
var defen = new GameDeenseStrategy();
var bala = new GameBalanceStrategy();

var tem1 = new TeamStrategy();
tem1.setStrategy(defen);
var currentStartegy = tem1.dispalyStartegy();
console.log(currentStartegy);


