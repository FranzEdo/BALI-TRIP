@echo off
setlocal enabledelayedexpansion
set count=1
for %%f in (*.jpg) do (
    ren "%%f" "image_!count!.jpg"
    set /a count+=1
)