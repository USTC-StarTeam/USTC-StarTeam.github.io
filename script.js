const repositories = [
  { name: "DR4SR", description: "🔥🔥🔥 KDD2024 Best Student Paper", language: "Python", stars: 73, forks: 6, topics: ["data-centric","recommender-system","sequential-recommendation"], url: "https://github.com/USTC-StarTeam/DR4SR", updated: "2026-05-11" },
  { name: "RSIR", description: "Research code, resource, or lab material from USTC-StarTeam.", language: "Python", stars: 0, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/RSIR", updated: "2026-05-09" },
  { name: "Taesar", description: "Research code, resource, or lab material from USTC-StarTeam.", language: "Python", stars: 1, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/Taesar", updated: "2026-05-03" },
  { name: "Dimensional-Collapse-Analysis", description: "SIGIR'26 short | Understanding DNNs in Feature Interaction Models: A Dimensional Collapse Perspective", language: "Python", stars: 2, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/Dimensional-Collapse-Analysis", updated: "2026-05-01" },
  { name: "FuXi-alpha", description: "WWW2025 | FuXi-𝛼: Scaling Recommendation Model with Feature Interaction Enhanced Transformer", language: "Python", stars: 24, forks: 5, topics: [], url: "https://github.com/USTC-StarTeam/FuXi-alpha", updated: "2026-04-29" },
  { name: "CapCal", description: "ACL 2026 | Learning from Emptiness: De-biasing Listwise Rerankers with Content-Agnostic Probability Calibration.", language: "Resource", stars: 1, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/CapCal", updated: "2026-04-28" },
  { name: "GE4Rec", description: "ICML2025 | From Feature Interaction to Feature Generation: A Generative Paradigm of CTR Prediction Models", language: "Python", stars: 37, forks: 6, topics: ["ctr","feature-interactions","recommendation-system","representation-learning","scaling"], url: "https://github.com/USTC-StarTeam/GE4Rec", updated: "2026-04-23" },
  { name: "Awesome-Large-Recommendation-Models", description: "🔥🔥🔥 Latest Advances on Large Recommendation Models", language: "Resource", stars: 121, forks: 0, topics: ["awesome","behavior-modeling","benchmark","cross-domain-recommendation","data-mining","data-science","large-language-models","llm-recommendation","recommendation","recommendation-datasets","recommendation-system","scaling-laws","sequential-recomme","survey","user-behaviour"], url: "https://github.com/USTC-StarTeam/Awesome-Large-Recommendation-Models", updated: "2026-04-21" },
  { name: "adaptive-listwise-ranking-rag", description: "Code for the paper \"Rethinking the Necessity of Adaptive Retrieval-Augmented Generation through the Lens of Adaptive Listwise Ranking\".", language: "Python", stars: 1, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/adaptive-listwise-ranking-rag", updated: "2026-04-20" },
  { name: "SPARD", description: "Research code, resource, or lab material from USTC-StarTeam.", language: "Python", stars: 0, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/SPARD", updated: "2026-04-19" },
  { name: "StarTeam_Onboarding_Guide", description: "Research code, resource, or lab material from USTC-StarTeam.", language: "Resource", stars: 0, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/StarTeam_Onboarding_Guide", updated: "2026-04-17" },
  { name: "ChemEval", description: "Research code, resource, or lab material from USTC-StarTeam.", language: "Python", stars: 33, forks: 1, topics: [], url: "https://github.com/USTC-StarTeam/ChemEval", updated: "2026-04-16" },
  { name: "End4Rec", description: "WWW2024 | END4Rec: Efficient Noise-Decoupling for Multi-Behavior Sequential Recommendation", language: "Python", stars: 9, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/End4Rec", updated: "2026-04-14" },
  { name: "PCRec", description: "Research code, resource, or lab material from USTC-StarTeam.", language: "Python", stars: 5, forks: 1, topics: [], url: "https://github.com/USTC-StarTeam/PCRec", updated: "2026-04-05" },
  { name: "MIRRN", description: "KDD2025 | Multi-granularity Interest Retrieval and Refinement Network for Long-Term User Behavior Modeling in CTR Prediction", language: "Python", stars: 18, forks: 2, topics: [], url: "https://github.com/USTC-StarTeam/MIRRN", updated: "2026-03-30" },
  { name: "ZIP", description: "Research code, resource, or lab material from USTC-StarTeam.", language: "Python", stars: 28, forks: 2, topics: [], url: "https://github.com/USTC-StarTeam/ZIP", updated: "2026-03-28" },
  { name: "easy-init", description: "Research code, resource, or lab material from USTC-StarTeam.", language: "Shell", stars: 1, forks: 1, topics: [], url: "https://github.com/USTC-StarTeam/easy-init", updated: "2026-03-20" },
  { name: "RAG-IGBench", description: "Research code, resource, or lab material from USTC-StarTeam.", language: "Python", stars: 4, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/RAG-IGBench", updated: "2026-03-10" },
  { name: "GenrecOS", description: "An all-in-one framework to train/fine-tune Generative Recommendation Module. Under developing...", language: "Python", stars: 2, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/GenrecOS", updated: "2026-03-06" },
  { name: "fuxi-linear", description: "FuXi-Linear: Unleashing the Power of Linear Attention in Long-term Time-aware Sequential Recommendation", language: "Python", stars: 2, forks: 1, topics: [], url: "https://github.com/USTC-StarTeam/fuxi-linear", updated: "2026-03-04" },
  { name: "SelfAug", description: "EMNLP 2025 Findings | SelfAug: Mitigating Catastrophic Forgetting in Retrieval-Augmented Generation via Distribution Self-Alignment", language: "Python", stars: 6, forks: 2, topics: [], url: "https://github.com/USTC-StarTeam/SelfAug", updated: "2026-02-11" },
  { name: "ChemEval2", description: "Research code, resource, or lab material from USTC-StarTeam.", language: "Python", stars: 0, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/ChemEval2", updated: "2026-02-07" },
  { name: "Survey-of-ULBM", description: "This repository contains the related research and implementations discussed in the paper \"A Survey of User Lifelong Behavior Modeling: Perspectives on Efficiency and Effectiveness\". ", language: "Resource", stars: 0, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/Survey-of-ULBM", updated: "2026-01-30" },
  { name: "MF-GSLAE", description: "TOIS2024 | MF-GSLAE: A Multi-Factor User Representation Pre-training Framework for Dual-Target Cross-Domain Recommendation", language: "Python", stars: 1, forks: 1, topics: [], url: "https://github.com/USTC-StarTeam/MF-GSLAE", updated: "2026-01-29" },
  { name: "TAIRA", description: "KDD 2026 | TAIRA: Thought-Augmented Planning for LLM-Powered Interactive Recommender Agent", language: "Resource", stars: 0, forks: 0, topics: ["planning","recommendation","recommendation-agent","recommender-system"], url: "https://github.com/USTC-StarTeam/TAIRA", updated: "2025-12-26" },
  { name: "MIT", description: "WWW2025 | MIT: A Multi-Tower Information Transfer Framework Based on Hierarchical Task Relationship Modeling", language: "Resource", stars: 1, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/MIT", updated: "2025-12-24" },
  { name: "RaPID", description: "ACL2025 | RaPID: Efficient Retrieval-Augmented Long Text Generation with Writing Planning and Information Discovery", language: "Python", stars: 4, forks: 0, topics: ["llm","rag"], url: "https://github.com/USTC-StarTeam/RaPID", updated: "2025-12-20" },
  { name: "TD3", description: "WWW2025 | TD3: Tucker Decomposition Based Dataset Distillation Method for Sequential Recommendation", language: "Python", stars: 4, forks: 1, topics: [], url: "https://github.com/USTC-StarTeam/TD3", updated: "2025-12-18" },
  { name: "DLF", description: "SIGIR2025 | DLF: Enhancing Explicit-Implicit Interaction via Dynamic Low-Order-Aware Fusion for CTR Prediction", language: "Python", stars: 4, forks: 0, topics: ["ctr","recommendation-system"], url: "https://github.com/USTC-StarTeam/DLF", updated: "2025-12-11" },
  { name: "GenKI", description: "Research code, resource, or lab material from USTC-StarTeam.", language: "Python", stars: 2, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/GenKI", updated: "2025-11-23" },
  { name: "ASEE", description: "EMNLP2025 Findings | Adaptive Schema-aware Event Extraction with Retrieval-Augmented Generation", language: "Python", stars: 3, forks: 0, topics: ["information-extraction","rag","schema"], url: "https://github.com/USTC-StarTeam/ASEE", updated: "2025-11-19" },
  { name: "FuXi-beta", description: "Research code, resource, or lab material from USTC-StarTeam.", language: "Python", stars: 11, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/FuXi-beta", updated: "2025-11-17" },
  { name: "easy-admin", description: "Research code, resource, or lab material from USTC-StarTeam.", language: "Shell", stars: 1, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/easy-admin", updated: "2025-11-11" },
  { name: "MEC", description: "DASFAA2025 | MEC: A Model-Agnostic Embedding Compression Framework For CTR Prediction", language: "Python", stars: 5, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/MEC", updated: "2025-10-27" },
  { name: "P-Law", description: "Research code, resource, or lab material from USTC-StarTeam.", language: "Python", stars: 0, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/P-Law", updated: "2025-10-24" },
  { name: "Performance-Law", description: "Research code, resource, or lab material from USTC-StarTeam.", language: "Python", stars: 0, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/Performance-Law", updated: "2025-10-20" },
  { name: "APGL4SR", description: "CIKM2023 | APGL4SR: A Generic Framework with Adaptive and Personalized Global Collaborative Information in Sequential Recommendation", language: "Python", stars: 11, forks: 1, topics: [], url: "https://github.com/USTC-StarTeam/APGL4SR", updated: "2025-08-16" },
  { name: "Graph-Team.github.io", description: "Github Pages template for academic personal websites, forked from mmistakes/minimal-mistakes", language: "Resource", stars: 0, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/Graph-Team.github.io", updated: "2025-08-06" },
  { name: "URLLM", description: "Research code, resource, or lab material from USTC-StarTeam.", language: "Python", stars: 1, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/URLLM", updated: "2025-05-23" },
  { name: ".github", description: "Research code, resource, or lab material from USTC-StarTeam.", language: "Resource", stars: 0, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/.github", updated: "2025-03-01" },
  { name: "2024-learning-schedule", description: "假期学习任务", language: "Resource", stars: 2, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/2024-learning-schedule", updated: "2024-12-05" },
  { name: "basic_konwledge_learning_schedule", description: "Learning schedule for introductory related basic knowledge of machine learning.", language: "Resource", stars: 0, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/basic_konwledge_learning_schedule", updated: "2024-08-01" },
  { name: "llm-meeting", description: "Research code, resource, or lab material from USTC-StarTeam.", language: "Resource", stars: 0, forks: 0, topics: [], url: "https://github.com/USTC-StarTeam/llm-meeting", updated: "2023-11-09" }
];

const publications = [
  { title: "Tingjia Shen, Hao Wang * , Chuhan Wu, Jin Yao Chin, Wei Guo, Yong Liu, Huifeng Guo, Defu Lian, Ruiming Tang, Enhong Chen. P-Law: Predicting Quantitative Scaling Law with Entropy Guidance in Large Recommendation Models. ( NeurIPS2025 ) . 【CCF-A类】", venue: "NeurIPS2025", year: 2025, level: "CCF-A类" },
  { title: "Rongyang Zhang, Yuqing Huang, Chengqiang Lu, Qimeng Wang, Yan Gao, Yi Wu, Yao Hu, Yin Xu, Wei Wang, Hao Wang* , Enhong Chen*. RAG-IGBench: Innovative Evaluation for RAG-based Interleaved Generation in Open-domain Question Answering. Advances in Neural Information Processing Systems 38 ( NeurIPS2025 ) . 【CCF-A类】", venue: "NeurIPS2025", year: 2025, level: "CCF-A类" },
  { title: "Mingjia Yin, Junwei Pan, Hao Wang * , Ximei Wang, Shangyu Zhang, Jie Jiang, Defu Lian, Enhong Chen. From Feature Interaction to Feature Generation: A Generative Paradigm of CTR Prediction Models. Forty-second International Conference on Machine Learning ( ICML2025 ). 【CCF-A类】", venue: "ICML2025", year: 2025, level: "CCF-A类" },
  { title: "Wenjia Xie, Hao Wang * , Minghao Fang, ruize yu, Wei Guo, Yong Liu, Defu Lian, Enhong Chen. Breaking the Bottleneck: User-Specific Optimization and Real-Time Inference Integration for Sequential Recommendation. The 31th ACM SIGKDD Conference on Knowledge Discovery & Data Mining ( KDD2025 ). 【CCF-A类】", venue: "KDD2025", year: 2025, level: "CCF-A类" },
  { title: "Xiang Xu, Hao Wang * , Wei Guo, Luankang Zhang, Wanshan Yang, Runlong Yu, Yong Liu, Defu Lian, Enhong Chen*. Multi-granularity Interest Retrieval and Refinement Network for Long-Term User Behavior Modeling in CTR Prediction ( KDD2025 ) . 【CCF-A类】", venue: "KDD2025", year: 2025, level: "CCF-A类" },
  { title: "Weibo Gao, Qi Liu*, Rui Li, Yuze Zhao, Hao Wang , Linan Yre, Fangzhou Yao, Zheng Zhang. Denoising Programming Knowledge Tracing with a Code Graph-based Tuning Adaptor ( KDD2025 ) . 【CCF-A类】", venue: "KDD2025", year: 2025, level: "CCF-A类" },
  { title: "Kefan Wang, Hao Wang * , Wei Guo, Jianghao Lin, Defu Lian, and Enhong Chen. DLF: Enhancing Explicit-Implicit Interaction via Dynamic Low-Order-Aware Fusion for CTR Prediction ( SIGIR2025 ). 【CCF-A类】", venue: "SIGIR2025", year: 2025, level: "CCF-A类" },
  { title: "Luankang Zhang, Kenan Song, Yi Quan Lee, Wei Guo, Hao Wang * , Yawen Li, Huifeng Guo, Yong Liu, Defu Lian, Enhong Chen. Killing two birds with one stone: Unifying retrieval and ranking with a single generative recommendation model. Proceedings of the 48th International ACM SIGIR Conference on Research and Development in Information Retrieval ( SIGIR2025 ) . 【CCF-A类】", venue: "SIGIR2025", year: 2025, level: "CCF-A类" },
  { title: "Hongchao Gu, Dexun Li, Kuicai Dong, Hao Zhang, Hang Lv, Hao Wang * , Defu Lian, Yong Liu, Enhong Chen, Rapid: Efficient retrieval-augmented long text generation with writing planning and information discovery. The 63rd Annual Meeting of the Association for Computational Linguistics ( ACL2025 ). 【CCF-A类】", venue: "ACL2025", year: 2025, level: "CCF-A类" },
  { title: "Jiaqing Zhang, Mingjia Yin, Hao Wang * , Yawen Li, Yuyang Ye, Xingyu Lou, Junping Du, Enhong Chen*. TD3: Tucker Decomposition Based Dataset Distillation Method for Sequential Recommendation ( WWW2025 ). 【CCF-A类】", venue: "WWW2025", year: 2025, level: "CCF-A类" },
  { title: "Yufei Ye#, Wei Guo#, Jin Yao Chin, Hao Wang * , Hong Zhu, Xi Lin, Yuyang Ye, Yong Liu, Ruiming Tang*, Defu Lian*, Enhong Chen*. FuXi-alpha: Scaling Recommendation Model with Feature Interaction Enhanced Transformer ( WWW2025 ) . 【CCF-A类】", venue: "WWW2025", year: 2025, level: "CCF-A类" },
  { title: "Rui Zhou, Hao Wang * , Wei Guo, Qinglin Jia, Wenjia Xie, Xiang Xu, Yong Liu, Defu Lian, Enhong Chen. MIT: A Multi-Tower Information Transfer Framework Based on Hierarchical Task Relationship Modeling ( WWW2025 ) . 【CCF-A类】", venue: "WWW2025", year: 2025, level: "CCF-A类" },
  { title: "Hao Wang * , Wei Guo, Luankang Zhang, Jin Yao Chin, Yufei Ye, Huifeng Guo, Yong Liu, Defu Lian, Ruiming Tang, Enhong Chen. Generative Large Recommendation Models: Emerging Trends in LLMs for Recommendation ( WWW2025 ) .【CCF-A类】", venue: "WWW2025", year: 2025, level: "CCF-A类" },
  { title: "Kefan Wang, Hao Wang * , Kenan Song, Wei Guo, Kai Cheng, Zhi Li, Yong Liu, Defu Lian, Enhong Chen*. A Universal Framework for Compressing Embeddings in CTR Prediction ( DASFAA2025 ). 【CCF-B类】", venue: "DASFAA2025", year: 2025, level: "CCF-B类" },
  { title: "Mingjia Yin, Hao Wang * , Wei Guo, Yong Liu, Suojuan Zhang, Sirui Zhao, Defu Lian, Enhong Chen. Dataset Regeneration for Sequential Recommendation ( KDD 2024 ). KDD 2024 Best Student Paper Award 【CCF-A类】", venue: "KDD 2024", year: 2024, level: "Best Paper" },
  { title: "Wenjia Xie, Hao Wang * , Luankang Zhang, Rui Zhou, Defu Lian, Enhong Chen. Breaking Determinism: Fuzzy Modeling of Sequential Recommendation Using Discrete State Space Diffusion Model ( NeurIPS2024 ). 【CCF-A类】", venue: "NeurIPS2024", year: 2024, level: "CCF-A类" },
  { title: "Weibo Gao, Qi Liu*, Linan Yue, Fangzhou Yao, Hao Wang , Yin Gu, Zheng Zhang. Collaborative cognitive diagnosis with disentangled representation learning for learner modeling ( NeurIPS2024 ) . 【CCF-A类】", venue: "NeurIPS2024", year: 2024, level: "CCF-A类" },
  { title: "Yongqiang Han, Hao Wang * , Kefan Wang, Likang Wu, Zhi Li, Wei Guo, Yong Liu, Defu Lian, Enhong Chen. Efficient noise-decoupling for multi-behavior sequential recommendation ( WWW2024 ). 【CCF-A类】", venue: "WWW2024", year: 2024, level: "CCF-A类" },
  { title: "Likang Wu, Zhi Zheng, Zhaopeng Qiu, Hao Wang * , Hongchao Gu, Tingjia Shen, Chuan Qin, Chen Zhu, Hengshu Zhu*, Qi Liu, Hui Xiong*, Enhong Chen. A Survey on Large Language Models for Recommendation ( WWWJ2024 ). 【CCF-B类】", venue: "WWWJ2024", year: 2024, level: "CCF-B类" },
  { title: "Ye Liu, Han Wu, Zhenya Huang, Hao Wang , Yuting Ning, Jianhui Ma, Qi Liu, Enhong Chen*. TechPat: Technical Phrase Extraction for Patent Mining ( TKDD2023 ). 【CCF-B类】", venue: "TKDD2023", year: 2023, level: "CCF-B类" },
  { title: "Weihao Zhao, Han Wu, Weidong He, Haoyang Bi, Hao Wang , Chen Zhu, Tong Xu, Enhong Chen. Hierarchical Multi-modal Attention Network for Time-sync Comment Video Recommendation ( TCSVT2023 ). 【CCF-B类】", venue: "TCSVT2023", year: 2023, level: "CCF-B类" },
  { title: "Han Wu, Guanqi Zhu, Qi Liu, Hengshu Zhu, Hao Wang , Hongke Zhao, Chuanren Liu, Enhong Chen, Hui Xiong. A Multi-Aspect Neural Tensor Factorization Framework for Patent Litigation Prediction ( TBD2023 ). 【Trans类】", venue: "TBD2023", year: 2023, level: "Trans类" },
  { title: "Likang Wu, Junji Jiang, Hongke Zhao, Hao Wang * , Defu Lian, Mengdi Zhang, Enhong Chen. KMF: Knowledge-Aware Multi-Faceted Representation Learning for Zero-Shot Node Classification ( IJCAI2023 ). 【CCF-A类】", venue: "IJCAI2023", year: 2023, level: "CCF-A类" },
  { title: "Mingjia Yin, Hao Wang * , Xiang Xu, Likang Wu, Sirui Zhao, Wei Guo, Yong Liu, Ruiming Tang, Defu Lian, Enhong Chen. APGL4SR: A Generic Framework with Adaptive and Personalized Global Collaborative Information in Sequential Recommendation ( CIKM2023 ). 【CCF-B类】", venue: "CIKM2023", year: 2023, level: "CCF-B类" },
  { title: "Weibo Gao, Hao Wang , Qi Liu*, Fei Wang, Xin Lin, Linan Yue, Zheng Zhang, Rui Lv, Shijin Wang. Leveraging Transferable Knowledge Concept Graph Embedding for Cold-Start Cognitive Diagnosis ( SIGIR2023 ). 【CCF-A类】", venue: "SIGIR2023", year: 2023, level: "CCF-A类" },
  { title: "Zepu Lu, Defu Lian, Jin Zhang, Zaixi Zhang, Chao Feng, Hao Wang , Enhong Chen. Differentiable Optimized Product Quantization and Beyond ( WWW2023 ). 【CCF-A类】", venue: "WWW2023", year: 2023, level: "CCF-A类" },
  { title: "Yongqiang Han, Likang Wu, Hao Wang * , Guifeng Wang, Mengdi Zhang, Zhi Li, Defu Lian, Enhong Chen. GUESR: A Global Unsupervised Data-Enhancement with Bucket-Cluster Sampling for Sequential Recommendation ( DASFAA2023 ). 【CCF-B类】", venue: "DASFAA2023", year: 2023, level: "CCF-B类" },
  { title: "Liyang He, Zhenya Huang*, Enhong Chen, Qi Liu, Shiwei Tong, Hao Wang , Defu Lian, Shijin Wang. An Efficient and Robust Semantic Hashing Framework for Similar Text Search ( TOIS2023 ). 【CCF-A类】", venue: "TOIS2023", year: 2023, level: "CCF-A类" },
  { title: "Hang Zhang, Hao Wang * , Guifeng Wang, Jiayu Liu, Qi Liu. A Hyperbolic-to-Hyperbolic User Representation with Multi-aspect for Social Recommendation ( CIKM2022 ). 【CCF-B类】", venue: "CIKM2022", year: 2022, level: "CCF-B类" },
  { title: "Zaixi Zhang, Qi Liu, Zhenya Huang, Hao Wang , Chee-Kong Lee, Enhong Chen. Model inversion attacks against graph neural networks. TKDE 2022 : Accepted.", venue: "TKDE 2022", year: 2022, level: "Publication" },
  { title: "Qi Liu, Jinze Wu, Zhenya Huang, Hao Wang , Yuting Ning, Ming Chen, Enhong Chen, Jinfeng Yi, Bowen Zhou. Federated User Modeling from Hierarchical Information. TOIS 2022 : Accepted.", venue: "TOIS 2022", year: 2022, level: "Publication" },
  { title: "Wei Cao, Kun Zhang, Shulan Ruan, Hanqing Tao, Sirui Zhao, Hao Wang , Qi Liu, Enhong Chen. MCausal Narrative Comprehension: A New Perspective for Emotion Cause Extraction. TAFFC 2022 : 1743-1758.", venue: "TAFFC 2022", year: 2022, level: "Publication" },
  { title: "Sirui Zhao, Huaying Tang, Shifeng Liu, Yangsong Zhang, Hao Wang , Tong Xu, Enhong Chen, Cuntai Guan. ME-PLAN: A deep prototypical learning with local attention network for dynamic micro-expression recognition. NN 2022 : 427-443.", venue: "NN 2022", year: 2022, level: "Publication" },
  { title: "Yuren Zhang, Enhong Chen*, Binbin Jin, Hao Wang , Min Hou, Wei Huang, Runlong Yu. Clustering based behavior sampling with long sequential data for CTR prediction. SIGIR 2022 : 2195-2200", venue: "SIGIR 2022", year: 2022, level: "Publication" },
  { title: "Likang Wu, Hao Wang* , Enhong Chen, Zhi Li, Hongke Zhao, Jianhui Ma. Preference Enhanced Social Influence Modeling for Network-Aware Cascade Prediction. SIGIR 2022 : 2704-2708.", venue: "SIGIR 2022", year: 2022, level: "Publication" },
  { title: "Zaixi Zhang, Qi Liu, Hao Wang , Chengqiang Lu, Chee-Kong Lee. Protgnn: Towards self-explaining graph neural networks. AAAI 2022 : 9127-9135.", venue: "AAAI 2022", year: 2022, level: "Publication" },
  { title: "Shiwei Wu, Weidong He, Tong Xu, Hao Wang , Enhong Chen. Winning the CVPR’2022 AQTC Challenge: A Two-stage Function-centric Approach. CVPR AQTC Challenge 2022", venue: "CVPR AQTC Challenge 2022", year: 2022, level: "Publication" },
  { title: "Zaixi Zhang, Qi Liu, Zhenya Huang, Hao Wang , Chengqiang Lu, Chee-Kong Lee. Motif-based graph self-supervised learning for molecular property prediction. NeurIPS 2021 : None.", venue: "NeurIPS 2021", year: 2021, level: "Publication" },
  { title: "Zhenya Huang, Xin Lin, Hao Wang , Qi Liu, Enhong Chen, Jianhui Ma, Yu Su, Wei Tong. Disenqnet: Disentangled representation learning for educational questions. KDD 2021 : 696-704.", venue: "KDD 2021", year: 2021, level: "Publication" },
  { title: "Hao Wang , Defu Lian, Hanghang Tong, Qi Liu, Zhenya Huang, Enhong Chen. Decoupled Representation Learning for Attributed Networks. TKDE 2021 : Accepted.", venue: "TKDE 2021", year: 2021, level: "Publication" },
  { title: "Hao Wang , Defu Lian, Hanghang Tong, Qi Liu, Zhenya Huang, Enhong Chen*. HyperSoRec: Exploiting Hyperbolic User and Item Representations with Multiple Aspects for Social-aware Recommendation. TOIS 2021 : Vol. 1, No. 1, Article 1.", venue: "TOIS 2021", year: 2021, level: "Publication" },
  { title: "Gangwei Jiang, Hao Wang , Jin Chen, Haoyu Wang, Defu Lian*, Enhong Chen. xLightFM: Extremely Memory-Efficient Factorization Machine. SIGIR 2021 : Accepted.", venue: "SIGIR 2021", year: 2021, level: "Publication" },
  { title: "Jinze Wu, Qi Liu, Zhenya Huang, Yuting Ning, Hao Wang , Enhong Chen, Jinfeng Yi, Bowen Zhou. Hierarchical Personalized Federated Learning for User Modeling. WWW 2021 : Accepted.", venue: "WWW 2021", year: 2021, level: "Publication" },
  { title: "Zaixi Zhang, Qi Liu, Zhenya Huang, Hao Wang , Chengqiang Lu, Chuanren Liu, Enhong Chen. GraphMI: Extracting Private Graph Data from Graph Neural Networks. IJCAI 2021 : 3749-3755.", venue: "IJCAI 2021", year: 2021, level: "Publication" },
  { title: "Xin Lin, Zhenya Huang, Hongke Zhao, Enhong Chen, Qi Liu, Hao Wang , Shijin Wang. HMS: A Hierarchical Solver with Dependency-Enhanced Understanding for Math Word Problem. AAAI 2021 : Accepted.", venue: "AAAI 2021", year: 2021, level: "Publication" },
  { title: "Jinze Wu, Zhenya Huang, Qi Liu, Defu Lian, Hao Wang , Enhong Chen, Haiping Ma, Shijin Wang. Federated Deep Knowledge Tracing. WSDM 2021 : Accepted.", venue: "WSDM 2021", year: 2021, level: "Publication" },
  { title: "Zhongkai Hao, Chengqiang Lu, Zhenya Huang, Hao Wang , Zheyuan Hu, Qi Liu, Enhong Chen, Chee-Kong Lee. ASGN: An Active Semi-supervised Graph Neural Network for Molecular Property Prediction. KDD 2020 : 731-739.", venue: "KDD 2020", year: 2020, level: "Publication" },
  { title: "Zhenya Huang, Qi Liu, Weibo Gao, Jinze Wu, Yu Yin, Hao Wang , Enhong Chen. Neural Mathematical Solver with Enhanced Formula Structure. SIGIR 2020 : 1729-1732.", venue: "SIGIR 2020", year: 2020, level: "Publication" },
  { title: "Yanmin Chen, Hao Wang , Jianhui Ma, Dongfang Du, Hongke Zhao. A Hierarchical Attention Mechanism Framework for Internet Credit Evaluation. Journal of Computer Research and Development 2020 : 57(8): 1755-1768.", venue: "Journal of Computer Research and Development 2020", year: 2020, level: "Publication" },
  { title: "Ye Liu, Han Wu, Zhenya Huang, Hao Wang , Jianhui Ma, Qi Liu, Enhong Chen, Hanqing Tao, Ke Rui. Technical Phrase Extraction for Patent Mining: A Multi-level Approach. ICDM 2020 : 1142-1147.", venue: "ICDM 2020", year: 2020, level: "Publication" },
  { title: "Binglei Wang, Tong Xu, Hao Wang , Yanmin Chen, Le Zhang, Lintao Fang, Guiquan Liu, Enhong Chen. Author Contributed Representation for Scholarly Network. APWeb-WAIM 2020 : 558-573.", venue: "APWeb-WAIM 2020", year: 2020, level: "Publication" },
  { title: "Hao Wang , Tong Xu, Qi Liu, Defu Lian, Enhong Chen, Dongfang Du, Han Wu, Wen Su. MCNE: An End-to-End Framework for Learning Multiple Conditional Network Representations of Social Network. KDD 2019 : 1064-1072.", venue: "KDD 2019", year: 2019, level: "Publication" },
  { title: "Hao Wang , Enhong Chen*, Qi Liu, Tong Xu, Dongfang Du, Wen Su, Xiaopeng Zhang. A united approach to learning sparse attributed network embedding. ICDM 2018 : Accepted.", venue: "ICDM 2018", year: 2018, level: "Publication" },
  { title: "Hongjie Lin, Hao Wang , Dongfang Du, Han Wu, Biao Chang, Enhong Chen*. Patent Quality Valuation with Deep Learning Models. DASFAA 2018 : 474-490.", venue: "DASFAA 2018", year: 2018, level: "Publication" },
  { title: "Dongfang Du, Hao Wang , Tong Xu, Yanan Lu, Qi Liu, Enhong Chen. Solving link-oriented tasks in signed network via an embedding approach. SMC 2017 : Accepted.", venue: "SMC 2017", year: 2017, level: "Publication" }
];

const projects = [
  "大模型协同的跨域用户序列行为建模方法及应用；国家自然科学基金-面上项目；2025-2027; 主持",
  "数据产权登记合规性验证与风险管控技术，国家自然科学基金-重点项目，2025-2027，课题负责人",
  "面向网络数据的多语义属性结构表征学习及应用研究；国家自然科学基金-青年科学基金项目；2023-2025； 主持",
  "基于科技文献与实验数据的科学知识推演大模型；省创新攻坚计划；2024-2027， 课题负责人&项目技术总师",
  "跨域复杂用户序列推荐；CCF-腾讯犀牛鸟项目基金；2023-2024， 主持",
  "基于预训练知识点的企业搜索相关性模型研究；阿里创新研究AIR计划；2023-2024， 主持",
  "融合属性网络表征学习方法及其应用；校重要方向培育基金；2022-2023， 主持"
];

const awards = [
  "2025年，王宽诚育才奖, 校教育基金会奖",
  "2025年， HW青年学者计划，HW",
  "2024年，安徽省科学技术进步一等奖（序3/10），安徽省",
  "2024年，自然科学一等奖（序5/5）, 中国电子学会",
  "2024年，省青年科技人才托举计划, 安徽省科学技术协会",
  "2024年，CCF-A类国际会议KDD2024唯一最佳学生论文奖（通讯作者）",
  "2024年，腾讯精英人才计划入选学生导师",
  "2023年，CCF-腾讯犀牛鸟基金入选学者",
  "2023年，第九届中国智能技术与大数据会议优秀论文",
  "2023年，美团最佳合作奖",
  "2022年，中国科学技术大学墨子杰出青年特资津贴",
  "2019年，国家公派联合培养博士研究生-CSC"
];

const courses = [
  "深度学习, 硕士专业选修课程, [2022][2024]",
  "深度学习导论, 本科专业基础课程, [2023][2024]",
  "工程硕士专业英语（电子信息）, 硕士专业基础课程, [2023][2024]"
];

const serviceGroups = [
  { group: "学术期刊", items: ["Entropy Special Issues Guest Editor 编委","IEEE Transactions on Knowledge and Data Engineering 审稿人","IEEE Transactions on Systems, Man and Cybernetics: Systems 审稿人","ACM Transactions on Information Systems 审稿人","ACM Transactions on Intelligent Systems and Technology 审稿人","ACM Transactions on Knowledge Discovery from Data 审稿人","Journal of Computer Science and Technology 审稿人","Frontiers of Computer Science 审稿人","软件学报 审稿人","计算机研究与发展 审稿人"] },
  { group: "学术会议编委", items: ["AAAI Conference on Artificial Intelligence (AAAI)","International World Wide Web Conference (WWW)","International Joint Conference on Artificial Intelligence (IJCAI)","International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR)","ACM International Conference on Information and Knowledge Management (CIKM)","ACM SIGKDD Conference on Knowledge Discovery & Data Mining (KDD)","International Conference on Machine Learning (ICML)"] }
];

const $ = (selector) => document.querySelector(selector);

function normalize(value) {
  return String(value).toLowerCase().trim();
}

function clear(node) {
  node.replaceChildren();
}

function makeBadge(text, className = '') {
  const badge = document.createElement('span');
  badge.className = className ? 'badge ' + className : 'badge';
  badge.textContent = text;
  return badge;
}

function renderPublications() {
  const list = $('#publicationList');
  const query = normalize($('#publicationSearch').value);
  const year = $('#yearFilter').value;
  const filtered = publications.filter((paper) => {
    const matchesQuery = normalize(paper.title + ' ' + paper.venue + ' ' + paper.level).includes(query);
    const matchesYear = year === 'all' || String(paper.year) === year;
    return matchesQuery && matchesYear;
  });

  clear(list);
  filtered.forEach((paper, index) => {
    const article = document.createElement('article');
    article.className = 'publication-card';

    const meta = document.createElement('div');
    meta.className = 'publication-meta';
    meta.append(makeBadge(paper.venue), makeBadge(paper.level, paper.level.includes('A') || paper.level === 'Best Paper' ? 'strong' : 'soft'));

    const title = document.createElement('p');
    title.className = 'publication-title';
    title.textContent = paper.title;

    const number = document.createElement('span');
    number.className = 'publication-number';
    number.textContent = String(index + 1).padStart(2, '0');

    article.append(number, meta, title);
    list.append(article);
  });
}

function renderRepositories() {
  const list = $('#repoList');
  const query = normalize($('#repoSearch').value);
  const language = $('#languageFilter').value;
  const filtered = repositories.filter((repo) => {
    const haystack = normalize([repo.name, repo.description, repo.language, repo.topics.join(' ')].join(' '));
    const matchesQuery = haystack.includes(query);
    const matchesLanguage = language === 'all' || repo.language === language;
    return matchesQuery && matchesLanguage;
  });

  clear(list);
  filtered.forEach((repo) => {
    const article = document.createElement('article');
    article.className = 'repo-card';

    const title = document.createElement('a');
    title.href = repo.url;
    title.target = '_blank';
    title.rel = 'noreferrer';
    title.textContent = repo.name;

    const description = document.createElement('p');
    description.textContent = repo.description;

    const meta = document.createElement('div');
    meta.className = 'repo-meta';
    meta.append(makeBadge(repo.language), makeBadge('stars ' + repo.stars), makeBadge('forks ' + repo.forks));

    const topics = document.createElement('div');
    topics.className = 'topic-row';
    repo.topics.slice(0, 4).forEach((topic) => topics.append(makeBadge(topic, 'soft')));

    article.append(title, description, meta, topics);
    list.append(article);
  });
}

function renderSimpleList(containerId, items) {
  const list = $(containerId);
  clear(list);
  items.forEach((item) => {
    const article = document.createElement('article');
    article.className = 'timeline-item';
    const text = document.createElement('p');
    text.textContent = item;
    article.append(text);
    list.append(article);
  });
}

function renderCourses() {
  const list = $('#courseList');
  clear(list);
  courses.forEach((course) => {
    const item = document.createElement('li');
    item.textContent = course;
    list.append(item);
  });
}

function renderService() {
  const list = $('#serviceList');
  clear(list);
  serviceGroups.forEach((group) => {
    const heading = document.createElement('li');
    heading.className = 'service-group';
    heading.textContent = group.group;
    list.append(heading);
    group.items.forEach((entry) => {
      const item = document.createElement('li');
      item.textContent = entry;
      list.append(item);
    });
  });
}

function populateFilters() {
  const yearFilter = $('#yearFilter');
  [...new Set(publications.map((paper) => paper.year).filter(Boolean))]
    .sort((a, b) => b - a)
    .forEach((year) => {
      const option = document.createElement('option');
      option.value = String(year);
      option.textContent = String(year);
      yearFilter.append(option);
    });

  const languageFilter = $('#languageFilter');
  [...new Set(repositories.map((repo) => repo.language))]
    .sort((a, b) => a.localeCompare(b))
    .forEach((language) => {
      const option = document.createElement('option');
      option.value = language;
      option.textContent = language;
      languageFilter.append(option);
    });
}

function setupNavigation() {
  const button = $('[data-nav-toggle]');
  const nav = $('[data-nav]');
  button.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      nav.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
    }
  });
}

function setupActiveSections() {
  const links = [...document.querySelectorAll('.site-nav a')];
  const sections = links.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id));
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach((section) => observer.observe(section));
}

function setupEvents() {
  $('#publicationSearch').addEventListener('input', renderPublications);
  $('#yearFilter').addEventListener('change', renderPublications);
  $('#repoSearch').addEventListener('input', renderRepositories);
  $('#languageFilter').addEventListener('change', renderRepositories);
}

function init() {
  populateFilters();
  renderPublications();
  renderRepositories();
  renderSimpleList('#projectList', projects);
  renderSimpleList('#awardList', awards);
  renderCourses();
  renderService();
  setupNavigation();
  setupActiveSections();
  setupEvents();
}

document.addEventListener('DOMContentLoaded', init);
