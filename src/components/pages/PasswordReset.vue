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
    </template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { setNewPassword } from '../configs/requests';
    import UserModel from '../../model/userModel';

    const props = defineProps({
        newPassword: String
    });

    const password = ref(props.newPassword || '');

    const submitNewPassword = () => {
        console.log('New Password:', password.value);
        const u = new UserModel()
        let us = JSON.parse(u.findAndRetrieveInfos(null))
        console.log('user_id', us)
        console.log('user_id', us._id)
    
        const response = setNewPassword(us._id, password.value, window.location.href.split('newPasswordToken=')[1])
        console.log(response)
        if(response.status == 200) {
            alert('great')
        }
    };

    const goBackHome = () => {
        window.location.href = "/";
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