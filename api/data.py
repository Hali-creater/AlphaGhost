from fastapi import APIRouter

router = APIRouter()

@router.get("/data/live")
async def get_live_data():
    # Logic to fetch live data
    return {"data": "Live data here"}

@router.get("/data/historical")
async def get_historical_data():
    # Logic to fetch historical data
    return {"data": "Historical data here"}
