export function MemberReport(member: any) {
  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 40px;
  color: #111827;
}

.header {
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:30px;
}


.church {
  font-size:22px;
  font-weight:bold;
}


.subtitle {
  color:#6b7280;
  font-size:12px;
  margin-top:5px;
}


.logo {
  width:60px;
  height:60px;
  border-radius:12px;
}



.card {

  background:#f3f4f6;
  border-radius:16px;
  padding:20px;
  display:flex;
  align-items:center;
  margin-bottom:30px;

}

.avatar {

 width:100px;
 height:100px;
 border-radius:50%;

}


.info {

 margin-left:20px;

}


.name {

 font-size:24px;
 font-weight:bold;

}


.role {

 display:inline-block;
 background:#2563eb;
 color:white;
 padding:6px 14px;
 border-radius:20px;
 font-size:12px;
 margin-top:10px;

}



.title {

 font-size:16px;
 font-weight:bold;
 margin-bottom:15px;

}



table {

 width:100%;
 border-collapse:collapse;

}


td {

 padding:12px;
 border-bottom:1px solid #e5e7eb;

}


.label {

 color:#6b7280;
 width:35%;

}



.footer {

 position:fixed;
 bottom:20px;
 width:100%;
 text-align:center;
 color:#9ca3af;
 font-size:10px;

}


</style>


</head>


<body>


<div class="header">


<div>

<div class="church">
${member.church.name}
</div>


<div class="subtitle">
Ficha oficial de membro
</div>


</div>


<img
class="logo"
src="${member.church.logo}"
/>


</div>




<div class="card">


<img
class="avatar"
src="${member.photo}"
/>


<div class="info">


<div class="name">
${member.name}
</div>


<div class="role">
${member.role}
</div>


</div>


</div>




<div class="title">
Informações pessoais
</div>



<table>


<tr>
<td class="label">
Idade
</td>

<td>
${member.age} anos
</td>

</tr>


<tr>
<td class="label">
Telefone
</td>

<td>
${member.phone}
</td>

</tr>



<tr>
<td class="label">
Email
</td>

<td>
${member.email}
</td>

</tr>



<tr>
<td class="label">
Batismo
</td>

<td>
${member.baptism}
</td>

</tr>


</table>



<div class="footer">

Documento gerado pelo Sistema da Igreja • 2026

</div>



</body>

</html>
`;
}
