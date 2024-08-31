<template>
    <div class="reset-password-container">
        <h2>Reset Your Password</h2>
        <form @submit.prevent="submitNewPassword">
            <div class="input-group">
            <label for="new-password">New Password</label>
            <input 
                type="password" 
                id="new-password" 
                v-model="password" 
                placeholder="Enter your new password"
                required 
            />
            </div>
            <button type="submit" class="submit-button">Reset Password</button>
        </form>
        <button @click="goBackHome" class="back-button">Go Back</button>
        </div>
        <SimpleAlerts
            @close="handleAlertClose"
            :title="alertTitle"
            :message="alertMessage"
            :show="showAlert"
            :customProperties="alert"
            custom="true"
        >
        </SimpleAlerts>
    </template>

<script setup>
    import { ref } from 'vue';
    import { setNewPassword } from '../configs/requests';
    import UserModel from '../../model/userModel';
    import SimpleAlerts from 'simple-alerts';
    import 'simple-alerts/dist/simpleAlertsVue.css';

    const props = defineProps({
        newPassword: String
    });

    let alertTitle = ref('Success');
    let alertMessage = ref('Password changed!');
    let showAlert = ref(false); // Make showAlert reactive
    let alert = {
        autoClose: false,
        timer: 3000,
        backgroundColor: 'white',
        textColor: '#000000',
        closeButton: true,
        closeButtonText: 'Close'
    };
    let lastResponseStatus = ref(0);

    const password = ref(props.newPassword || '');

    const submitNewPassword = async () => {
        try {
            const u = new UserModel();
            let us = JSON.parse(u.findAndRetrieveInfos(null));

            const response = await setNewPassword(us._id, password.value, window.location.href.split('newPasswordToken=')[1]);
            console.log(response);

            if (response.status === 200) {
                // Handle success
                alertTitle.value = 'Success';
                alertMessage.value = 'Password successfully changed!';
                showAlert.value = true;
                lastResponseStatus.value = 200
            } else {
                // Handle failure
                alertTitle.value = 'Error';
                alertMessage.value = 'Failed to change password. Please try again.';
                showAlert.value = true;
            }
        } catch (error) {
            console.error('Error while submitting new password:', error);
            alertTitle.value = 'Error';
            alertMessage.value = 'An error occurred. Please try again later.';
            showAlert.value = true;
        }
    };

    const goBackHome = () => {
        window.location.href = "/";
    };

    const handleAlertClose = () => {
        showAlert.value = false;
        if(lastResponseStatus.value === 200) {
            window.location.href = '/';
        }
    };

    </script>

<style scoped>
    .reset-password-container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        border-radius: 8px;
        background-color: #f9f9f9;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        text-align: center;
    }
    
    h2 {
        margin-bottom: 20px;
    }
    
    .input-group {
        margin-bottom: 20px;
        text-align: left;
    }
    
    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }
    
    input {
        width: 95%;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #ccc;
    }
    
    .submit-button, .back-button {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: none;
        border-radius: 4px;
        background-color: #007BFF;
        color: white;
        cursor: pointer;
    }
    
    .back-button {
        background-color: #6c757d;
    }
    
    .submit-button:hover, .back-button:hover {
        opacity: 0.9;
    }
    </style>