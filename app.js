// write code here
<script>
        let designTokens = {
            'color-primary-500': '#3498db',
            'color-secondary-500': '#2ecc71',
            'text-color': '#333333',
            'font-base': '16px',
            'font-weight-light': '300',
            'font-weight-regular': '400',
            'font-weight-bold': '700',
            'spacing-small': '8px',
            'spacing-medium': '16px',
            'spacing-large': '24px',
            'border-radius-small': '4px',
            'border-radius-medium': '8px',
            'border-radius-large': '12px'
          };
          
          let userInput = prompt('Enter design token name:');
          let tokenValue = designTokens[userInput];
          
          if (tokenValue !== undefined) {
            alert(`Design token ${userInput}: ${tokenValue}`);
          } else {
            alert(`Design token ${userInput} not found.`);
          }
          
    </script>
