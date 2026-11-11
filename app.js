'use strict';
const SEED = {
  "units": [
    {
      "id": "hypertension",
      "title": "高血壓",
      "en": "Hypertension",
      "emoji": "🫀",
      "tagline": "從血壓量測到急症處置",
      "accent": "peach",
      "intro": "先辨認是否真正高血壓，再依心血管風險與器官損傷決定治療。",
      "refs": [
        {
          "label": "2025 AHA/ACC 高血壓指引",
          "url": "https://professional.heart.org/en/science-news/2025-high-blood-pressure-guideline/top-things-to-know"
        },
        {
          "label": "2022 台灣高血壓指引",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9121756/"
        },
        {
          "label": "KDIGO 2024 CKD 指引",
          "url": "https://kdigo.org/wp-content/uploads/2017/02/KDIGO-2024-CKD-Guideline-Executive-Summary.pdf"
        }
      ],
      "sections": [
        {
          "title": "診斷與分類 Diagnosis",
          "key": "診斷",
          "lines": [
            "2025 AHA/ACC：正常 <120/80；偏高 120–129/<80；Stage 1 為 130–139 或 80–89；Stage 2 為 ≥140 或 ≥90 mmHg。",
            "診斷不只看一次門診數值；使用正確袖帶、休息、重複測量，並以居家血壓 HBPM 或 24 小時動態血壓 ABPM 協助確認。",
            "白袍高血壓（White-coat HTN）：診間升高、院外正常；隱匿性高血壓（Masked HTN）：診間正常、院外升高。"
          ]
        },
        {
          "title": "居家 722 量測 Home BP",
          "key": "評估",
          "lines": [
            "台灣 722：連續 7 日、早晚各 2 次時段、每次量至少 2 遍，並計算依指引規範的平均值。",
            "一般治療目標常用 <130/80 mmHg，但應依耐受性、妊娠與特殊疾病個別調整。"
          ]
        },
        {
          "title": "治療原則 Treatment",
          "key": "治療",
          "lines": [
            "生活介入：減鈉、DASH 飲食、規律運動、體重管理、避免大量飲酒。",
            "常用起始藥物：ACEi/ARB、DHP-CCB、Thiazide/Thiazide-like diuretic；Stage 2 常需兩藥合併。",
            "2025 美國指引：平均 BP ≥140/90 一般建議用藥；某些高風險 ≥130/80 亦應治療；低風險持續升高者可先進行 3–6 個月生活介入。"
          ]
        },
        {
          "title": "合併症選藥 Comorbidity",
          "key": "用藥",
          "lines": [
            "CKD 合併 Albuminuria：ACEi 或 ARB 常有腎保護效益；開始或調整後追蹤血鉀與 Creatinine。",
            "HFrEF：需遵循心衰竭專屬藥物組合，不以一般降壓選藥取代 guideline-directed medical therapy。",
            "ACEi + ARB 不應併用；懷孕應避免 ACEi/ARB。"
          ]
        },
        {
          "title": "次發性高血壓 Secondary HTN",
          "key": "鑑別",
          "lines": [
            "頑固型／抗藥性 HTN、年輕發病、突然惡化時應評估次發性原因。",
            "低血鉀提示 Primary aldosteronism；陣發頭痛、心悸、冒汗提示 Pheochromocytoma；打鼾及日間嗜睡提示 OSA。",
            "Renal artery stenosis 可見腎功能變化、血管雜音或 ACEi/ARB 後 Creatinine 顯著上升。"
          ]
        },
        {
          "title": "高血壓急症 Emergency",
          "key": "急症",
          "lines": [
            "Hypertensive emergency 的判定關鍵：嚴重血壓升高「加上」急性標的器官損傷，不是只看 180/120。",
            "急性肺水腫、腦病變、主動脈剝離、急性腎損傷等需依疾病選擇可滴定的靜脈藥物與降壓策略。",
            "沒有急性器官損傷的嚴重高血壓，通常不需為了快速降到正常而立即使用 IV 降壓。"
          ]
        },
        {
          "title": "易錯整理 Exam traps",
          "key": "陷阱",
          "lines": [
            "區分診斷門檻、何時開始用藥與治療目標；三者並非相同。",
            "低 K⁺ 並非原發性醛固酮增多症的必要條件；利尿劑也可能造成低 K⁺。",
            "Hypertensive emergency 的降壓目標有例外：主動脈剝離、腦中風、妊娠高血壓不可硬套一般算法。"
          ]
        }
      ]
    },
    {
      "id": "dyslipidemia",
      "title": "高血脂",
      "en": "Dyslipidemia",
      "emoji": "🍓",
      "tagline": "LDL、TG 與藥物選擇一次釐清",
      "accent": "mint",
      "intro": "先估算 ASCVD 風險，再決定 LDL-C 目標；極高 TG 需另外顧及胰臟炎。",
      "refs": [
        {
          "label": "2026 AHA/ACC 血脂指引",
          "url": "https://professional.heart.org/en/science-news/2026-guideline-on-the-management-of-dyslipidemia/top-things-to-know"
        },
        {
          "label": "2025 ESC/EAS 血脂更新",
          "url": "https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/All-ESC-Practice-Guidelines/Dyslipidaemias"
        }
      ],
      "sections": [
        {
          "title": "檢驗指標 Lipid profile",
          "key": "診斷",
          "lines": [
            "LDL-C 是降低動脈粥狀硬化心血管風險的重要治療標的；TG、HDL-C、non-HDL-C、ApoB 與 Lp(a) 有不同用途。",
            "傳統 Friedewald：LDL-C = TC − HDL-C − TG/5（mg/dL）；TG ≥400 mg/dL 時不應使用此公式。",
            "ApoB 反映致動脈粥狀硬化脂蛋白顆粒數，TG 高、糖尿病或 LDL-C 已很低時特別有參考價值。"
          ]
        },
        {
          "title": "風險與 LDL-C 目標 Risk",
          "key": "治療",
          "lines": [
            "Secondary prevention：既有 ASCVD，如心肌梗塞、動脈粥狀硬化相關缺血性中風或周邊動脈病變。",
            "2026 ACC/AHA：Very-high-risk ASCVD 的 LDL-C 目標 <55 mg/dL；其他 ASCVD 患者通常至少 <70 mg/dL。",
            "初級預防使用 PREVENT-ASCVD 估算風險，再加上家族史、Lp(a)、CAC 等因素個別化決策。"
          ]
        },
        {
          "title": "Statin 強度與機轉",
          "key": "用藥",
          "lines": [
            "Statin 抑制 HMG-CoA reductase，促進肝臟 LDL receptor 表現與 LDL 清除。",
            "High intensity：Atorvastatin 40–80 mg、Rosuvastatin 20–40 mg（預期 LDL-C 下降 ≥50%）。",
            "Moderate intensity：Atorvastatin 10–20 mg、Rosuvastatin 5–10 mg 等（預期下降 30–49%）。",
            "40–75 歲糖尿病患者，通常至少需中強度 Statin；合併多項 ASCVD 危險因素時常建議高強度。"
          ]
        },
        {
          "title": "非 Statin 用藥 Nonstatins",
          "key": "用藥",
          "lines": [
            "Ezetimibe：抑制小腸 NPC1L1 膽固醇吸收。",
            "PCSK9 monoclonal antibodies（Evolocumab、Alirocumab）：減少 LDL receptor 降解。",
            "Bempedoic acid：抑制 ATP citrate lyase；對部分 Statin 不耐受患者有心血管結局證據。",
            "Bile acid sequestrants：可能提高 TG；TG 已高的患者須小心。"
          ]
        },
        {
          "title": "高三酸甘油酯 TG",
          "key": "急症",
          "lines": [
            "TG 150–499 mg/dL：先處理生活型態、次發性原因及 ASCVD 風險。",
            "TG ≥500 mg/dL：須考慮胰臟炎風險；≥1000 mg/dL 時風險更顯著，需積極降 TG、低脂飲食及控制血糖。",
            "Fenofibrate 為 PPAR-α agonist，可降低 TG；與 Statin 併用時需注意肌肉毒性與腎功能。"
          ]
        },
        {
          "title": "次發原因與遺傳風險",
          "key": "鑑別",
          "lines": [
            "甲狀腺功能低下、Nephrotic syndrome、糖尿病控制不良、酒精與部分藥物皆可能造成血脂異常。",
            "FH：年輕即 LDL-C 明顯升高、tendon xanthoma、早發 ASCVD 家族史，應考慮家族風險。",
            "Lp(a) 主要由遺傳決定，2026 AHA/ACC 建議成人至少測一次；≥125 nmol/L 為 risk-enhancing factor。"
          ]
        },
        {
          "title": "考試陷阱與追蹤",
          "key": "陷阱",
          "lines": [
            "一般魚油不可視為與處方 Icosapent ethyl 具相同臨床結局證據。",
            "Statin 相關肌痛不等於橫紋肌溶解；茶色尿、CK 大幅升高、AKI 要急性處理。",
            "開始或調整降脂藥物後通常約 4–12 週複查血脂；CAC = 0 不能排除非鈣化斑塊。"
          ]
        }
      ]
    }
  ],
  "questions": [
    {
      "id": "htn-new-01",
      "unitId": "hypertension",
      "topic": "白袍效應",
      "stem": "52 歲女性在診間連續兩次血壓為 155/92 mmHg，但依標準程序量測的 7 天居家平均血壓為 119/76 mmHg，無標的器官損傷。最應考慮哪一種情況？",
      "options": [
        "Sustained hypertension（持續性高血壓）",
        "White-coat hypertension（白袍高血壓）",
        "Masked hypertension（隱匿性高血壓）",
        "Hypertensive emergency（高血壓急症）"
      ],
      "answer": 1,
      "why": [
        "持續性高血壓需診間與院外血壓均持續升高。",
        "診間升高、居家正常符合白袍高血壓表現，宜持續追蹤。",
        "隱匿性高血壓相反：診間正常、院外偏高。",
        "沒有急性器官損傷，且血壓資訊也不支持急症。"
      ],
      "source": "https://professional.heart.org/en/science-news/2025-high-blood-pressure-guideline/top-things-to-know"
    },
    {
      "id": "htn-new-02",
      "unitId": "hypertension",
      "topic": "隱匿性高血壓",
      "stem": "45 歲男性診間血壓 124/78 mmHg，但標準化居家血壓平均 143/91 mmHg，多次量測一致。下列何者最適當？",
      "options": [
        "排除高血壓，因診間血壓正常",
        "懷疑隱匿性高血壓，依院外血壓及整體風險評估",
        "診斷白袍高血壓",
        "不需追蹤，待出現症狀再評估"
      ],
      "answer": 1,
      "why": [
        "居家平均已偏高，不能只憑診間正常排除。",
        "Masked HTN 是診間正常但院外升高，與心血管風險相關。",
        "白袍高血壓為診間升高、院外正常。",
        "高血壓可以沒有症狀，不能以症狀作為追蹤條件。"
      ],
      "source": "https://professional.heart.org/en/science-news/2025-high-blood-pressure-guideline/top-things-to-know"
    },
    {
      "id": "htn-new-03",
      "unitId": "hypertension",
      "topic": "CKD 蛋白尿",
      "stem": "58 歲女性，CKD G3a、尿白蛋白／肌酸酐比值 450 mg/g，BP 148/88 mmHg、K⁺ 4.3 mEq/L。無懷孕或血管性水腫病史。若選擇兼具腎保護證據的降壓藥，何者最適當？",
      "options": [
        "Losartan",
        "Propranolol",
        "Hydralazine",
        "Doxazosin"
      ],
      "answer": 0,
      "why": [
        "ARB 可降低腎絲球內壓與蛋白尿，適合多數有顯著白蛋白尿的 CKD 患者；需監測 K⁺、Creatinine。",
        "β-blocker 可治療特定心臟適應症，但不是此題 A3 蛋白尿 CKD 的優先腎保護藥。",
        "Hydralazine 可降壓，沒有同等蛋白尿相關腎保護證據。",
        "α1 blocker 可降壓，但不是本題的首選腎保護治療。"
      ],
      "source": "https://kdigo.org/wp-content/uploads/2017/02/KDIGO-2024-CKD-Guideline-Executive-Summary.pdf"
    },
    {
      "id": "htn-new-04",
      "unitId": "hypertension",
      "topic": "利尿劑電解質",
      "stem": "68 歲女性近兩週開始 Hydrochlorothiazide 治療，現有虛弱、噁心，Na⁺ 124 mEq/L、K⁺ 3.1 mEq/L。意識清楚，血流動力學穩定。哪一項最可能解釋？",
      "options": [
        "ACEi 造成的高血鉀",
        "Thiazide-associated hyponatremia",
        "Spironolactone 造成的高血鉀",
        "β-blocker 造成的高血鈣"
      ],
      "answer": 1,
      "why": [
        "ACEi 較常造成高血鉀，與低血鈉、低血鉀組合不符。",
        "Thiazide 抑制遠端小管 Na⁺/Cl⁻ cotransporter，可致低血鈉與低血鉀，老年患者風險較高。",
        "Spironolactone 常需注意高血鉀，而本題剛新增的是 Thiazide。",
        "β-blocker 不會典型造成此電解質組合。"
      ],
      "source": "https://professional.heart.org/en/science-news/2025-high-blood-pressure-guideline/top-things-to-know"
    },
    {
      "id": "htn-new-05",
      "unitId": "hypertension",
      "topic": "無器官損傷的嚴重血壓",
      "stem": "54 歲男性因例行檢查發現 BP 188/122 mmHg，反覆量測結果相近。無胸痛、神經學症狀、呼吸困難或急性腎傷害證據，評估後無急性標的器官損傷。最恰當的處置為何？",
      "options": [
        "立即 IV Nitroprusside 使血壓在 30 分鐘內正常",
        "使用 IV Labetalol 快速降至 110/70 mmHg",
        "安排及時口服藥物啟用或調整與密切追蹤",
        "不需介入，因病人沒有症狀"
      ],
      "answer": 2,
      "why": [
        "沒有急性器官損傷時，快速靜脈降壓可能造成低灌流，並非標準作法。",
        "同樣不應為追求短時間正常值而使用 IV 藥。",
        "2025 AHA/ACC：非孕成年人嚴重高血壓但無急性器官損傷，應及時以口服藥物處置與追蹤。",
        "無症狀不等於無長期風險，仍須積極評估及處理。"
      ],
      "source": "https://professional.heart.org/en/science-news/2025-high-blood-pressure-guideline/top-things-to-know"
    },
    {
      "id": "htn-new-06",
      "unitId": "hypertension",
      "topic": "睡眠呼吸中止",
      "stem": "50 歲肥胖男性，服用三類適當劑量降壓藥仍未達標，伴有大聲打鼾、目擊睡眠呼吸暫停、白天嗜睡。下一步最有助確認相關次發因素的是？",
      "options": [
        "睡眠多項生理檢查 Polysomnography",
        "24 小時尿游離皮質醇",
        "血漿游離 Metanephrines",
        "腎上腺 CT"
      ],
      "answer": 0,
      "why": [
        "有典型阻塞型睡眠呼吸中止症狀，Polysomnography 能協助確診。",
        "無典型 Cushing 特徵，非最優先。",
        "無陣發性頭痛、心悸、盜汗等典型線索。",
        "未有高醛固酮等生化證據時不應直接跳至腎上腺影像。"
      ],
      "source": "https://professional.heart.org/en/science-news/2025-high-blood-pressure-guideline/top-things-to-know"
    },
    {
      "id": "htn-new-07",
      "unitId": "hypertension",
      "topic": "抗藥性高血壓加藥",
      "stem": "62 歲男性，已規律使用最大耐受劑量 Valsartan、Amlodipine、Chlorthalidone，居家血壓仍平均 150/92 mmHg。已確認依從性、正確量測並評估常見次發原因，eGFR 78、K⁺ 4.0。最合理的第四線藥物為何？",
      "options": [
        "Spironolactone",
        "Clonidine 貼片優先於所有其他藥",
        "加用第二種 ARB",
        "加用 Enalapril 與原 ARB 併用"
      ],
      "answer": 0,
      "why": [
        "在適當病人，MRA 如 Spironolactone 為抗藥性高血壓常用第四線，注意血鉀與腎功能。",
        "Clonidine 可在其他情境使用，但一般不是此狀況的優先第四線。",
        "重複兩種 ARB 缺乏合理作用機轉與證據。",
        "ACEi + ARB 併用增加高血鉀及腎傷害，不建議。"
      ],
      "source": "https://professional.heart.org/en/science-news/2025-high-blood-pressure-guideline/top-things-to-know"
    },
    {
      "id": "htn-new-08",
      "unitId": "hypertension",
      "topic": "RASi 腎功能追蹤",
      "stem": "65 歲男性，CKD 合併 A3 白蛋白尿，剛開始使用 ARB。下列哪項監測計畫最適當？",
      "options": [
        "僅於一年後測血鉀與 Creatinine",
        "2–4 週內追蹤血壓、Creatinine 與 K⁺",
        "只追蹤 LDL-C，不需測腎功能",
        "只要沒有肌肉痠痛就不需要抽血"
      ],
      "answer": 1,
      "why": [
        "剛調整 RASi 後，早期測量有助偵測高血鉀與腎功能變化。",
        "KDIGO 建議開始或增加 RASi 劑量後約 2–4 週檢查 BP、Creatinine 與 K⁺。",
        "LDL-C 是重要心血管指標，但不能取代用藥後腎功能監測。",
        "高血鉀可能沒有症狀，需客觀監測。"
      ],
      "source": "https://kdigo.org/wp-content/uploads/2017/02/KDIGO-2024-CKD-Guideline-Executive-Summary.pdf"
    },
    {
      "id": "lip-new-01",
      "unitId": "dyslipidemia",
      "topic": "non-HDL-C",
      "stem": "56 歲男性，血脂：TC 250、HDL-C 40、TG 180 mg/dL。請問 non-HDL-C 是多少？",
      "options": [
        "170 mg/dL",
        "180 mg/dL",
        "210 mg/dL",
        "250 mg/dL"
      ],
      "answer": 2,
      "why": [
        "170 mg/dL 不是 TC 減 HDL-C 的結果。",
        "180 mg/dL 是題目的 TG，非 non-HDL-C。",
        "non-HDL-C = TC − HDL-C = 250 − 40 = 210 mg/dL。",
        "250 mg/dL 是 TC，尚未扣除 HDL-C。"
      ],
      "source": "https://professional.heart.org/en/science-news/2026-guideline-on-the-management-of-dyslipidemia/top-things-to-know"
    },
    {
      "id": "lip-new-02",
      "unitId": "dyslipidemia",
      "topic": "LDL 估算限制",
      "stem": "40 歲男性，TC 284、HDL-C 38、TG 520 mg/dL，空腹抽血。若檢驗單使用傳統 Friedewald equation 計算 LDL-C，最重要的問題是？",
      "options": [
        "TG 太高，傳統公式不可靠，應改用合適的 LDL 評估方式",
        "HDL-C 必須高於 60 才能計算 LDL-C",
        "TC 超過 200 時不能使用所有 LDL 計算公式",
        "Friedewald 僅適用接受 Statin 者"
      ],
      "answer": 0,
      "why": [
        "傳統 Friedewald 公式在 TG ≥400 mg/dL 時失準，應改用合適的直接測定或更合適方法。",
        "HDL-C 高低不構成這種硬性限制。",
        "高 TC 本身不是所有公式的絕對禁忌。",
        "公式是否可靠主要關乎血脂狀態與測量條件，不是只有 Statin 使用者可用。"
      ],
      "source": "https://professional.heart.org/en/science-news/2026-guideline-on-the-management-of-dyslipidemia/top-things-to-know"
    },
    {
      "id": "lip-new-03",
      "unitId": "dyslipidemia",
      "topic": "腎病症候群與高血脂",
      "stem": "39 歲女性有全身水腫，尿蛋白 6 g/day、Albumin 2.1 g/dL、LDL-C 245 mg/dL，TSH 正常。最能解釋其新近高膽固醇血症的是？",
      "options": [
        "Nephrotic syndrome（腎病症候群）",
        "急性甲狀腺亢進",
        "單純缺鐵性貧血",
        "急性闌尾炎"
      ],
      "answer": 0,
      "why": [
        "大量蛋白尿、低白蛋白與水腫形成典型腎病症候群，常伴肝臟脂蛋白合成及清除異常。",
        "甲狀腺亢進通常不會典型造成此組合，且 TSH 正常。",
        "缺鐵性貧血不能解釋大量蛋白尿與低白蛋白。",
        "急性闌尾炎與所示腎臟及血脂表徵不吻合。"
      ],
      "source": "https://professional.heart.org/en/science-news/2026-guideline-on-the-management-of-dyslipidemia/top-things-to-know"
    },
    {
      "id": "lip-new-04",
      "unitId": "dyslipidemia",
      "topic": "Statin 強度辨認",
      "stem": "57 歲男性，需要 LDL-C 至少降低 50%。下列哪一個是標準高強度 Statin 處方？",
      "options": [
        "Pravastatin 20 mg/day",
        "Simvastatin 20 mg/day",
        "Rosuvastatin 20 mg/day",
        "Atorvastatin 10 mg/day"
      ],
      "answer": 2,
      "why": [
        "Pravastatin 20 mg 多屬低強度。",
        "Simvastatin 20 mg 為中等強度。",
        "Rosuvastatin 20 mg 屬高強度，預期 LDL-C 可下降至少 50%。",
        "Atorvastatin 10 mg 通常屬中等強度。"
      ],
      "source": "https://professional.heart.org/en/science-news/2026-guideline-on-the-management-of-dyslipidemia/top-things-to-know"
    },
    {
      "id": "lip-new-05",
      "unitId": "dyslipidemia",
      "topic": "膽酸結合樹脂限制",
      "stem": "60 歲男性 LDL-C 158 mg/dL、空腹 TG 470 mg/dL。醫師考慮使用膽酸結合樹脂（Bile acid sequestrant）。哪一項因素最值得警覺？",
      "options": [
        "可能造成 TG 進一步升高",
        "可能直接引起甲狀腺風暴",
        "會造成高血鉀為最常見限制",
        "屬 PCSK9 抑制劑，需監測抗體"
      ],
      "answer": 0,
      "why": [
        "膽酸結合樹脂可升高 TG，高 TG 病人通常應避免或十分謹慎。",
        "無直接造成甲狀腺風暴的典型機轉。",
        "高血鉀不是此類藥物的主要典型限制。",
        "膽酸結合樹脂在腸道作用，不是 PCSK9 抑制劑。"
      ],
      "source": "https://professional.heart.org/en/science-news/2026-guideline-on-the-management-of-dyslipidemia/top-things-to-know"
    },
    {
      "id": "lip-new-06",
      "unitId": "dyslipidemia",
      "topic": "PCSK9 作用機轉",
      "stem": "一名 ASCVD 高風險患者考慮使用 Evolocumab。下列哪項最能說明藥物如何降低 LDL-C？",
      "options": [
        "抑制腸道 NPC1L1",
        "活化 PPAR-α",
        "阻斷 HMG-CoA reductase",
        "抑制 PCSK9，減少 LDL receptor 降解"
      ],
      "answer": 3,
      "why": [
        "抑制 NPC1L1 是 Ezetimibe。",
        "活化 PPAR-α 代表 Fibrate 類。",
        "抑制 HMG-CoA reductase 為 Statin 類。",
        "Evolocumab 是 PCSK9 單株抗體，可減少 LDL receptor 降解，促進血中 LDL 清除。"
      ],
      "source": "https://professional.heart.org/en/science-news/2026-guideline-on-the-management-of-dyslipidemia/top-things-to-know"
    },
    {
      "id": "lip-new-07",
      "unitId": "dyslipidemia",
      "topic": "糖尿病風險與 ApoB",
      "stem": "55 歲第二型糖尿病患者已使用 Statin，LDL-C 58 mg/dL、TG 280 mg/dL，醫師懷疑 LDL-C 無法完整反映殘餘致動脈粥狀硬化脂蛋白風險。下列哪個檢驗最有幫助？",
      "options": [
        "Apolipoprotein B（ApoB）",
        "Serum amylase",
        "Troponin I",
        "D-dimer"
      ],
      "answer": 0,
      "why": [
        "ApoB 反映致動脈粥狀硬化脂蛋白顆粒數，TG 高及 LDL 已很低時可加強風險評估。",
        "Amylase 主要評估胰臟疾病，不能代替脂蛋白顆粒風險指標。",
        "Troponin 評估心肌傷害，非穩定狀態的顆粒數指標。",
        "D-dimer 用於特定血栓評估，不反映 ApoB 顆粒負荷。"
      ],
      "source": "https://professional.heart.org/en/science-news/2026-guideline-on-the-management-of-dyslipidemia/top-things-to-know"
    },
    {
      "id": "lip-new-08",
      "unitId": "dyslipidemia",
      "topic": "Statin 與肝酵素",
      "stem": "48 歲男性服用 Atorvastatin 20 mg/day 兩個月，沒有肌痛、黃疸或疲倦，ALT 54 U/L（實驗室正常上限 40），膽紅素正常。最恰當的觀念是？",
      "options": [
        "所有 ALT 超過正常上限都必須永久停 Statin",
        "無症狀、輕微 ALT 上升不必自動永久停藥，應結合臨床情況評估",
        "只要 ALT 上升就應加用 Gemfibrozil",
        "應立即以 IV N-acetylcysteine 常規治療"
      ],
      "answer": 1,
      "why": [
        "輕微轉胺酶上升不等於嚴重藥物性肝損傷，是否停藥需看症狀、程度與趨勢。",
        "此 ALT 約 1.35 倍正常上限且無症狀，通常可持續觀察與評估原因，不需立刻永久停 Statin。",
        "Gemfibrozil 與此肝酵素問題無治療關聯，且與部分 Statin 有交互作用。",
        "N-acetylcysteine 不用於這種無症狀輕微 ALT 上升的常規處置。"
      ],
      "source": "https://professional.heart.org/en/science-news/2026-guideline-on-the-management-of-dyslipidemia/top-things-to-know"
    }
  ],
  "previous_topics": [
    {
      "id": "old-lip-01",
      "unitId": "dyslipidemia",
      "topic": "心肌梗塞次級預防與 Ezetimibe"
    },
    {
      "id": "old-lip-02",
      "unitId": "dyslipidemia",
      "topic": "TG >1000：胰臟炎預防與 Fenofibrate"
    },
    {
      "id": "old-lip-03",
      "unitId": "dyslipidemia",
      "topic": "家族性高膽固醇血症的 cascade screening"
    },
    {
      "id": "old-lip-04",
      "unitId": "dyslipidemia",
      "topic": "Icosapent ethyl 殘餘 ASCVD 風險"
    },
    {
      "id": "old-lip-05",
      "unitId": "dyslipidemia",
      "topic": "Simvastatin + Gemfibrozil 橫紋肌溶解"
    },
    {
      "id": "old-lip-06",
      "unitId": "dyslipidemia",
      "topic": "糖尿病多重風險與高強度 Statin"
    },
    {
      "id": "old-lip-07",
      "unitId": "dyslipidemia",
      "topic": "甲狀腺低下造成次發性 LDL 升高"
    },
    {
      "id": "old-lip-08",
      "unitId": "dyslipidemia",
      "topic": "Lp(a) 遺傳風險"
    },
    {
      "id": "old-lip-09",
      "unitId": "dyslipidemia",
      "topic": "Bempedoic acid Statin intolerance"
    },
    {
      "id": "old-lip-10",
      "unitId": "dyslipidemia",
      "topic": "CAC 168 引導初級預防"
    }
  ]
};
const STORE_KEY='medimochi_v1';
const NAV=[['home','🏡','首頁'],['library','📖','知識單元'],['practice','📝','情境練習'],['wrong','🌱','錯題複習'],['studio','✨','新增內容'],['cloud','☁️','雲端同步']];
const alphabet=['A','B','C','D'];
const esc=(v)=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm=(s)=>String(s||'').normalize('NFKC').toLowerCase().replace(/[\p{P}\p{S}\s]/gu,'');
const isUrl=(s)=>{try{const u=new URL(s);return u.protocol==='http:'||u.protocol==='https:'}catch{return false}};
const safeLink=(s)=>isUrl(s)?esc(s):'#';
function readLocal(){try{return JSON.parse(localStorage.getItem(STORE_KEY)||'null')}catch{return null}}
function persist(){try{localStorage.setItem(STORE_KEY,JSON.stringify(data));window.medMochiPersist?.();return true}catch{toast('裝置無法儲存資料；請使用匯出備份。');return false}}
const saved=readLocal();
let data={units:[...SEED.units],questions:[...SEED.questions],attempts:{},history:{answered:0,correct:0,misses:[]},previous_topics:SEED.previous_topics||[]};
if(saved && typeof saved==='object'){
  data.units=[...SEED.units]; for(const u of (Array.isArray(saved.units)?saved.units:[])){const i=data.units.findIndex(x=>x.id===u.id);if(i<0)data.units.push(u);else if(u.userAdded)data.units[i]=u;}
  data.questions=[...SEED.questions];for(const q of(Array.isArray(saved.questions)?saved.questions:[])){if(!data.questions.some(x=>x.id===q.id||norm(x.stem)===norm(q.stem)))data.questions.push(q)}
  data.attempts=saved.attempts||{};data.history=saved.history||data.history;
  data.previous_topics=[...SEED.previous_topics,...(saved.previous_topics||[]).filter(p=>!SEED.previous_topics.some(s=>s.id===p.id))];
}
let page='home',unitOpened='hypertension',filter='all',quizCount=5,session=null,chosen=null,showFeedback=false;
function toast(msg){const el=document.getElementById('toast');el.textContent=msg;el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),2800)}
const atts=()=>Object.values(data.attempts);
const completed=()=>atts().length+Number(data.history.answered||0);
const correct=()=>atts().filter(x=>x.correct).length+Number(data.history.correct||0);
const missed=()=>atts().filter(x=>!x.correct).length+(data.history.misses||[]).length;
const unseen=(which='all')=>data.questions.filter(q=>(which==='all'||q.unitId===which)&&!data.attempts[q.id]);
function render(){
 const title=page==='home'?'我的學習角落':NAV.find(n=>n[0]===page)?.[2]||'醫學糰子';
 document.getElementById('app').innerHTML=`<aside class="sidebar"><div class="brand"><span class="brand-avatar">🍡</span><div><span class="brand-name">醫學糰子</span><span class="brand-small">MEDMOCHI STUDY</span></div></div><p class="sidelabel">我的學習空間</p><div class="nav">${NAV.map(n=>`<button data-nav="${n[0]}" class="${page===n[0]?'active':''}"><span class="ni">${n[1]}</span>${n[2]}</button>`).join('')}</div><div class="sidebar-bottom"><div class="sidebar-note"><span class="bear">🧸</span><strong>每天多懂一點點</strong><br>讓每一個小單元，慢慢變成你的醫學宇宙。</div></div></aside><main class="main"><div class="topbar"><span class="crumb">MEDMOCHI / ${esc(title)}</span><div class="top-right"><span class="pill">🩺 醫師國考二階</span><span class="pill icon-pill">✦ 2026</span></div></div><div id="page">${pageHTML()}</div><div class="footer">僅供醫師國考學習，不取代臨床判斷。內容整理自所列指引，應以最新正式版本與個別病人狀況為準。未登入雲端時資料只儲存在此瀏覽器；請定期備份。</div></main>`;
 document.getElementById('mobile-nav').innerHTML=NAV.map(n=>`<button data-nav="${n[0]}" class="${page===n[0]?'active':''}"><span>${n[1]}</span>${n[2]}</button>`).join('');
 document.querySelectorAll('[data-nav]').forEach(el=>el.addEventListener('click',()=>navigate(el.dataset.nav)));
 document.querySelectorAll('[data-go-unit]').forEach(el=>el.addEventListener('click',()=>openUnit(el.dataset.goUnit)));
 document.querySelectorAll('[data-go-practice]').forEach(el=>el.addEventListener('click',()=>{filter=el.dataset.goPractice;navigate('practice')}));
 bindPage();
}
function navigate(p){page=p;if(p!=='practice')session=null;render();window.scrollTo({top:0,behavior:'smooth'})}
function openUnit(id){unitOpened=id;page='unit';render();window.scrollTo({top:0,behavior:'smooth'})}
function pageHTML(){if(page==='cloud')return window.medMochiCloudHTML?.()||'<div class="info-card">雲端功能載入中…</div>';return ({home:homeHTML,library:libraryHTML,unit:unitHTML,practice:practiceHTML,wrong:wrongHTML,studio:studioHTML}[page]||homeHTML)()}
function courseCard(u){const count=data.questions.filter(q=>q.unitId===u.id).length;const sections=(u.sections||[]).length;return `<article class="course-card ${esc(u.accent||'peach')}"><div class="course-top"><span class="course-emoji">${esc(u.emoji||'📚')}</span><span class="course-status">已收錄 · ${sections} 章</span></div><h3>${esc(u.title)}</h3><div class="english">${esc(u.en||'')}</div><p>${esc(u.intro||u.tagline||'')}</p><div class="course-foot"><span>📖 ${sections} 個重點　📝 ${count} 題題庫</span><button class="arrow-btn" data-go-unit="${esc(u.id)}" aria-label="進入${esc(u.title)}">↗</button></div></article>`}
function homeHTML(){const progress=completed()?(100*correct()/completed()).toFixed(0)+'%':'—';return `<div class="hero"><div class="txt"><div class="eyebrow" style="color:#856f9f">YOUR LITTLE STUDY CORNER</div><h1>把醫學知識，<br>慢慢收進小口袋 ♡</h1><p>一個單元一個單元累積，今天也讓國考複習更有方向。</p><button class="btn" id="start-now">開始今天的複習 ↗</button></div><div class="hero-mascot"><span class="spark">✦</span><div class="blob"><div class="petal"></div><div class="smile"></div><div class="cheek c1"></div><div class="cheek c2"></div></div><span class="spark s2">✧</span></div></div>
 <div class="stats"><div class="stat"><div><small>知識單元</small><strong>${data.units.length} <span style="font-size:12px;color:#a49bac">個</span></strong></div><span class="figure">📚</span></div><div class="stat"><div><small>已完成題目</small><strong>${completed()} <span style="font-size:12px;color:#a49bac">題</span></strong></div><span class="figure">🖊️</span></div><div class="stat"><div><small>累積正確率</small><strong>${progress}</strong></div><span class="figure">🌟</span></div></div>
 <div class="section-head"><h2>我的知識花園 <span style="font-size:19px">🌷</span></h2><button class="btn small secondary" data-nav="library">查看全部單元</button></div><div class="courses">${data.units.map(courseCard).join('')}</div>
 <div class="section-head"><h2>下一步做什麼？</h2></div><div class="row"><button class="btn outline" data-go-practice="all">📝 來一組全科新題</button><button class="btn outline" data-nav="wrong">🌱 查看錯題筆記</button><button class="btn outline" data-nav="studio">✨ 加入下一個單元</button></div>
 <div class="wide-notice">💡 <strong>不重複練習模式：</strong>同一份題庫中，已作答的題目不會再被當作新題抽出；若未作答題目用完，網站會提示你補充題庫，而不是默默重複。</div>`}
