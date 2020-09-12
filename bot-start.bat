@ECHO OFF
TITLE WaterstonSystems Console
CLS
ECHO [Using Windows]
ECHO Starting WaterstonSystems...
ECHO Close the window to safely terminate the process.
ECHO.
NPM start
REM Should the bot crash, the PAUSE option will allow you to view the logs instead of abruptly closing.
PAUSE