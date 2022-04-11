package com.example.demo.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Admin;
import com.example.demo.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminRepository adminRepository;

	@Override
	public List<Admin> getAllAdmins() {
		return adminRepository.findAll();
	}

	@Override
	public void addAdmin(Admin admin) {
		this.adminRepository.save(admin);
	}

	@Override
	public Admin getAdminById(long id) {
		Optional<Admin> optional = adminRepository.findById(id);
		Admin admin = null;
		if (optional.isPresent()) {
			admin = optional.get();
		} else {
			throw new RuntimeException(" Admin not found for id :: " + id);
		}
		return admin;
	}

	@Override
	public void deleteAdminById(long id) {
		this.adminRepository.deleteById(id);
	}
}