function libraryHTML(){return `<h1 class="page-title">知識單元 📖</h1><p class="page-sub">專屬你的臨床複習手冊，中英名詞與高頻考點整理在一起。</p><div class="courses">${data.units.map(courseCard).join('')}</div><div class="wide-notice">每份筆記都可附上指引來源；不同年份的臨床建議可能不同，請以頁面所載的版本與適用族群判讀。</div>`}
function unitHTML(){const u=data.units.find(x=>x.id===unitOpened)||data.units[0];if(!u)return `<div class="empty">目前還沒有單元。</div>`;return `<div class="lesson-top"><span class="course-emoji" style="background:${u.accent==='mint'?'#e7f5eb':'#fff0ec'}">${esc(u.emoji||'📚')}</span><div><span class="eyebrow">CHAPTER · ${esc(u.en||'')}</span><h1>${esc(u.title)}</h1><p>${esc(u.tagline||u.intro||'')}</p></div></div><div class="split"><div><div class="row"><span class="chip">📌 國考重點速讀</span><span class="chip">🩺 臨床情境導向</span></div>${(u.sections||[]).map((s,i)=>`<details class="accordion" ${i===0?'open':''}><summary><span>${String(i+1).padStart(2,'0')}　${esc(s.title)}</span></summary><div class="lesson-lines"><ul>${(s.lines||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div></details>`).join('')}</div><div><div class="callout"><strong>🌼 讀完就做題</strong>透過臨床情境，把診斷、鑑別與治療串起來。</div><button class="btn" data-go-practice="${esc(u.id)}" style="width:100%">練習 ${esc(u.title)} 新題 →</button><div class="info-card" style="margin-top:16px"><strong>📎 指引及參考資料</strong>${(u.refs||[]).filter(r=>isUrl(r.url)).map(r=>`<a class="ref-link" href="${safeLink(r.url)}" target="_blank" rel="noopener noreferrer">↗ ${esc(r.label||r.url)}</a>`).join('')||'<p class="muted">尚未加入來源</p>'}</div></div></div>`}
function practiceHTML(){if(session)return quizHTML();let options=[{id:'all',title:'全部單元',emoji:'🌈'},...data.units.map(u=>({id:u.id,title:u.title,emoji:u.emoji}))];return `<h1 class="page-title">臨床情境練習 📝</h1><p class="page-sub">每題四選一，提交後看四選項解析；已作答的題目不會重複抽出。</p><div class="quiz-setup"><h2>今天想練哪個主題？</h2><div class="choice-tabs">${options.map(o=>`<button data-filter="${esc(o.id)}" class="${filter===o.id?'active':''}">${esc(o.emoji||'📚')} ${esc(o.title)}</button>`).join('')}</div><span class="label">一回合幾題？</span><div class="choice-tabs">${[5,10].map(n=>`<button data-count="${n}" class="${quizCount===n?'active':''}">${n} 題</button>`).join('')}</div><p class="muted" style="font-size:13px">此範圍還有 <strong style="color:#695996">${unseen(filter).length}</strong> 題未作答。</p><button id="begin-quiz" class="btn" ${unseen(filter).length?'':'disabled'}>開始不重複練習 →</button>${unseen(filter).length===0?'<div class="wide-notice">這個範圍的新題已經做完了。請到「新增內容」匯入新題；不會自動重複舊題。</div>':''}</div>`}
function quizHTML(){if(session.index>=session.ids.length){const pct=Math.round(session.right/session.ids.length*100);return `<div class="quiz-stage"><div class="quiz-card done"><div class="emoji">${pct>=80?'🎉':'🌱'}</div><span class="eyebrow">QUIZ COMPLETE</span><h2>本回合完成啦！</h2><p>答對 ${session.right} / ${session.ids.length} 題，正確率 ${pct}%</p><div class="row" style="justify-content:center"><button id="new-quiz" class="btn">繼續抽新題</button><button data-nav="wrong" class="btn outline">查看錯題</button></div></div></div>`}
 const q=data.questions.find(q=>q.id===session.ids[session.index]);const has=chosen!==null;return `<div class="quiz-stage"><div class="row" style="justify-content:space-between"><span class="eyebrow">CASE PRACTICE</span><span class="pill">第 ${session.index+1} / ${session.ids.length} 題</span></div><div class="progress-track"><div class="progress-fill" style="width:${100*(session.index)/session.ids.length}%"></div></div><div class="quiz-card"><span class="chip">${esc(data.units.find(u=>u.id===q.unitId)?.title||'單元')} · ${esc(q.topic||'臨床')}</span><div class="question-stem">${esc(q.stem)}</div>${q.options.map((o,i)=>{const cls=showFeedback?(i===q.answer?'good':i===chosen?'bad':''):(i===chosen?'selected':'');return `<button class="option ${cls}" data-choice="${i}" ${showFeedback?'disabled':''}><span class="op-letter">${alphabet[i]}</span><strong>${esc(o)}</strong></button>`}).join('')}${showFeedback?`<div class="feedback-box"><strong style="color:${chosen===q.answer?'#36886b':'#b75e70'}">${chosen===q.answer?'✓ 答對了！':'✦ 這題再補強一下'}</strong>${q.why.map((w,i)=>`<div class="feedback-row"><strong>${alphabet[i]}.</strong> ${esc(w)}</div>`).join('')}<div class="fb-why">參考資料：<a href="${safeLink(q.source)}" target="_blank" rel="noopener noreferrer">正式指引 ↗</a></div></div>`:''}<div class="quiz-foot"><span class="muted" style="font-size:12px">${showFeedback?'答案已記入學習紀錄':'先選一個最適當的答案'}</span><button class="btn" id="quiz-next" ${!has&&!showFeedback?'disabled':''}>${showFeedback?(session.index+1===session.ids.length?'查看成績 →':'下一題 →'):'確認答案 →'}</button></div></div></div>`}
function wrongHTML(){const wrongQs=atts().filter(x=>!x.correct).map(a=>({kind:'new',q:data.questions.find(q=>q.id===a.qid),a})).filter(x=>x.q);const old=(data.history.misses||[]);return `<h1 class="page-title">錯題複習 🌱</h1><p class="page-sub">錯題不是失敗，是最值得投資的複習清單。</p><div class="stats" style="grid-template-columns:repeat(2,1fr);max-width:650px"><div class="stat"><div><small>累計錯題</small><strong>${missed()}</strong></div><span class="figure">📒</span></div><div class="stat"><div><small>未做的新題</small><strong>${unseen().length}</strong></div><span class="figure">🌱</span></div></div>${!wrongQs.length&&!old.length?'<div class="empty"><div class="big">🌷</div><h3>錯題花圃目前是空的</h3><p>完成情境題後，答錯的考點會收錄在這裡。</p></div>':''}${old.map(x=>`<article class="wrong-item"><span class="tiny-tag">歷史作答 · ${esc(x.unit||'高血脂')}</span><h3>${esc(x.topic)}</h3><p>${esc(x.note||'可用新病例重新練習此考點。')}</p></article>`).join('')}${wrongQs.map(({q,a})=>`<article class="wrong-item"><span class="tiny-tag">${esc(data.units.find(u=>u.id===q.unitId)?.title||'')} · ${esc(q.topic)}</span><h3>${esc(q.stem)}</h3><p><strong style="color:#c36d7a">當時選擇：</strong>${esc(q.options[a.selected])}</p><p><strong style="color:#588e73">正確觀念：</strong>${esc(q.why[q.answer])}</p></article>`).join('')}<div class="wide-notice">錯題新情境：網站目前會保留答錯觀念與不重複題目；要產生同考點的全新病例，需先匯入新增題庫。單純本機版不會自動呼叫 AI 生成。</div>`}
function studioHTML(){return `<h1 class="page-title">新增內容 ✨</h1><p class="page-sub">新單元和新題庫可以直接匯入，不需修改網站程式。</p><div class="split"><div><div class="info-card"><h3 style="margin-top:0">🌷 快速建立單元</h3><div class="form-grid"><label class="form-group"><span class="field-label">單元名稱</span><input class="field" id="u-title" placeholder="例如：糖尿病"></label><label class="form-group"><span class="field-label">英文名稱</span><input class="field" id="u-en" placeholder="Diabetes mellitus"></label><label class="form-group"><span class="field-label">代表 emoji</span><input class="field" id="u-emoji" placeholder="🍡" value="🍡"></label><label class="form-group"><span class="field-label">一句話介紹</span><input class="field" id="u-intro" placeholder="診斷、藥物與併發症"></label></div><label class="form-group"><span class="field-label">第一段知識整理（每行一個重點）</span><textarea id="u-notes" class="field" rows="5" placeholder="HbA1c 的診斷標準…\nMetformin 的機轉…"></textarea></label><div class="row"><button class="btn" id="create-unit">新增到知識庫 →</button></div><div class="form-tip">更多章節、題庫與引用文獻建議使用下方 JSON 匯入。</div></div><div class="info-card" style="margin-top:18px"><h3 style="margin-top:0">📝 匯入學習內容 JSON</h3><p class="muted" style="font-size:13px">支援 <code>units</code>、<code>questions</code>，以及私人備份內的 <code>attempts</code>、<code>history</code>。同 ID 或同題幹的重複題會跳過。</p><textarea id="import-text" class="field" rows="8" placeholder='貼上 JSON，例如 {"units":[],"questions":[]}'></textarea><div class="row" style="margin-top:13px"><button id="import-json" class="btn">匯入 JSON</button><label class="btn outline small" style="cursor:pointer">選擇檔案<input id="import-file" type="file" accept=".json,application/json" hidden></label></div><p class="form-tip">重複檢查是 ID 與正規化題幹比對；不同文字但相同考點的語意重複，仍需人工或後端模型審查。</p></div></div><div><div class="callout"><strong>✨ 新單元加入方式</strong>每學完一章，請 ChatGPT 輸出本網站的單元 JSON，貼到匯入框即可立即出現在首頁。</div><div class="info-card"><h3 style="margin-top:0">☁️ 資料備份</h3><p class="muted" style="font-size:13px">目前是本機儲存版本。清除網站資料、更換裝置可能遺失進度，請定期匯出。</p><button class="btn outline" id="export-json" style="width:100%">⬇ 匯出全部資料 JSON</button><div style="height:10px"></div><button class="btn secondary" id="download-sample" style="width:100%">📄 下載範本</button></div><div class="wide-notice">🔒 若網站之後公開部署，請勿將含個人作答紀錄的備份 JSON 放進公開 GitHub 儲存庫。跨裝置的私人資料應改由登入與權限控管的雲端資料庫保存。</div></div></div>`}
function bindPage(){
 const start=document.getElementById('start-now');if(start)start.onclick=()=>navigate('practice');
 document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;render()});
 document.querySelectorAll('[data-count]').forEach(b=>b.onclick=()=>{quizCount=Number(b.dataset.count);render()});
 const begin=document.getElementById('begin-quiz');if(begin)begin.onclick=()=>{const pool=unseen(filter).sort(()=>Math.random()-.5).slice(0,quizCount);if(!pool.length){toast('這個範圍沒有新題囉');return}session={ids:pool.map(q=>q.id),index:0,right:0};chosen=null;showFeedback=false;render()};
 document.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>{if(showFeedback)return;chosen=Number(b.dataset.choice);render()});
 const next=document.getElementById('quiz-next');if(next)next.onclick=()=>{if(!showFeedback){if(chosen===null)return;const qid=session.ids[session.index],q=data.questions.find(x=>x.id===qid),ok=q.answer===chosen;if(ok)session.right++;data.attempts[qid]={qid,selected:chosen,correct:ok,at:new Date().toISOString()};persist();showFeedback=true;render()}else{session.index++;chosen=null;showFeedback=false;render()}};
 const n=document.getElementById('new-quiz');if(n)n.onclick=()=>{session=null;render()};
 const create=document.getElementById('create-unit');if(create)create.onclick=createUnit;
 const imp=document.getElementById('import-json');if(imp)imp.onclick=()=>{try{const obj=JSON.parse(document.getElementById('import-text').value);importData(obj)}catch(e){toast('匯入格式有誤：'+e.message)}};
 const file=document.getElementById('import-file');if(file)file.onchange=async e=>{const f=e.target.files?.[0];if(!f)return;try{const obj=JSON.parse(await f.text());importData(obj)}catch(e){toast('檔案匯入失敗：'+e.message)}};
 const ex=document.getElementById('export-json');if(ex)ex.onclick=()=>downloadJSON(data,'medimochi-backup-'+new Date().toISOString().slice(0,10)+'.json');
 const sample=document.getElementById('download-sample');if(sample)sample.onclick=()=>downloadJSON({units:[{id:'diabetes',title:'糖尿病',en:'Diabetes mellitus',emoji:'🍡',tagline:'範例單元',accent:'mint',intro:'簡介',refs:[],sections:[{title:'診斷 Diagnosis',key:'診斷',lines:['重點 1','重點 2']}]}],questions:[{id:'dm-001',unitId:'diabetes',topic:'診斷',stem:'臨床情境……下列何者最適當？',options:['選項 A','選項 B','選項 C','選項 D'],answer:0,why:['正確理由','錯誤理由','錯誤理由','錯誤理由'],source:'https://example.org'}]},'medimochi-new-unit-template.json');
 window.medMochiBindCloud?.();
}
function uniqueSlug(s){const base=String(s).toLowerCase().replace(/\s+/g,'-').replace(/[^\p{L}\p{N}-]/gu,'').slice(0,40)||'unit';let id=base,i=2;while(data.units.some(x=>x.id===id)){id=base+'-'+i++}return id}
function createUnit(){const title=document.getElementById('u-title').value.trim(),en=document.getElementById('u-en').value.trim(),emoji=document.getElementById('u-emoji').value.trim()||'📚',intro=document.getElementById('u-intro').value.trim(),notes=document.getElementById('u-notes').value.trim().split('\n').map(x=>x.trim()).filter(Boolean);if(!title||!notes.length){toast('請至少填入單元名稱與一行筆記');return}if(data.units.some(u=>u.title===title)){toast('已有相同名稱單元，請使用 JSON 加入章節');return}let u={id:uniqueSlug(en||title),title,en,emoji,tagline:intro,accent:'mint',intro,refs:[],sections:[{title:'我的重點整理',key:'筆記',lines:notes}],userAdded:true};data.units.push(u);persist();toast('已建立新單元');openUnit(u.id)}
function downloadJSON(obj,filename){const blob=new Blob([JSON.stringify(obj,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1200)}
function validUnit(u){return u&&typeof u.id==='string'&&u.id.length>0&&typeof u.title==='string'&&u.title.length>0&&Array.isArray(u.sections)&&u.sections.every(s=>typeof s.title==='string'&&Array.isArray(s.lines))}
function validQ(q){return q&&typeof q.id==='string'&&typeof q.unitId==='string'&&typeof q.stem==='string'&&q.stem.length>8&&Array.isArray(q.options)&&q.options.length===4&&q.options.every(s=>typeof s==='string'&&s.length>0)&&Array.isArray(q.why)&&q.why.length===4&&q.why.every(s=>typeof s==='string'&&s.length>0)&&Number.isInteger(q.answer)&&q.answer>=0&&q.answer<=3}
function importData(obj){if(!obj||typeof obj!=='object')throw new Error('JSON 必須是物件');let addedU=0,updatedU=0,addedQ=0,skipped=0;
 if(Array.isArray(obj.units))for(const u of obj.units){if(!validUnit(u)){skipped++;continue}const idx=data.units.findIndex(x=>x.id===u.id);if(idx<0){data.units.push({...u,userAdded:true});addedU++}else if(data.units[idx].userAdded){data.units[idx]={...data.units[idx],...u,userAdded:true};updatedU++}else{skipped++}}
 if(Array.isArray(obj.questions))for(const q of obj.questions){if(!validQ(q)||!data.units.some(u=>u.id===q.unitId)){skipped++;continue}if(data.questions.some(x=>x.id===q.id||norm(x.stem)===norm(q.stem))){skipped++;continue}data.questions.push(q);addedQ++}
 if(obj.attempts&&typeof obj.attempts==='object'&&!Array.isArray(obj.attempts))for(const [id,a]of Object.entries(obj.attempts)){if(data.questions.some(q=>q.id===id)&&a&&typeof a.correct==='boolean'&&Number.isInteger(a.selected)&&!data.attempts[id])data.attempts[id]=a}
 if(obj.history&&typeof obj.history==='object'&&Number.isInteger(obj.history.answered)&&Number.isInteger(obj.history.correct)&&obj.history.answered>=obj.history.correct&&Array.isArray(obj.history.misses)){data.history={answered:obj.history.answered,correct:obj.history.correct,misses:obj.history.misses.filter(x=>x&&typeof x.topic==='string')};}
 if(Array.isArray(obj.previous_topics))for(const p of obj.previous_topics){if(p&&typeof p.id==='string'&&!data.previous_topics.some(x=>x.id===p.id))data.previous_topics.push(p)}
 persist();toast(`匯入完成：新增 ${addedU} 單元、${addedQ} 題；略過 ${skipped} 筆`);render();}
render();
window.MEDMOCHI_APP_READY = true;
