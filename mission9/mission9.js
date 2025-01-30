document.getElementById('btn-correction').addEventListener('click', function() {
    
    const correctAnswers = {
      q1: '1',
      q2: '1',
      q3: '1',
      q4: '1',
      q5: '1',
      q6: '1',
      q7: '1',
      q8: '1',
      q9: '1',
      q10: '1'
    };
  
   
    let score = 0;
  
   
    for (let question in correctAnswers) {
      let selected = document.querySelector(`input[name="${question}"]:checked`);
      if (selected && selected.value === correctAnswers[question]) {
        selected.parentElement.style.backgroundColor = '#4CAF50'; 
        score++;
      } else if (selected) {
        selected.parentElement.style.backgroundColor = '#f44336';
      }
    }
  
  
    alert(`Votre score est ${score} / 10`);
  });
  
  document.getElementById('btn-corrige').addEventListener('click', function() {
  
    const correctAnswers = {
      q1: 'Couche 3 - Réseau',
      q2: 'Filtrer le trafic entrant et sortant',
      q3: 'Éviter de dupliquer le code',
      q4: 'Une colonne qui identifie de manière unique une ligne',
      q5: 'HyperText Transfer Protocol Secure',
      q6: 'Un planning des tâches du projet',
      q7: 'git clone',
      q8: 'Il attribue des adresses IP dynamiques',
      q9: 'HTTPS chiffre les données échangées',
      q10: 'Créer des interfaces web responsives'
    };
  
    for (let question in correctAnswers) {
      let correctLabel = correctAnswers[question];
      let labels = document.querySelectorAll(`input[name="${question}"]`);
      labels.forEach(label => {
        if (label.nextSibling.textContent.trim() === correctLabel) {
          label.parentElement.style.backgroundColor = '#4CAF50';
        }
      });
    }
  
    
    window.location.href = 'corrige.html'; 
  });
  
  document.getElementById('btn-effacer').addEventListener('click', function() {
    
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
      input.checked = false;
      input.parentElement.style.backgroundColor = '';
    });
  });
  