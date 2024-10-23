chrome.storage.sync.get("userData", function(result) {
    const data = result.userData;
    if (data) {
      document.querySelectorAll("input").forEach(input => {
        const label = input.closest('label') ? input.closest('label').innerText : input.placeholder;
  
        // Map input fields to user data based on placeholder/label keywords
        if (label.match(/name/i)) input.value = data.name;
        if (label.match(/age/i)) input.value = data.age;
        if (label.match(/phone|number/i)) input.value = data.phone;
        if (label.match(/email/i) && label.match(/personal/i)) input.value = data.personalEmail;
        if (label.match(/email/i) && label.match(/work|college/i)) input.value = data.collegeEmail;
        if (label.match(/cgpa/i)) input.value = data.cgpa;
        if (label.match(/branch/i)) input.value = data.branch;
        if (label.match(/college/i)) input.value = data.collegeName;
        if (label.match(/roll/i)) input.value = data.rollNumber;
        if (label.match(/father/i)) input.value = data.fatherName;
        if (label.match(/mother/i)) input.value = data.motherName;
        if (label.match(/10th/i)) input.value = data.percentage10;
        if (label.match(/12th/i)) input.value = data.percentage12;
        if (label.match(/school/i)) input.value = data.schoolName;
        if (label.match(/address/i)) input.value = data.address;
        if (label.match(/city/i)) input.value = data.city;
        if (label.match(/pin/i)) input.value = data.pin;
      });
    }
  });
  