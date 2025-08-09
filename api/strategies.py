from fastapi import APIRouter

router = APIRouter()

@router.get("/strategies")
async def get_strategies():
    return {"strategies": ["Momentum", "Mean-Reversion", "Arbitrage"]}
