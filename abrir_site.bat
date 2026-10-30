@echo off
chcp 65001 > nul
echo ========================================================
echo   RESTAURANTE ESTAÇÃO LARGO DO MACHADO (BOTECO 184)
echo   Abrindo o site interativo no seu navegador...
echo ========================================================
start "" "%~dp0standalone_preview.html"
exit