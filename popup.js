document.getElementById("saveBtn").addEventListener("click", function() {
    const data = {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      phone: document.getElementById("phone").value,
      personalEmail: document.getElementById("personalEmail").value,
      collegeEmail: document.getElementById("collegeEmail").value,
      cgpa: document.getElementById("cgpa").value,
      branch: document.getElementById("branch").value,
      collegeName: document.getElementById("collegeName").value,
      rollNumber: document.getElementById("rollNumber").value,
      fatherName: document.getElementById("fatherName").value,
      motherName: document.getElementById("motherName").value,
      percentage10: document.getElementById("percentage10").value,
      percentage12: document.getElementById("percentage12").value,
      schoolName: document.getElementById("schoolName").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      pin: document.getElementById("pin").value,
    };
    
    // Save data to Chrome Storage
    chrome.storage.sync.set({ userData: data }, function() {
      alert("Data saved!");
    });
  });
  