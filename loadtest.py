from locust import HttpUser, task, between

class LoadTestUser(HttpUser):
    wait_time = between(1, 5)

    @task
    def cpu_intensive_task(self):
        self.client.get("/cpu")  # Ubah sesuai endpoint aplikasi kamu