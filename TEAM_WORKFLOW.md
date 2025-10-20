# دليل عمل الفريق: إنشاء الفرع ورفع الشغل (Branch & PR Workflow)

هذا الملف يشرح خطوات العمل اليومية لكل عضو في الفريق — من إنشاء فرع إلى فتح Pull Request ومتابعة المراجعات والدمج.

## 1. القواعد العامة
- اتبعوا اسماء الفروع التالية:
  - feature/<short-desc>  — لميزات جديدة
  - fix/<short-desc>      — لإصلاحات
  - chore/<short-desc>    — مهام صيانة أو تحديثات غير وظيفية
  - docs/<short-desc>     — تغييرات في الوثائق
- استخدم Conventional Commits لرسائل الكوميت (مثال: ` ).
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
git push -u origin اسم الفرع
```

>

## 4. فتح Pull Request (PR)
1. اذهب إلى صفحة الريبو على GitHub. ستظهر لك زر `Compare & pull request` عند دفع الفرع.
2. املأ عنوان الـ PR بوصف قصير (استخدم نفس رسالة الكوميت الرئيسية):

```
