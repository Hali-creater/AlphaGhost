from fastapi import APIRouter

router = APIRouter()

@router.get("/brokers")
async def get_brokers():
    return {"brokers": ["Alpaca", "Binance", "IBKR", "MT5"]}
