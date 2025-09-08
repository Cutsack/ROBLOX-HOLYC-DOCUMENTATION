# Open Cloud (Optional Pipeline)

You can author HolyC as plain text inside Scripts under `ServerScriptService` and use an Open Cloud Luau Execution session to read those Scripts' `Source` and deliver the text to your live game via DataStore or Messaging, where the in-game loader executes them.

- Experimental loader: `src/shared/HolyCDataStoreLoader.luau` (disabled by default)
- See `README.md` for the "Open Cloud pipeline" section for workflow details
