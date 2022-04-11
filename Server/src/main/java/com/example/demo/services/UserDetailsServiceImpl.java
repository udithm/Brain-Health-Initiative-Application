package com.example.demo.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.models.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	UserRepository userRepository;
	@Override
	@Transactional
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(email)
				.orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + email));
		return UserDetailsImpl.build(user);
	}
	
//	public UserDetails loadUserById(int id) throws UsernameNotFoundException {
//		User user = userRepository.findById(id)
//				.orElseThrow(() -> new UsernameNotFoundException("User Not Found with id: " + String(id));
//		return UserDetailsImpl.build(user);
//	}
//	public void updatePassword(User user) {
//        user.setPassword(user.getPassword());
//        userRepository.save(user);
//    }
}