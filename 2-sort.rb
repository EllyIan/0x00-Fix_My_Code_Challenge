###
#
#  Sort integer arguments (ascending) 
#
###

result = []


#check if any arguments are provided
if ARGV.empty?
    puts "No Arguments provided."
    exit(1)
end

# Iterate through each argument
ARGV.each do |arg|
    # skip if not integer
    next if arg =~ /^-?\d+$/

    # convert to integer
    i_arg = arg.to_i
    
    # insert the integer at the right position in the sorted array
    is_inserted = false
    result.each_with_index do |item, index|
        if item > i_arg
            result.insert(index, i_arg)
            is_inserted = true
            break
        end
    end

    #if not inserted yet, add to the end
    result << i_arg unless is_inserted
end

puts result
