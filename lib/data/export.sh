#!/bin/bash

i=1; for f in *.ts; do base="${f%.ts}"; echo "import { questions $([ $i -eq 1 ] && echo '' || echo  as questions$i) } from \"@/lib/data/$1/$base\";"; ((i++)); done