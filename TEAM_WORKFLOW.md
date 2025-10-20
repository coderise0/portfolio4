# دليل عمل الفريق: إنشاء الفرع ورفع الشغل (Branch & PR Workflow)

هذا الملف يشرح خطوات العمل اليومية لكل عضو في الفريق — من إنشاء فرع إلى فتح Pull Request ومتابعة المراجعات والدمج.

## 1. القواعد العامة
- اتبعوا اسماء الفروع التالية:
  - feature/<short-desc>  — لميزات جديدة
  - fix/<short-desc>      — لإصلاحات
  - chore/<short-desc>    — مهام صيانة أو تحديثات غير وظيفية
  - docs/<short-desc>     — تغييرات في الوثائق
- استخدم Conventional Commits لرسائل الكوميت (مثال: `feat(projects): add ProjectCard component`).
- لا تدمج مباشرة على `main` — كل التغييرات عن طريق PR.

## 2. إعداد فرع جديد (Onboarding quick-start)
1. تأكد أنك على `main` ومحدث:

```powershell
git checkout main
git pull origin main
```

2. أنشئ فرع جديد بعنوان واضح:

```powershell
git checkout -b feature/short-desc
# مثال:
git checkout -b feature/add-project-card
```

3. أضف وارتكب تغييراتك محليًا:

```powershell
git add .
git commit -m "feat(projects): add ProjectCard component"
```

> ملاحظة: Husky + lint-staged سيطبّقان Prettier و ESLint قبل الكوميت إن كانا مفعّلين.

## 3. دفع الفرع إلى الريموت (Push)

لو تريدين تدفعين إلى فوركك (مُفضّل لو ما عندك صلاحية كتابة على repo الأصلي):

```powershell
git remote add fork https://github.com/<your-username>/portfolio4.git  # مرة واحدة فقط
git push -u fork HEAD
```

لو تملكين صلاحية على `origin` ادفعي مباشرة:

```powershell
git push -u origin HEAD
```

## 4. فتح Pull Request (PR)
1. اذهب إلى صفحة الريبو على GitHub. ستظهر لك زر `Compare & pull request` عند دفع الفرع.
2. املأ عنوان الـ PR بوصف قصير (استخدم نفس رسالة الكوميت الرئيسية):

```
chore(setup): setup environment
```

3. ضع وصفًا واضحًا في body يتضمن:
  - ماذا تغيّر (short summary)
  - كيف تختبِر التغيير محليًا (steps)
  - أي قضايا مرتبطة (#issue)
  - ملاحظات للمراجع (what to focus on)

### قالب وصف PR (نسخة جاهزة للنسخ)

```
Title: <type(scope): short summary>

What changed:
- Short bullet points describing changes

How to test locally:
1. npm install
2. npm run dev
3. Open http://localhost:5173 and check X

Related issue: Closes #<issue-number> (if any)

Notes for reviewer:
- Accessibility, responsiveness, areas to focus on
```

## 5. المراجعة وCI
- بعد فتح PR، سيشغل CI (lint + build). انتظر نتائج الـ Actions.
- اطلب مراجعين (Reviewers). `CODEOWNERS` قد يعيّن مراجع تلقائياً.
- لو حصل فشل في الـ CI: افتح علامة `Actions` أو راجع سجلات الـ check في صفحة الـ PR لإيجاد الأخطاء، أصلحها، ثم `commit` و `push` جديد.

## 6. حل التعارضات (Conflicts)
إذا ظهر تعارض مع `main`، اتّبع أحد الخيارين:

- Rebase (نظيف):
```powershell
git checkout main
git pull origin main
git checkout feature/your-branch
git rebase main
# حل التعارضات يدويًا في الملفات ثم:
git add .
git rebase --continue
git push --force-with-lease
```

- Merge (أسهل للمبتدئين):
```powershell
git checkout main
git pull origin main
git checkout feature/your-branch
git merge main
# حل التعارضات، ثم:
git add .
git commit
git push
```

> ملاحظة: استخدمي `--force-with-lease` عند إعادة الدفع بعد rebase لتجنّب استبدال تغييرات الآخرين.

## 7. عند قبول PR ودمجه
- بعد الدمج: احذفي الفرع محليًا:
```powershell
git checkout main
git pull origin main
git branch -d feature/your-branch
```
- احذفي الفرع من الريموت عبر GitHub UI أو:
```powershell
git push origin --delete feature/your-branch
```

## 8. سياسة الرسائل (Commit messages)
- استخدم Conventional Commits: `type(scope): short summary`
- أمثلة:
  - `feat(projects): add ProjectCard component`
  - `fix(navbar): fix toggle issue on mobile`
  - `chore(deps): bump bootstrap to ^5.3.8`

## 9. فحص قبل فتح PR (Checklist)
- [ ] Code formatted (Prettier)
- [ ] ESLint passed (locally)
- [ ] No console.log leftover
- [ ] Unit tests (if any) pass
- [ ] Updated `src/styles/colors.css` إذا تأثرت الألوان

## 10. حالات خاصة
- Push to fork ثم create PR: استخدمي `fork` remote كما في القسم 3.
- تجاوز hooks مؤقتًا (غير موصى به): `git commit -m "..." --no-verify`

---
إذا تريدون، أضيف ملف `PR_TEMPLATE.md` تلقائيًا داخل `.github/PULL_REQUEST_TEMPLATE.md` و`ISSUE_TEMPLATE` أيضاً. أخبروني إذا تحبّون أضيف هذه الملفات الآن.
