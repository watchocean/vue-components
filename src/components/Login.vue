<template>
	<div class="loginBox">
		<img src = "../assets/user.png" class="user">
		<h2>Log In Here</h2>
		<form>
			<p>帐 号</p>
			<input type="text" name="" placeholder="手机/邮箱/用户名" v-model = "userName" required>
			<p>密 码</p>
			<input type="password" name="" placeholder="••••••" v-model = "userPwd" required>
			<input type="submit" name="" value="登 录" @click = "login">
			<a href="#">忘记密码?</a>
		</form>
	</div>
</template>
<script>
	import "../assets/style.css"
	import axios from 'axios'

	export default {
		data() {
			return {
				userName: '',
				userPwd: ''
			}
		},
		methods: {
			login() {
				let path = '/employee/employeeLogin'
				let component = '/admin'
				let param = {
					userName: this.userName,
					userPwd: this.userPwd
				}
				axios.post(path, param).then((response) => {
					let res = response.data;
					if (res.status === '200') {
						this.$router.push({ path: component})
					} else {
						alert(res.message);
					}

				});
			}
		}
	}
</script>

<style scoped> 
</style>