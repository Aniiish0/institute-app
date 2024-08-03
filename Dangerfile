# Dangerfile

# Ensure that PRs are not too large
warn("Big PR, try to keep changes smaller if possible") if git.lines_of_code > 500

# Ensure that there are no TODOs left in the code
has_todo = `grep -i TODO -r . | wc -l`.to_i > 0
warn("Please remove all TODOs before merging") if has_todo

# Run ESLint and report any issues
es_lint_report = `npx eslint 'src/**/*.ts' --format json`
results = JSON.parse(es_lint_report)
results.each do |result|
  result['messages'].each do |msg|
    warn("#{msg['message']} (#{msg['ruleId']})", file: result['filePath'], line: msg['line'])
  end
end

# Ensure that the PR title follows conventional commit messages
pr_title = github.pr_title
unless pr_title.match?(/^(feat|fix|docs|style|refactor|test|chore|revert)(\([a-z]+\))?: .{1,50}$/)
  warn("PR title does not follow conventional commit message format")
end

# Check for test file changes
test_files = git.modified_files.select { |file| file =~ /test|spec/ }
warn("No test changes detected") if test_files.empty?

# Check for package.json changes when there are new dependencies
if git.modified_files.include?("package.json")
  package_diff = JSON.parse(`git diff origin/main..HEAD package.json`)
  new_deps = package_diff['dependencies'] || {}
  new_dev_deps = package_diff['devDependencies'] || {}

  unless new_deps.empty? && new_dev_deps.empty?
    unless git.modified_files.include?("yarn.lock") || git.modified_files.include?("package-lock.json")
      warn("Changes were made to package.json without corresponding changes to yarn.lock or package-lock.json")
    end
  end
end

# Check for updates to documentation
doc_files = git.modified_files.select { |file| file =~ /docs|README.md/ }
warn("Consider updating documentation") if doc_files.empty?