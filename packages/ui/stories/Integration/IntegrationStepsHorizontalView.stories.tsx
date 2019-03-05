// import { object } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { IntegrationStepsHorizontalView } from '../../src';

const stories = storiesOf('Integration/IntegrationStepsHorizontalView', module);

const integrationRunning = {
  steps: [
    {
      icon:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMjcuMiAzMDAiPjxzdHlsZT48L3N0eWxlPjxnIGlkPSJMYXllcl8xIj48cGF0aCBkPSJNMjE3LjcgMTk0LjVjNS45IDMuNiA5LjUgNy43IDkuNSAxMi43djYzLjRjMCAyMS42LTY3LjkgMjkuNS0xMTMuNiAyOS41QzY3LjkgMzAwIDAgMjkyLjEgMCAyNzAuNXYtNjMuNGMwLTQuOSAzLjUtOS4xIDkuNS0xMi43LTUuOS0zLjYtOS41LTcuNy05LjUtMTIuN3YtNjMuNGMwLTUgMy42LTkuMiA5LjctMTIuOC02LjEtMy42LTkuOC03LjktOS44LTEyLjlWMjkuNUMtLjEgNy45IDY3LjggMCAxMTMuNSAwYzQ1LjcgMCAxMTMuNiA3LjkgMTEzLjYgMjkuNXY2My40YzAgNS0zLjYgOS4yLTkuNyAxMi44IDYuMSAzLjYgOS44IDcuOSA5LjggMTIuOVYxODJjMCA0LjctMy41IDguOS05LjUgMTIuNXoiIGZpbGw9IiMwMDk0NDQiLz48cGF0aCBkPSJNMjE3LjYgMTk0LjdjNS45IDMuNi04Ni4xIDI3LjItMjA4LjMgMEMzLjQgMTkxLjEtLjIgMTg3LS4yIDE4MnYtNjMuNGMwLTUgOS43LTEyLjggOS43LTEyLjhzMTA5LjYgMjAgMjA3LjctLjFjOS43IDEuOCA5LjggNy45IDkuOCAxMi45VjE4MmMuMSA0LjktMy40IDkuMS05LjQgMTIuN3oiIGZpbGw9IiM0ZmU4OWMiLz48cGF0aCBkPSJNOS41IDEwNS41Yy02LTMuNi05LjUtNy43LTkuNS0xMi43VjI5LjVDMCA3LjkgNjcuOSAwIDExMy42IDBjNDUuNyAwIDExMy42IDcuOSAxMTMuNiAyOS41djYzLjRjMCA0LjktMy41IDkuMS05LjUgMTIuNy0xMDMuMyAyNC41LTIxNC4yIDMuNS0yMDguMi0uMXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNNzguMSAyMjIuNmMxMi4xIDEgMjQuNyAxLjUgMzcuNiAxLjUgMzUuNSAwIDY4LjctNCA4OC45LTEwLjcgMS42LS41IDMuNC4zIDMuOSAyIC41IDEuNi0uMyAzLjQtMiAzLjktMjAuOCA2LjktNTQuOCAxMS05MC45IDExLTEzIDAtMjUuOS0uNS0zOC4xLTEuNi0xLjctLjEtMy0xLjctMi44LTMuNC4yLTEuNSAxLjctMi44IDMuNC0yLjd6bS0yNS4yLTJjLTEyLjMtMi0yMi45LTQuNy0zMC41LTcuNi0xLjEtLjQtMi4zLjEtMi43IDEuMi0uNCAxLjEuMSAyLjMgMS4yIDIuNyA4IDMuMSAxOC42IDUuOCAzMS40IDcuOWguM2MxIDAgMS45LS43IDItMS43LjItMS4yLS42LTIuMy0xLjctMi41em0xNjQuOC0yNi4xYzUuOSAzLjYgOS41IDcuNyA5LjUgMTIuN3Y2My40YzAgMjEuNi02Ny45IDI5LjUtMTEzLjYgMjkuNUM2Ny45IDMwMCAwIDI5Mi4xIDAgMjcwLjV2LTYzLjRjMC00LjkgMy41LTkuMSA5LjUtMTIuNy01LjktMy42LTkuNS03LjctOS41LTEyLjd2LTYzLjRjMC01IDMuNi05LjIgOS43LTEyLjgtNi4xLTMuNi05LjgtNy45LTkuOC0xMi45VjI5LjVDLS4xIDcuOSA2Ny44IDAgMTEzLjUgMGM0NS43IDAgMTEzLjYgNy45IDExMy42IDI5LjV2NjMuNGMwIDUtMy42IDkuMi05LjcgMTIuOCA2LjEgMy42IDkuOCA3LjkgOS44IDEyLjlWMTgyYzAgNC43LTMuNSA4LjktOS41IDEyLjV6TTE5LjMgMTAxLjNjMy43IDEuNSA4LjIgMyAxMy43IDQuNCAxNy43IDQuNiA0NC42IDguMyA4MC41IDguMyAzNiAwIDYzLTMuNyA4MC42LTguNCA1LjQtMS40IDEwLTIuOSAxMy43LTQuNCA3LjItMyAxMS02IDExLTguNFYyOS41YzAtNy40LTM2LjItMjEuMi0xMDUuMy0yMS4yUzguMiAyMi4xIDguMiAyOS41djYzLjRjMCAyLjMgMy44IDUuMyAxMS4xIDguNHptMTg5IDk3LjZjLTIzLjUgOC45LTY0LjEgMTIuNC05NC43IDEyLjQtMzAuNiAwLTcxLjMtMy41LTk0LjctMTIuNC03IDMtMTAuNiA1LjktMTAuNiA4LjJ2NjMuNGMwIDcuNCAzNi4yIDIxLjIgMTA1LjMgMjEuMnMxMDUuMy0xMy44IDEwNS4zLTIxLjJ2LTYzLjRjMC0yLjMtMy42LTUuMi0xMC42LTguMnptMTAuNi04MC40YzAtMi40LTMuOC01LjQtMTEuMS04LjQtMjMuNSA4LjgtNjMuOSAxMi4zLTk0LjMgMTIuM3MtNzAuNy0zLjUtOTQuMi0xMi4yYy03LjIgMy0xMSA2LTExIDguNFYxODJjMCAyLjMgMy42IDUuMyAxMC42IDguMiAzLjYgMS41IDguMSAzIDEzLjUgNC40IDE3LjcgNC43IDQ0LjggOC41IDgxLjIgOC41czYzLjUtMy44IDgxLjItOC41YzUuNC0xLjQgOS45LTIuOSAxMy41LTQuNCA3LTMgMTAuNi01LjkgMTAuNi04LjJ2LTYzLjV6bS0xNC4zIDYuM2MtMjAuMiA2LjctNTMuNCAxMC43LTg4LjkgMTAuNy0xMi45IDAtMjUuNi0uNS0zNy42LTEuNS0xLjctLjEtMy4yIDEuMS0zLjQgMi44LS4xIDEuNyAxLjEgMy4yIDIuOCAzLjQgMTIuMiAxIDI1IDEuNiAzOC4xIDEuNiAzNi4xIDAgNzAuMS00LjEgOTAuOS0xMSAxLjYtLjUgMi41LTIuMyAyLTMuOS0uNS0xLjgtMi4yLTIuNy0zLjktMi4xem0tMTUxLjcgNy4xYy0xMi4zLTItMjIuOS00LjctMzAuNS03LjYtMS4xLS40LTIuMy4xLTIuNyAxLjItLjQgMS4xLjEgMi4zIDEuMiAyLjcgOCAzLjEgMTguNiA1LjggMzEuNCA3LjloLjNjMSAwIDEuOS0uNyAyLTEuNy4yLTEuMi0uNi0yLjMtMS43LTIuNXptMjQuNi04MC43YzEyLjIgMSAyNSAxLjYgMzguMSAxLjYgMzYuMSAwIDcwLjEtNC4xIDkwLjktMTEgMS42LS41IDIuNS0yLjMgMi0zLjlzLTIuMy0yLjUtMy45LTJjLTIwLjIgNi43LTUzLjQgMTAuNy04OC45IDEwLjctMTMtLjEtMjUuNi0uNi0zNy43LTEuNi0xLjctLjEtMy4yIDEuMS0zLjQgMi44LS4xIDEuNyAxLjIgMy4yIDIuOSAzLjR6bS0yNS00LjFjMSAwIDEuOS0uNyAyLTEuNy4yLTEuMS0uNi0yLjItMS43LTIuNC0xMi4zLTItMjIuOS00LjctMzAuNS03LjYtMS4xLS40LTIuMy4xLTIuNyAxLjItLjQgMS4xLjEgMi4zIDEuMiAyLjcgOCAzLjEgMTguNiA1LjggMzEuNCA3LjkgMC0uMS4xLS4xLjMtLjF6Ii8+PC9nPjwvc3ZnPg==',
      name: 'SQL',
      pattern: 'From',
    },
    {
      icon:
        'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAzMDAgMjEwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGU+LnN0NSwuc3Q2e2ZpbGw6I2ZmZn0uc3Q2e2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkfTwvc3R5bGU+PHBhdGggZD0iTTEyNC44IDIyLjljOS43LTEwLjEgMjMuMS0xNi4zIDM4LTE2LjMgMTkuOCAwIDM3LjEgMTEgNDYuMyAyNy40IDgtMy42IDE2LjgtNS42IDI2LjItNS42IDM1LjcgMCA2NC43IDI5LjIgNjQuNyA2NS4ycy0yOSA2NS4yLTY0LjcgNjUuMmMtNC40IDAtOC42LS40LTEyLjctMS4zLTguMSAxNC40LTIzLjUgMjQuMi00MS4zIDI0LjItNy40IDAtMTQuNC0xLjctMjAuNy00LjgtOC4yIDE5LjMtMjcuMyAzMi45LTQ5LjcgMzIuOS0yMy4yIDAtNDMtMTQuNy01MC42LTM1LjMtMy4zLjctNi44IDEuMS0xMC4zIDEuMS0yNy42LjEtNTAtMjIuNS01MC01MC40IDAtMTguNyAxMC4xLTM1LjEgMjUtNDMuOC0zLjEtNy4xLTQuOC0xNC45LTQuOC0yMy4xQzIwLjIgMjYuMSA0Ni4zIDAgNzguNSAwYzE4LjkgMCAzNS43IDkgNDYuMyAyMi45IiBmaWxsPSIjMGY5YmQ3Ii8+PHBhdGggY2xhc3M9InN0NSIgZD0iTTQzLjQgMTA4LjljLS4yLjUuMS42LjEuNy42LjQgMS4xLjcgMS43IDEgMy4xIDEuNiA2IDIuMSA5IDIuMSA2LjIgMCAxMC0zLjMgMTAtOC41di0uMWMwLTQuOS00LjMtNi42LTguNC03LjlsLS41LS4yYy0zLjEtMS01LjctMS44LTUuNy0zLjlWOTJjMC0xLjcgMS41LTMgMy45LTMgMi42IDAgNS44LjkgNy44IDIgMCAwIC42LjQuOC0uMi4xLS4zIDEuMS0zLjEgMS4zLTMuNC4xLS4zLS4xLS42LS4zLS43LTIuMy0xLjQtNS41LTIuNC04LjgtMi40aC0uNmMtNS42IDAtOS42IDMuNC05LjYgOC4zdi4xYzAgNS4xIDQuMyA2LjggOC40IDhsLjcuMmMzIC45IDUuNSAxLjcgNS41IDMuOHYuMWMwIDEuOS0xLjcgMy4zLTQuMyAzLjMtMSAwLTQuNCAwLTcuOS0yLjMtLjQtLjMtLjctLjQtMS0uNi0uMi0uMS0uNi0uMy0uOC4zbC0xLjMgMy40ek0xMzMuNSAxMDguOWMtLjIuNS4xLjYuMS43LjYuNCAxLjEuNyAxLjcgMSAzLjEgMS42IDYgMi4xIDkgMi4xIDYuMiAwIDEwLTMuMyAxMC04LjV2LS4xYzAtNC45LTQuMy02LjYtOC40LTcuOWwtLjUtLjJjLTMuMS0xLTUuNy0xLjgtNS43LTMuOVY5MmMwLTEuNyAxLjUtMyAzLjktMyAyLjYgMCA1LjguOSA3LjggMiAwIDAgLjYuNC44LS4yLjEtLjMgMS4xLTMuMSAxLjMtMy40LjEtLjMtLjEtLjYtLjMtLjctMi4zLTEuNC01LjUtMi40LTguOC0yLjRoLS42Yy01LjYgMC05LjYgMy40LTkuNiA4LjN2LjFjMCA1LjEgNC4zIDYuOCA4LjQgOGwuNy4yYzMgLjkgNS41IDEuNyA1LjUgMy44di4xYzAgMS45LTEuNyAzLjMtNC4zIDMuMy0xIDAtNC4zIDAtNy45LTIuMy0uNC0uMy0uNy0uNC0xLS42LS4xLS4xLS42LS4zLS44LjNsLTEuMyAzLjR6TTIwMC4yIDkzYy0uNS0xLjctMS4zLTMuMi0yLjMtNC41LTEtMS4zLTIuNC0yLjMtMy45LTMtMS42LS43LTMuNC0xLjEtNS41LTEuMXMtMy45LjQtNS41IDEuMWMtMS42LjctMi45IDEuNy0zLjkgM3MtMS44IDIuOC0yLjMgNC41Yy0uNSAxLjctLjggMy42LS44IDUuNSAwIDIgLjMgMy44LjggNS41LjUgMS43IDEuMyAzLjIgMi4zIDQuNSAxIDEuMyAyLjQgMi4zIDMuOSAzczMuNCAxLjEgNS41IDEuMSAzLjktLjQgNS41LTEuMWMxLjYtLjcgMi45LTEuNyAzLjktM3MxLjgtMi44IDIuMy00LjVjLjUtMS43LjgtMy42LjgtNS41LS4xLTEuOS0uMy0zLjgtLjgtNS41bS01LjIgNS42YzAgMy0uNiA1LjMtMS42IDctMS4xIDEuNi0yLjcgMi40LTUgMi40cy0zLjktLjgtNS0yLjRjLTEuMS0xLjctMS42LTQtMS42LTdzLjUtNS4zIDEuNi03YzEuMS0xLjYgMi43LTIuNCA1LTIuNHMzLjkuOCA1IDIuNGMxLjEgMS43IDEuNiA0IDEuNiA3Ii8+PHBhdGggY2xhc3M9InN0NiIgZD0iTTI0Mi40IDEwNy4yYy0uMi0uNS0uNy0uMy0uNy0uMy0uNy4zLTEuNS41LTIuNC43LS45LjEtMS44LjItMi44LjItMi41IDAtNC41LS43LTUuOS0yLjItMS40LTEuNS0yLjItMy44LTIuMi03IDAtMi45LjctNS4xIDItNi44IDEuMy0xLjcgMy4yLTIuNSA1LjctMi41IDIuMSAwIDMuNy4yIDUuNC44IDAgMCAuNC4yLjYtLjQuNS0xLjMuOC0yLjEgMS4zLTMuNS4xLS40LS4yLS42LS4zLS42LS43LS4zLTIuMi0uNy0zLjQtLjktMS4xLS4yLTIuNC0uMy0zLjktLjMtMi4yIDAtNC4xLjQtNS43IDEuMS0xLjYuNy0zIDEuNy00LjEgMy0xLjEgMS4zLTEuOSAyLjgtMi41IDQuNS0uNiAxLjctLjggMy42LS44IDUuNSAwIDQuMyAxLjEgNy43IDMuNCAxMC4yIDIuMyAyLjUgNS43IDMuOCAxMC4xIDMuOCAyLjYgMCA1LjMtLjUgNy4zLTEuMyAwIDAgLjQtLjIuMi0uNmwtMS4zLTMuNHpNMjY4LjYgOTIuMWMtLjQtMS42LTEuNS0zLjMtMi4yLTQuMS0xLjEtMS4yLTIuMi0yLjEtMy4zLTIuNS0xLjQtLjYtMy4xLTEtNS0xLTIuMiAwLTQuMS40LTUuNyAxLjEtMS42LjctMi45IDEuOC00IDMuMXMtMS44IDIuOC0yLjQgNC41Yy0uNSAxLjctLjggMy42LS44IDUuNSAwIDIgLjMgMy45LjggNS42LjUgMS43IDEuNCAzLjIgMi41IDQuNCAxLjEgMS4yIDIuNiAyLjIgNC40IDIuOSAxLjguNyAzLjkgMSA2LjMgMSA1IDAgNy43LTEuMSA4LjgtMS43LjItLjEuNC0uMy4xLS44bC0xLjEtMy4yYy0uMi0uNS0uNy0uMy0uNy0uMy0xLjIuNS0zIDEuMy03LjEgMS4zLTIuNyAwLTQuNy0uOC01LjktMi0xLjMtMS4zLTEuOS0zLjEtMi01LjhoMTcuNHMuNSAwIC41LS41YzAtLjIuNi0zLjYtLjYtNy41bS0xNy4zIDMuNmMuMi0xLjcuNy0zIDEuNC00LjEgMS4xLTEuNiAyLjctMi41IDUtMi41czMuOC45IDQuOSAyLjVjLjcgMS4xIDEgMi41IDEuMiA0LjFoLTEyLjV6TTEyOS40IDkyLjFjLS40LTEuNi0xLjUtMy4zLTIuMi00LjEtMS4xLTEuMi0yLjItMi4xLTMuMy0yLjUtMS40LS42LTMuMS0xLTUtMS0yLjIgMC00LjEuNC01LjcgMS4xLTEuNi43LTIuOSAxLjgtNCAzLjFzLTEuOCAyLjgtMi40IDQuNWMtLjUgMS43LS44IDMuNi0uOCA1LjUgMCAyIC4zIDMuOS44IDUuNi41IDEuNyAxLjQgMy4yIDIuNSA0LjQgMS4xIDEuMiAyLjYgMi4yIDQuNCAyLjkgMS44LjcgMy45IDEgNi4zIDEgNSAwIDcuNy0xLjEgOC44LTEuNy4yLS4xLjQtLjMuMS0uOGwtMS4xLTMuMmMtLjItLjUtLjctLjMtLjctLjMtMS4yLjUtMyAxLjMtNy4xIDEuMy0yLjcgMC00LjctLjgtNS45LTItMS4zLTEuMy0xLjktMy4xLTItNS44aDE3LjRzLjUgMCAuNS0uNWMtLjEtLjIuNS0zLjYtLjYtNy41bS0xNy4zIDMuNmMuMi0xLjcuNy0zIDEuNC00LjEgMS4xLTEuNiAyLjctMi41IDUtMi41czMuOC45IDQuOSAyLjVjLjcgMS4xIDEgMi41IDEuMiA0LjFoLTEyLjV6Ii8+PHBhdGggY2xhc3M9InN0NSIgZD0iTTgxLjQgOTQuOWMtLjctLjEtMS42LS4xLTIuNy0uMS0xLjUgMC0yLjkuMi00LjMuNi0xLjQuNC0yLjYuOS0zLjYgMS43LTEuMS44LTEuOSAxLjctMi41IDIuOS0uNiAxLjEtLjkgMi41LS45IDRzLjMgMi45LjggNCAxLjMgMiAyLjMgMi43YzEgLjcgMi4yIDEuMiAzLjUgMS41IDEuNC4zIDIuOS41IDQuNi41IDEuOCAwIDMuNi0uMSA1LjMtLjQgMS43LS4zIDMuOC0uNyA0LjQtLjkuNi0uMSAxLjItLjMgMS4yLS4zLjQtLjEuNC0uNi40LS42Vjk0LjZjMC0zLjUtLjktNi4xLTIuOC03LjctMS44LTEuNi00LjUtMi40LTgtMi40LTEuMyAwLTMuNC4yLTQuNy40IDAgMC0zLjguNy01LjQgMiAwIDAtLjMuMi0uMi43bDEuMiAzLjNjLjIuNC42LjMuNi4zcy4xLS4xLjMtLjFjMy4zLTEuOCA3LjYtMS44IDcuNi0xLjggMS45IDAgMy4zLjQgNC4zIDEuMS45LjcgMS40IDEuOCAxLjQgNC4xdi43Yy0xLjQtLjItMi44LS4zLTIuOC0uM20tNi45IDEyLjJjLS43LS41LS44LS43LTEtMS0uMy0uNS0uNS0xLjMtLjUtMi4zIDAtMS41LjUtMi42IDEuNi0zLjQgMCAwIDEuNS0xLjMgNS0xLjMgMi41IDAgNC43LjQgNC43LjR2Ny45cy0yLjIuNS00LjcuNmMtMy41LjMtNS4xLS45LTUuMS0uOSIvPjxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik0yMjEuNyA4NS45Yy4xLS40LS4xLS42LS4zLS42LS4zLS4xLTEuOC0uNC0yLjktLjUtMi4yLS4xLTMuNC4yLTQuNS43LTEuMS41LTIuMyAxLjMtMi45IDIuMnYtMi4xYzAtLjMtLjItLjUtLjUtLjVoLTQuNWMtLjMgMC0uNS4yLS41LjV2MjUuOWMwIC4zLjIuNS41LjVoNC42Yy4zIDAgLjUtLjIuNS0uNXYtMTNjMC0xLjcuMi0zLjUuNi00LjYuNC0xLjEuOS0xLjkgMS41LTIuNi42LS42IDEuNC0xIDIuMi0xLjMuOC0uMiAxLjctLjMgMi4zLS4zLjkgMCAxLjkuMiAxLjkuMi4zIDAgLjUtLjIuNi0uNS40LS42IDEuMi0zIDEuNC0zLjVNMTc4LjggNzMuOWMtLjYtLjItMS4xLS4zLTEuNy0uNC0uNy0uMS0xLjUtLjItMi40LS4yLTMuMSAwLTUuNi45LTcuNCAyLjYtMS43IDEuNy0yLjkgNC40LTMuNSA3LjlsLS4yIDEuMmgtMy45cy0uNSAwLS42LjVsLS42IDMuNmMwIC4zLjEuNi42LjZoMy44bC0zLjkgMjEuOGMtLjMgMS44LS43IDMuMi0xIDQuMy0uNCAxLjEtLjggMS45LTEuMiAyLjUtLjQuNi0uOSAxLTEuNiAxLjItLjYuMi0xLjMuMy0yIC4zLS40IDAtMS0uMS0xLjQtLjItLjQtLjEtLjYtLjItLjktLjMgMCAwLS40LS4yLS42LjMtLjEuNC0xLjIgMy4yLTEuMyAzLjUtLjEuMyAwIC42LjMuNy41LjIuOS4zIDEuNi41IDEgLjIgMS44LjIgMi41LjIgMS42IDAgMy4xLS4yIDQuMy0uNyAxLjItLjQgMi4zLTEuMiAzLjItMi4yIDEtMS4xIDEuNi0yLjMgMi4zLTMuOS42LTEuNiAxLjEtMy41IDEuNS01LjhsMy45LTIyLjJoNS43cy41IDAgLjYtLjVsLjYtMy42YzAtLjMtLjEtLjYtLjYtLjZoLTUuNmMwLS4xLjMtMi4xLjktMy45LjMtLjguOC0xLjQgMS4yLTEuOS40LS40LjktLjcgMS41LS45LjYtLjIgMS4yLS4zIDEuOS0uMy41IDAgMSAuMSAxLjQuMS41LjEuNy4yLjkuMi42LjIuNiAwIC44LS4zbDEuMy0zLjdjMC0uMi0uMy0uMy0uNC0uNE0xMDEuMSAxMTEuNWMwIC4zLS4yLjUtLjUuNUg5NmMtLjMgMC0uNS0uMi0uNS0uNVY3NC40YzAtLjMuMi0uNS41LS41aDQuNmMuMyAwIC41LjIuNS41djM3LjF6Ii8+PC9zdmc+',
      name: 'Salesforce',
      pattern: 'To',
    },
  ],
};

// const integrationStopped = {};

stories
  .add(
    'running',
    withNotes('Verify the integration is running')(() => (
      <IntegrationStepsHorizontalView steps={integrationRunning.steps} />
    ))
  )

  .add(
    'stopped',
    withNotes('Verify the integration is stopped')(() => (
      <IntegrationStepsHorizontalView />
    ))
  );
