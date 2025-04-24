import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSwapiByUd = createAsyncThunk('swapi/fetchSwapiByUid',
    async (uid, thunkApi) => {
        try {
            const res = await fetch(`https://www.swapi.tech/api/people/${uid}`);
            if (!res.ok) {
                throw new Error('Swapi not found')
            }
            const data = await res.json();
            return data.result;
        }
        catch (err) {
            return thunkApi.rejectWithValue(err.message)
        }


    }

)