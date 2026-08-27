function load(){
 const data=JSON.parse(localStorage.getItem('mundoSingularDemo')||'[]');
 const i=data.reduce((s,x)=>s+(Number(x.independent)||0),0);
 const a=data.reduce((s,x)=>s+(Number(x.supported)||0),0);
 document.getElementById('sessions').textContent=data.length;
 document.getElementById('independentTotal').textContent=i;
 document.getElementById('supportedTotal').textContent=a;
 const tbody=document.getElementById('history');
 tbody.innerHTML=data.length?[...data].reverse().map(x=>`<tr><td>${x.profile||'Criança A'}</td><td>${x.activity||'-'}</td><td>${x.supportLevel||'A'}</td><td>${Number(x.independent)||0}</td><td>${Number(x.supported)||0}</td><td>${x.date||''}</td></tr>`).join(''):'<tr><td colspan="6">Nenhuma sessão registrada.</td></tr>';
 const t=i+a;
 document.getElementById('insight').textContent=!t?'Realize atividades para gerar uma leitura demonstrativa.':i/t>=.75?'Predominam respostas independentes nas sessões registradas. Observe se o padrão se mantém em diferentes contextos.':i/t>=.4?'Há combinação de respostas independentes e com apoio. Observe em quais atividades as pistas são mais necessárias.':'O apoio foi utilizado com frequência. Observe quais pistas favorecem a participação.';
}
function clearDemo(){localStorage.removeItem('mundoSingularDemo');load()}
window.addEventListener('DOMContentLoaded',load);