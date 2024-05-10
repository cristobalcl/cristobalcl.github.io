---
title: "Datacker"
description: "Convert your notebooks to runnable Docker images. The quickest way to bring Data Scientists work to production."
date: "Jan 22 2021"
repoURL: "https://github.com/cristobalcl/datacker"
---

Datacker creates Docker images from one or more Jupyter Notebooks.

You also can add a requirements.txt with the code dependencies.

The result Docker image can execute the notebook by itself, and store the new notebook in a directory that can be bind mounted to a directory in the host machine for persisting (in next versions, the result can be stored in the cloud, in S3 for example).

Parameters can be passed to the notebook dynamically.
