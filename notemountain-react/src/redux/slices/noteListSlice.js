import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    noteLists: [],
    noteList: null
}

export const getNoteListsByDisplayName = createAsyncThunk("noteLists/getAllByDisplayName",
    async (displayName) => {
        const response = await axios.get("https://note-app-production-35a0.up.railway.app/notelist/getallbydisplayname?displayName=" + displayName)
        return response.data
    }
)

export const addNoteList = createAsyncThunk("noteLists/addNoteList",
    async (noteList) => {
        const response = await axios.post("https://note-app-production-35a0.up.railway.app/notelist/add", noteList)
        return response.data
    }
)

export const getNoteListByNoteListId = createAsyncThunk("noteList/getNoteListByNoteListId",
    async (id) => {
        const response = await axios.get("https://note-app-production-35a0.up.railway.app/notelist/getbyid?id=" + id)
        return response.data
    }
)

export const deleteNoteListByNoteListId = createAsyncThunk("noteLists/getNoteListByNoteListId",
    async (id) => {
        await axios.delete("https://note-app-production-35a0.up.railway.app/notelist/deletebyid?id=" + id)
        return id
    }
)

export const renameNoteListName = createAsyncThunk("noteLists/renameNoteListName",
    async (noteList) => {
        const response = await axios.put(`https://note-app-production-35a0.up.railway.app/notelist/updatebyid?id=${noteList.id}`, noteList)
        return response.data
    }
)

export const deleteAllNoteListsByDisplayName = createAsyncThunk("noteLists/deleteAllByDisplayName",
    async (displayName) => {
        await axios.delete(`https://note-app-production-35a0.up.railway.app/notelist/deleteallbydisplayname?displayName=${displayName}`)

    }
)

export const noteListSlice = createSlice({
    name: 'noteList',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getNoteListsByDisplayName.fulfilled, (state, action) => {
            state.noteLists = action.payload
        })
        builder.addCase(deleteAllNoteListsByDisplayName.fulfilled, (state) => {
            state.noteLists = []
        })
        builder.addCase(addNoteList.fulfilled, (state, action) => {
            state.noteLists.push(action.payload)
        })
        builder.addCase(getNoteListByNoteListId.fulfilled, (state, action) => {
            state.noteList = action.payload
        })
        builder.addCase(deleteNoteListByNoteListId.fulfilled, (state, action) => {
            state.noteLists = state.noteLists.filter(
                (noteList) => noteList.noteListId !== action.payload
            );
        })
        builder.addCase(renameNoteListName.fulfilled, (state, action) => {
            state.noteLists.forEach((item) => {
                if (item.noteListId === action.payload.id) {
                    item.noteListName = action.payload.noteListName
                }
            })
        })


    },
})

export const { } = noteListSlice.actions

export default noteListSlice.reducer