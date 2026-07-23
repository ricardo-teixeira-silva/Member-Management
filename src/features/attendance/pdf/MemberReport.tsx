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
    <div class="church">${member.church.name}</div>
    <div class="subtitle">Lista de Presença da Reunião</div>
  </div>
  <img class="logo" src="${member.church.logo}" />
</div>

<div class="card">
  <img class="avatar" src="${member.photo}" />
  <div class="info">
    <div class="name">${member.name}</div>
    <div class="role">${member.role}</div>
  </div>
</div>

<div class="title">Presenças Registradas</div>

<table>
  <tr><td>Arnaldo Barbosa</td><td>Pastor Local</td></tr>
  <tr><td>Betabia Maria</td><td>Missionária</td></tr>
  <tr><td>Claudio Roberto</td><td>Presbítero</td></tr>
  <tr><td>Sandra Silva</td><td>Diaconisa</td></tr>
  <tr><td>Marcos Paulo</td><td>Evangelista</td></tr>
  <tr><td>Luciana Gomes</td><td>Professora da Escola Bíblica</td></tr>
  <tr><td>José Almeida</td><td>Diácono</td></tr>
  <tr><td>Patrícia Souza</td><td>Missionária</td></tr>
  <tr><td>Fernando Costa</td><td>Varão</td></tr>
  <tr><td>Helena Martins</td><td>Dirigente de Círculo de Oração</td></tr>
  <tr><td>Rafael Nunes</td><td>Auxiliar de Trabalho</td></tr>
  <tr><td>Carolina Dias</td><td>Secretária da Congregação</td></tr>
</table>

<div style="margin-top:20px; font-size:14px; color:#374151;">
  Observação: Na reunião do dia 20/07/2026 estiveram presentes 17 obreiros. 
  Foi abordado o tema sobre horários de culto, participação da Escola Bíblica 
  e levantamento de fundos para reforma da igreja. Também foram discutidas 
  estratégias para fortalecer o grupo de jovens, organizar visitas missionárias 
  em bairros próximos e planejar a confraternização anual da congregação. 
  Houve consenso sobre a importância de ampliar a comunicação interna e 
  incentivar maior envolvimento dos membros nas atividades semanais.
</div>

<div class="footer">
  Documento gerado pelo Aplicativo da Igreja Missionária Livre dos Apóstolos • 2026
</div>

</body>
</html>
`;
}
